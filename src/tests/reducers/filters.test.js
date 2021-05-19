import { TestScheduler } from "@jest/core";
import {filtersReducer} from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values",()=>{
   const state = filtersReducer(undefined, {type:'@@INIT'})
   expect(state).toEqual({
      text:'',
      sortBy:'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
   })
})

test("should set sortby by amount", ()=>{
   const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'})
   expect(state).toEqual({
      text:'',
      sortBy:'amount',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
   })
})

test("should set sortby by date", ()=>{
   const currentState = {
      text:'',
      sortBy:'amount',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
   }
   const action = {
      type:'SORT_BY_DATE'
   }

   const state = filtersReducer(currentState, action)
   expect(state.sortBy).toBe('date')
})

test("should set text filter", ()=>{
   const text = "Something In";
   const action = {
      type:'SET_TEXT_FILTER',
      text
   }
   const state = filtersReducer(undefined, action)
   expect(state.text).toBe(text)
})

test("should set startDate filter", ()=>{
   const date = moment();
   const action = {
      type:'SET_START_DATE',
      date
   }
   const state = filtersReducer(undefined, action)
   expect(state.startDate).toBe(date)

})


test("should set EndDate filter", ()=>{
   const date = moment();
   const action = {
      type:'SET_END_DATE',
      date
   }
   const state = filtersReducer(undefined, action)
   expect(state.endDate).toBe(date)
})
