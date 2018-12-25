import React, { Component } from 'react'
import { AppConsumer } from '../context'
import uuidv1 from 'uuid/v1'

 class EditTodos extends Component {
  constructor(props) {
      super(props);
      this.myRef = React.createRef();
  }  

  handleSubmit = (e) => {
      e.preventDefault();
      this.setState({value: ''});
      console.log(this.myRef.current.value);

      
  }
  render() {
    return (
        <AppConsumer>
            {
                (context) => {
                    const { id, title} = context.data.editData;
                    return (
                        <form onSubmit={this.handleSubmit}>
                            <div className="row align-items-center">
                                <div className="col-md-9">
                                    <div className="form-group pt-3">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        defaultValue={title}
                                        ref={this.myRef}
                                        required
                                         />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                <button 
                                type="submit"
                                    className="btn btn-success shadow" 
                                    style={
                                    {
                                        borderRadius: "50%",
                                        width: "50px", 
                                        height: "50px",
                                        padding: "0px !important"
                                        }
                                    }
                                    onClick= {context.onSave.bind(this, id, this.myRef) }
                                    >
                                    <i className="fas fa-check" style={{fontSize: "20px"}}></i>
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


export default EditTodos;