import React from "react";
import {connect} from "react-redux";
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from "../actions/filters";
import {DateRangePicker, DateRangePickerInput} from "react-dates";

class ExpenseListFilters extends React.Component{

   state = {
      calenderFocused: null,

   }

   onDatesChange = ({startDate, endDate})=>{
      this.props.dispatch(setStartDate(startDate));
      this.props.dispatch(setEndDate(endDate));
   }

   onFocusChange = (calenderFocused)=>{
      this.setState(()=>{
         return {
            calenderFocused
         }
      })

   }

   render(){
      return (
         <div>
            <input type="text" value={this.props.filters.text} onChange={(e)=>{
               this.props.dispatch(setTextFilter(e.target.value));
            }}></input>
   
            <select onChange={(e)=>{
               if(e.target.value === 'date'){
                  this.props.dispatch(sortByDate())
               }else if (e.target.value === 'amount'){
                  this.props.dispatch(sortByAmount())
               }
               console.log(e.target.value);
            }}>
               <option value="date">Date</option>
               <option value="amount">Amount</option>
            </select>
            <DateRangePicker startDate={this.props.filters.startDate} endDate={this.props.filters.endDate}
                             onDatesChange={this.onDatesChange} focusedInput={this.state.calenderFocused}
                             onFocusChange={this.onFocusChange} numberOfMonths={1} isOutsideRange={()=>false} showClearDates={true}>
            </DateRangePicker>
         </div>
      )
   }
}


export const ConnectedExpenseListFilters = connect((state)=>{
   return {
      filters: state.filters
   }
})(ExpenseListFilters);