import React from 'react';
import styles from './ThemeImgGalery.module.css'


const ThemeImgGalery = props => {
    return (
        <div className={styles.themeGalery}>
            <img className={styles.themeGalery__img} src={props.data} alt=""/>
        </div>
    )
}



export default ThemeImgGalery;