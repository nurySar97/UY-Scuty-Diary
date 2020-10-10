import React from 'react';
import { connect } from 'react-redux';
import { changeTextAC, removeWorkListAC } from '../../../reducers/list-reducer';
import List from './List';



class ListContainer extends React.Component {
    state = {
        changeText: false,
        completed: this.props.completed,
        text: "" 
    }
    removeItemOnClick = userId =>{
        this.props.removeItem(userId)
    }

    changeTextHandleClick = (id) => {
        this.setState({
            ...this.state,
            text: this.props.works[id].title,
            changeText: true
        })
    }

    saveTextHandleClick = (id) =>{
        this.setState({
            changeText: false
        })
        this.props.changeTextFun(id,this.state.text)
    }

    checkboxHandleClick = (e) => {
        this.setState({
            completed: !e.target.checked
        })
    }

    changeTextOnChange = (e) => {
        this.setState({
            ...this.state,
            text: e.target.value
        })
    }
    render() {
        return (
            <List
                removeItemOnClick={this.removeItemOnClick}
                changeTextHandleClick={this.changeTextHandleClick}
                saveTextHandleClick={this.saveTextHandleClick}
                checkboxHandleClick={this.checkboxHandleClick}
                changeTextOnChange={this.changeTextOnChange}
                userId={this.props.userId}
                key={this.props.key}
                title={this.props.title}
                changeText={this.props.changeText}
                completed={this.props.completed}
                state={this.state}
            />
        )
    }
}


const mapStateToProps = state => {
    return {
        works: state.listData.works
    }
}


const mapDispatchToProps = dispatch => {
    return {
        removeItem: userId => {
            dispatch(removeWorkListAC(userId))
        },
        changeTextFun: (userId,text) =>{
            dispatch(changeTextAC(userId,text))
        }
    }
}






export default connect(mapStateToProps,mapDispatchToProps)(ListContainer);