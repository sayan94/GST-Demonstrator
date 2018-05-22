import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';


export default class AddNewItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[]
        };
    }
    async componentDidMount(){
       let resp = await axios.get('/api/getItems') ;
       let items= resp.data;
       this.setState({
           items
       });
       console.log(this.state);
    }

    render(){
        return(
        <div>
            <h3>ITEMS</h3>
            <table className="stripped responsive-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>GST %</th>
                    <th>Created At</th>
                    <th>Total Price</th>
                </tr>
                </thead>

                <tbody>
                  {this.state.items.map((item)=>(
                      <tr key={item._id}>
                         <td>{item.name}</td>
                          <td>Rs {item.price}</td>
                          <td>{item.gst} %</td>
                          <td>{ moment(item.createdAt).format("LLL")}</td>
                          <td>Rs {item.totalPrice}</td>
                      </tr>
                  ))}
                </tbody>
            </table>
            <div className="fixed-action-btn">
                <Link to="/add/item" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
        )
    }
}