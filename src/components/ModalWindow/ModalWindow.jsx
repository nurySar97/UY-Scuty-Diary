import React from 'react';
import styles from './ModalWindow.module.css'



const ModalWindow = Component => {
    const createModalWindow = (callBack, useState,data) =>{
        return (
            <div className={styles.modal} id="modal" onClick={callBack} style={useState ? null:{transform:"scale(0)"}}>
                <div onClick={e=>e.stopPropagation()} className={styles.modal__inner}>
                <button id="close" className={styles.collapse__closeButton} onClick={callBack}>&times;</button>
                    <Component data={data} />
                </div>
            </div>
        )
    }
    return createModalWindow
}


export default ModalWindow;