import React, {Component} from 'react';
import axios from 'axios';
export default class AddNewItem extends Component{
     handleSubmit = async (e)=> {

            e.preventDefault();
            if (this._inputName.value !== '' && this._inputPrice !== '' && this._inputGST.value !== '') {
                const newItem = {
                    name: this._inputName.value,
                    price: this._inputPrice.value,
                    gst: this._inputGST.value
                };
                try{
                    const res =  await axios.post('/api/formSubmit', newItem);
                } catch(err) {
                    console.log(err);
                }

            }

            this._inputName.value = '';
            this._inputGST.value = '';
            this._inputPrice.value = '';
        }

    render(){
        return(
            <div className="row">
                <form onSubmit={this.handleSubmit} className="col s12">
                  <div className="row">
                      <div className="input-field ">
                          <input placeholder="Item Name"
                                 ref={(a) => this._inputName = a}
                                 type="text"
                                 className="validate col s3"/>
                          <input
                              placeholder="Price"
                              ref={(b) => this._inputPrice = b}
                              type="number"
                              className="validate col s3 offset-s1"/>
                          <input placeholder="GST Slab"
                                 ref={(c) => this._inputGST = c}
                                 type="number"
                                 className="validate col s3 offset-s1"/>
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