import React, {Component} from 'react';

export default class AddNewItem extends Component{

    render(){
        return(
            <div className="row">
                <form className="col s12">
                  <div className="row">
                      <div className="input-field ">
                          <input placeholder="Item Name"  type="text" className="validate"/>
                          <input placeholder="Price"  type="number" className="validate"/>
                          <input placeholder="GST Slab"  type="number" className="validate"/>
                      </div>
                  </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        )
    }
}