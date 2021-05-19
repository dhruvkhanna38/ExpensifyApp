import {createStore, combineReducers} from 'redux';
import { v1 as uuid } from 'uuid'

//ADD_EXPENSE
const addExpense = ({description='', note='', amount=0, createdAt=0}={})=>{
   return(
      {
         type:'ADD_EXPENSE',
         expense : {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
         }
      }
   )
}

const removeExpense = ({id}={})=>{
   return ({
      type:'REMOVE_EXPENSE',
      id
   })
}

const editExpense = (id, updates)=>{
   return (
      {
         type:'EDIT_EXPENSE',
         id,
         updates
      }
   )
}

const setTextFilter = (filter)=>{
   return (
      {
         type:'SET_TEXT_FILTER',
         filter
      }
   )
}


const sortByAmount = ()=>{
   return (
      {
         type:'SORT_BY_AMOUNT'
      }
   )
}


const sortByDate = ()=>{
   return (
      {
         type:'SORT_BY_DATE'
      }
   )
}


const setStartDate = (date=undefined)=>{
   return ({
      type:'SET_START_DATE',
      date
   })
}

const setEndDate = (date=undefined)=>{
   return ({
      type:'SET_END_DATE',
      date
   })
}

const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action)=>{
   switch(action.type){
      case 'ADD_EXPENSE': return [...state, action.expense];

      case 'REMOVE_EXPENSE': return state.filter((expense)=>{
         if(expense.id === action.id){
            return false;
         }else{
            return true;
         }
      })

      case 'EDIT_EXPENSE': return state.map((expense)=>{
         if(expense.id === action.id){
            return {...expense, ...action.updates}
         }else{
            return expense;
         }
      })

      default: return state;
   }
}

const stateReducerDefaultState = {
      text : '',
      sortBy: 'date',
      startDate : undefined,
      endDate: undefined
}


const filtersReducer = (state =  stateReducerDefaultState, action)=>{
   switch(action.type){
      case 'SET_TEXT_FILTER': return {...state, text: action.filter};

      case 'SORT_BY_AMOUNT' : return {...state, sortBy: 'amount'}

      case 'SORT_BY_DATE': return {...state, sortBy:'date'}

      case 'SET_START_DATE': return {...state,  startDate: action.date}

      case 'SET_END_DATE': return {...state,  endDate: action.date}

      default: return state;
   }
}




// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());




const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate})=>{
   return expenses.filter((expense)=>{
      const startDateMatch= typeof startDate!=='number' || expense.createdAt >=startDate;
      const endDateMatch = typeof endDate!=='number' || expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
   }).sort((a, b)=>{
      if(sortBy==='date'){
         return a.createdAt < b.createdAt ? 1 : -1; 
      }
      else if(sortBy==='amount'){
         return a.amount < b.amount ? 1 : -1;
      }
   })
}

const store = createStore(combineReducers(
   {
      expenses: expensesReducer,
      filters: filtersReducer
   }
));



const unsubscribe = store.subscribe(()=>{
   const state = store.getState();
   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
   console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description:"Hello", amount:10, createdAt:1000}));
const expenseTwo = store.dispatch(addExpense({description:"Hello Again", amount:20, createdAt:-1000}));
store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(250));

const demoState = {
   expenses :[{
      id: 'lorem',
      description:'ipsum',
      note:'dolor',
      amount: 54500,
      createdAt: 0
   }],
   filters:{
      text : 'rent',
      sortBy: 'amount',
      startDate : undefined,
      endDate: undefined
   }
}

