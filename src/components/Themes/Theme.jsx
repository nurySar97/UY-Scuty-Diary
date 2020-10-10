import React from 'react';
import { connect } from 'react-redux';
import styles from './Theme.module.css'
import ThemeList from './ThemeList/ThemeList';



const Theme = props => {
    let themeElement = props.themeData.themeData.images.map((a,index) => <ThemeList key={index} images={a} />)
    return (
        <div className={styles.theme}>
            <div className={styles.container}>
                <div className={styles.theme__photos}>
                    {themeElement}
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        themeData: state.themeData
    }
}



export default connect(mapStateToProps)(Theme)