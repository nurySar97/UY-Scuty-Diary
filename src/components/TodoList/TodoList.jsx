import React from 'react';
import styles from './TodoList.module.css';
import ListContainer from './List/ListContainer';


const TodoList = props => {
    let list = props.listData.works.map((l, index )=> {
        return (
            <ListContainer 
                key={index} 
                userId={l.userId} 
                title={l.title}
                changeText={l.changeText}
                completed={l.completed}
            />
        )
    })
    return (
        <div className={styles.TodoList}>
           <div className={styles.container}>
               <div className={styles.TodoList__inner}>
                    <div className={styles.TodoList__form_container}>
                        <form className={styles.TodoList__form} onSubmit={props.addWorkInputOnClick}>
                            <div className={styles.TodoList__form_inner}>
                                <input 
                                    className={styles.TodoList__input_text} 
                                    type="text" 
                                    onChange={props.addWorkInputOnChange}
                                    placeholder={"Write Here..."}
                                    value={props.listData.newWorkBody}
                                />
                                <div className={styles.TodoList__buttons}>
                                    <input className={styles.TodoList__Btn_addWork} type="submit" value={"Add Work"}/>
                                    <input className={styles.TodoList__Btn_Clear} onClick={props.clearListOnClick} type="button" value={"Clear"}/>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className={styles.TodoList__List}>
                        {list.reverse()}
                    </div>
               </div>
           </div>
        </div>
    )
}



export default TodoList;