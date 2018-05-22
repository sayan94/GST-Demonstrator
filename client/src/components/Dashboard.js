import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import PieChart from './PieChart';


export default class AddNewItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[],
            angles: {
                gstFive: 0,
                gstTwelve: 0,
                gstEighteen: 0,
                gstTwentyeight: 0
            }
        };
    }
    async componentDidMount(){
       let resp = await axios.get('/api/getItems') ;
       let items= resp.data;
       let gstFive=0, gstTwelve=0, gstEighteen=0, gstTwentyeight=0;
       let itemsLength = items.length;
       items.forEach((item)=>{
           if(item.gst === 5){
               gstFive++;
           }else if(item.gst === 12){
               gstTwelve++
           }else if(item.gst === 18){
               gstEighteen++
           }else if(item.gst ===28){
               gstTwentyeight++
           }
       });
       gstFive =
       this.setState((prevState)=>{
           return{
               items,
               angles:{
                   gstFive: (gstFive/itemsLength)*360,
                   gstTwelve: (gstTwelve/itemsLength)*360,
                   gstEighteen: (gstEighteen/itemsLength)*360,
                   gstTwentyeight: (gstTwentyeight/itemsLength)*360
               }
           }
       });
    }
    render(){
        return(
        <div>
            <div className="row">
                <h3 className="col s4">ITEMS</h3>
                <div className="col s8">
                    <PieChart  angles={this.state.angles}/>
                </div>
            </div>
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
                          <td>{moment(item.createdAt).format("LLL")}</td>
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