import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class AddNewItem extends Component{

    render(){
        return(
        <div>
            <h1>Dashboard</h1>
            <div className="fixed-action-btn">
                <Link to="/add/item" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
        )
    }
}