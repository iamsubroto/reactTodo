import React, { Component } from 'react';


const AppContext = React.createContext();

class AppProvider extends Component {
        state = {
        isAddTodos: true,
        editData: {
            userId: '',
            id: '',
            title: '',
            completed: ''
        },
        todos: [
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            }, {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
            }, {
                "userId": 1,
                "id": 3,
                "title": "fugiat veniam minus",
                "completed": false
            }, {
                "userId": 1,
                "id": 4,
                "title": "et porro tempora",
                "completed": true
            }
        ]
    }
    onDelete = (id) => {
        const newTodos = this.state.todos.filter((item) => {
            return item.id != id;
        });
        this.setState({todos: newTodos});
    }
    onAdd = (title, id, e) => {
        if(title === '') return;
        const newTodo = {
            title,
            id,
            completed: false
        }
        this.setState((prevState) => ({todos: prevState.todos.concat(newTodo)}));
    }

    onEdit = (ItemId) => {
        this.setState({isAddTodos: false});
        var result = this.state.todos.filter(item => {
            if (item.id == ItemId) return item;
        });
        const { userId, id, title, completed } = result[0];
        this.setState({
            editData: {
                userId,
                id,
                title,
                completed
            }
        })
        console.log(result);
    }
    onSave= (itemId, myRef) => {
        const savedTodos = this.state.todos.map(item => {
            const { userId, id, completed } = item;
            if(item.id == itemId) {
                return {
                    userId,
                    id,
                    title: myRef.current.value,
                    completed,
                }
            } 
           return item; 
        });
        this.setState({todos: savedTodos});
        this.setState({isAddTodos: true});
    }
    render() {
        const contextValue = {
            data: this.state,
            onDelete: this.onDelete,
            onAdd: this.onAdd,
            onEdit: this.onEdit,
            onSave: this.onSave
        }
        return (
            <AppContext.Provider value={contextValue}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppProvider;
export const AppConsumer = AppContext.Consumer;