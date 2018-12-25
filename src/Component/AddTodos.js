import React, { Component } from 'react'
import { AppConsumer } from '../context'
import uuidv1 from 'uuid/v1'

 class AddTodos extends Component {
  constructor(props) {
      super(props);
      this.state = {
          value: ''
      }
  }  
  handleChange = (e) => {
      this.setState({value: e.target.value});
  }
  handleSubmit = (e) => {
      e.preventDefault();
      this.setState({value: ''})
      
  }
  render() {
    return (
        <AppConsumer>
            {
                (context) => {
                    const { onAdd } = context;
                    return (
                        <form onSubmit={this.handleSubmit}>
                            <div className="row align-items-center">
                                <div className="col-md-9">
                                    <div className="form-group pt-3">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        onChange={this.handleChange}
                                        value={this.state.value}
                                        required
                                         />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                <button 
                                    className="btn btn-primary shadow" 
                                    style={
                                    {
                                        borderRadius: "50%",
                                        width: "50px", 
                                        height: "50px",
                                        padding: "0px !important"
                                        }
                                    }
                                    onClick= { onAdd.bind(this, this.state.value, uuidv1()) }
                                    >
                                    <i className="fas fa-plus" style={{fontSize: "20px"}}></i>
                                </button>
                                </div>
                            </div>
                         </form>
                    )
                }
            }
        </AppConsumer>
    )
  }
}


export default AddTodos;