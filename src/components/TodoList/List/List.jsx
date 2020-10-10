import React from 'react';
import styles from './List.module.css'
import iconPen from './../../../assets/pen Icon.jpg'
import iconSave from './../../../assets/save Icon.jpg'
import ReactSpeechContainer from '../../ReactSpeech/ReactSpeech';

class List extends React.Component {
    render() {
        return (
            <div className={styles.List}>
                <div className={styles.List__inner}>
                {
                    this.props.state.changeText ?
                    <input onChange={this.props.changeTextOnChange} id="changeText" className={styles.List__inputText} value={this.props.state.text} type="text" placeholder="change text..." />
                    :
                    <div style={this.props.state.completed ? null : {textDecorationLine: 'line-through'}} className={styles.List__text}>{this.props.title}</div>
                }
                    <div className={styles.List__items}>
                        <ReactSpeechContainer text={this.props.title} />
                        <button className={styles.List__removeButton} onClick={ ()=> this.props.removeItemOnClick(`button${this.props.userId}`) }>
                            &times;
                        </button>
                       {
                            this.props.state.changeText 
                            ? 
                            <button onClick={ ()=>this.props.saveTextHandleClick(this.props.userId) } className={styles.List__saveButton}>
                                <img className={styles.List__imgIconSave} src={iconSave} alt=""/>
                            </button>
                            : 
                            <button onClick={()=>this.props.changeTextHandleClick(this.props.userId)} className={styles.List__changeButton}>
                                <img className={styles.List__imgIconPen} src={iconPen} alt=""/>
                            </button>
                       }
                       <input onClick={this.props.checkboxHandleClick} className={styles.List_checkbox} type="checkbox"/>
                    </div>

                </div>
            </div>
        )
    }
}






export default List;