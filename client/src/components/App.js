import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import AddNewItem from './AddNewItem';
import Dashboard from './Dashboard' ;
export default class App extends Component{

    render(){
        return(
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Dashboard}/>
                        <Route exact path="/add/item" component={AddNewItem}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}