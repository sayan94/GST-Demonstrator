import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component{

    render(){
        return(
           <nav>
               <div className="nav-wrapper">
                   <h3 className="left brand-logo" style={{ margin: '20px 30px' }}> GST Demonstrator</h3>
                   <ul className="right">
                       <li key="1" style={{ margin: '0 30px' }}>
                           <Link to="/">View All Items</Link>
                       </li>
                   </ul>
               </div>
           </nav>
        )
    }
}