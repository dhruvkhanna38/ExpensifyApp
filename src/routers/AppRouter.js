import ReactDOM from 'react-dom';
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ExpenseDashboardPage} from "../components/ExpenseDashboardPage";
import {AddExpensePage, ConnectedAddExpensePage} from "../components/AddExpensePage";
import {EditExpensePage, ConnectedEditExpensePage} from "../components/EditExpensePage";
import {HelpPage} from "../components/HelpPage";
import {NotFoundPage} from "../components/NotFoundPage";
import {Header} from "../components/Header";


const AppRouter = ()=>{
   return (
      <BrowserRouter>
         <Header></Header>
         <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}></Route>
            <Route path="/create" component={ConnectedAddExpensePage}></Route>
            <Route path="/help" component={HelpPage}></Route>
            <Route path="/edit/:id" component={ConnectedEditExpensePage} />
            <Route component={NotFoundPage}></Route>
         </Switch>
      </BrowserRouter>
   )
}

export {AppRouter}