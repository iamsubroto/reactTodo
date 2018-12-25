import React, { Component } from 'react'
import AddTodos from './AddTodos';
import EditTodos from './EditTodos'
import { AppConsumer } from '../context'
class ActionTodos extends Component {

  render() {
    return (
        <AppConsumer>
            {
                (context) => {
                    const { isAddTodos } = context.data;
                    if(isAddTodos)
                        return <AddTodos />
                    else
                        return <EditTodos />
                }
            }
        </AppConsumer>
    )
  }
}


export default ActionTodos;