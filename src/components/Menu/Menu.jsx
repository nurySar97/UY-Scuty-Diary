import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css'
import { scaleRotate as Menu } from 'react-burger-menu'
import logo from './../../assets/UY Scuti.PNG'

let menuStyles = {
    bmBurgerButton: {
      zIndex:"13",
      position: 'fixed',
      width: '50px',
      height: '30px',
      left: '36px',
      top: '20px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '35px',
      width: '35px',
      marginRight:"20px"
    },
    bmCross: {
      background: '#bdc3c7',
      height:"35px"
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      position:"fixed",
      background: '#373a47',
      padding: '0 1.5em 0',
      fontSize: '1.15em',
      overflow: "hidden"
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      outline:"none",
      display: 'flex'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  


class BurgerMenu extends React.Component {
    showSettings (event) {
      event.preventDefault();
      console.log(event)
    }
   
    render () {
      return (
        <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } styles={menuStyles} isOpen={false}>
          
          <div className={styles.menu__title}>
          <div className={styles.menu__title_logo}><img className={styles.menu__title_img} src={logo} alt=""/></div>
            <div className={styles.menu__title_name}>UY Scuti</div>
          </div>

          <nav className={styles.BurgerMenu__navItems}>
            <div className={styles.BurgerMenu__navItem}>
              <i className="fas fa-list-alt"></i>
              <NavLink className={styles.BurgerMenu__link} activeClassName={styles.active} to="./todo">
                Plan Your Day
              </NavLink>
            </div>
            <div className={styles.BurgerMenu__navItem}>
              <i className="far fa-images"></i>
              <NavLink className={styles.BurgerMenu__link} activeClassName={styles.active} to="./theme">
                Themes
              </NavLink>
            </div>
          </nav>
        </Menu>
      );
    }
  }







export default BurgerMenu;



        {/* <NavLink className={styles.BurgerMenu__link} activeClassName={styles.active} to="/Monday">
              Monday
            </NavLink>
            <NavLink className={styles.BurgerMenu__link} activeClassName={styles.active} to="/Tuesday">
              Tuesday
            </NavLink>
            <NavLink className={styles.BurgerMenu__link} activeClassName={styles.active} to="/Wednesday">
              Wednesday
            </NavLink>
            <NavLink className={styles.BurgerMenu__link} activeClassName={styles.active} to="/Thursday">
              Thursday
            </NavLink>
            <NavLink className={styles.BurgerMenu__link} activeClassName={styles.active} to="/Friday">
              Friday
            </NavLink>
            <NavLink className={styles.BurgerMenu__link} activeClassName={styles.active} to="/Saturday">
              Saturday
            </NavLink>
            <NavLink className={styles.BurgerMenu__link} activeClassName={styles.active} to="/Sunday">
              Sunday
            </NavLink> */}