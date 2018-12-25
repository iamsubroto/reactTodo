import React, { Component } from 'react'
import { AppConsumer } from '../context'

class Todo extends Component {
  render(props) {

    return (
        <AppConsumer>
            {
                (context) => {
                    const { todos } = context.data;  
                    const { onDelete, onEdit } = context;
                    return (
                            todos.map((item) => {
                                return (
                                <>    
                                <p className="d-flex" key={item.id}>
                                    <span className="mr-auto">{item.title}</span>
                                    <span className="fas fa-pencil-alt mr-2" style={{cursor: "pointer"}} onClick={onEdit.bind(this, item.id)}></span>
                                    <i className="fas fa-trash-alt ml-2" style={{cursor: "pointer"}} onClick={onDelete.bind(this, item.id)}></i> 
                                </p>
                                </>
                                )
                            })
                    )
                }
            }
        </AppConsumer>
    )
  }
}

export default Todo;