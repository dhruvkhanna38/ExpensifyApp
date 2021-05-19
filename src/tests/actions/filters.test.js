import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from "../../actions/filters"
import moment from "moment";

test("should generate setStartDate action object", ()=>{
   const action = setStartDate(moment(0));
   expect(action).toEqual({
      type:"SET_START_DATE",
      date: moment(0) 
   })
})

test("should generate setEndDate action object", ()=>{
   const action = setEndDate(moment(0));
   expect(action).toEqual({
      type:"SET_END_DATE",
      date: moment(0) 
   })
})

test("should generate setTextFilter with set text value", ()=>{
   const text = "Something in";
   const action = setTextFilter(text);
   expect(action).toEqual({
      type:'SET_TEXT_FILTER',
      filter: text
   })
})

test("should generate setTextFilter with default", ()=>{
   const action = setTextFilter();
   expect(action).toEqual({
      type:'SET_TEXT_FILTER',
      filter: ''
   })
})

test("should generate action object with sort by date", ()=>{
   expect(sortByDate()).toEqual({
      type:'SORT_BY_DATE'
   })
})

test("should generate action object with sort by amount", ()=>{
   expect(sortByAmount()).toEqual({
      type:'SORT_BY_AMOUNT'
   })
})



