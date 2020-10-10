import React from 'react'
import { connect } from 'react-redux';
import { setNewWorkBodyAC, setWorkToListAC, clearListAC } from '../../reducers/list-reducer';
import TodoList from './TodoList';



class TodoListContainer extends React.Component {

    addWorkInputOnClick = e => {
        e.preventDefault()
        this.props.addWorkInputOnClick()
    }

    addWorkInputOnChange = e => {
        this.props.addWorkInputOnChange(e.target.value)
    }

    clearListOnClick = () => {
        this.props.clearList()
    }
    render() {
        return (
            <div>
                <TodoList 
                    {...this.props}
                    addWorkInputOnClick={this.addWorkInputOnClick}
                    addWorkInputOnChange={this.addWorkInputOnChange}
                    clearListOnClick={this.clearListOnClick}
                 />
            </div>
        )
    }
}

let mapStateToProps = state =>{
    return {
        listData: state.listData
    }
}

let mapDispatchToProps = dispatch =>{
    return {
        addWorkInputOnClick: () => {
            dispatch(setWorkToListAC())
        },
        addWorkInputOnChange: body =>{
            dispatch(setNewWorkBodyAC(body))
        },
        clearList: () => {
            dispatch(clearListAC())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);