import React, { useState } from 'react';
import MyCalendar from '../Calendar/Calendar';
import styles from './Header.module.css'
import logo from './../../assets/UY Scuti.PNG'
import MyClock from '../Clock/Clock';
import ModalWindow from '../ModalWindow/ModalWindow';
import ReactClock from '../Clock/ReactClock';


const Header = () => {
    const[calendar,setCalendar] = useState(false)
    const [clock,setClock] = useState(false)

    let showCalendar = () => {
        setCalendar(!calendar)
        document.body.style.overflow = calendar ? "auto" : "hidden"
    }
    let showClock = () => {
        setClock(!clock)
        document.body.style.overflow = clock ? "auto" : "hidden"
    }
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__inner}>
                    <div className={styles.header__logo}>
                        <img className={styles.header__logo_img} width="50px" src={logo} alt=""/>
                    </div>
                    <div className={styles.header__items} >
                        <button id="clockButton" className={styles.header__clock} onClick={showClock}>
                            <MyClock />
                        </button>
                        <button id="calendar" style={ calendar ? {border:"2px solid rgb(51 105 213)",boxShadow:"0 0 5px rgb(51 105 213)"} : null } className={styles.header__button} onClick={showCalendar}>
                            {new Date().toDateString()}
                        </button>
                    </div>
                </div>
            </div>
            {ModalWindow(ReactClock)(showClock,clock)}
            {ModalWindow(MyCalendar)(showCalendar,calendar)} 
        </header>
    )
}



export default Header;
