import React, { useState } from 'react';
import ModalWindow from '../../ModalWindow/ModalWindow';
import ThemeImgGalery from './ThemeImgGalery/ThemeImgGalery';
import styles from './ThemeList.module.css'


const ThemeList = (props) => {
    const [showGalery,setGalery] = useState({isOpen:false, srcImg:""})

    let changeBgHandleClick = e => {
        let bodyApp = document.getElementById("bodyApp").style
        bodyApp.backgroundImage = `url(${e.target.parentElement.childNodes[1].src})`
        bodyApp.backgroundRepeat = 'no-repeat'
        bodyApp.backgroundSize = 'cover'
        bodyApp.transition = 'backgroundImage .3s linear .2s'
    }
    let themeHandleClick = e => {
        document.body.style.overflow = showGalery.isOpen ? "auto" : "hidden"
        setGalery({
            isOpen: !showGalery.isOpen,
            srcImg: e.target.src ? e.target.src : showGalery.srcImg
        })
    }
    return (
        <>
            <div className={styles.theme__photo}>
                <button className={styles.theme__button} onClick={changeBgHandleClick} >Click Me</button>
                <img className={styles.theme__img} src={`${props.images}`} onClick={themeHandleClick} alt=""/>
            </div>
            {ModalWindow(ThemeImgGalery)(themeHandleClick, showGalery.isOpen, showGalery.srcImg)}
        </>
    )
}



export default ThemeList;