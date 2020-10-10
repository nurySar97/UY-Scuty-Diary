import React from 'react';
import { Route, Router, Switch, withRouter } from 'react-router-dom';
import styles from'./App.module.css';
import Header from './components/Header/Header';
import BurgerMenu from './components/Menu/Menu';
import Theme from './components/Themes/Theme';
import TodoListContainer from './components/TodoList/TodoListContainer';

function App() {
  return (
    <div id='bodyApp' className={styles.bodyApp}>
      <div id="outer-container">
        <BurgerMenu />
        <main id="page-wrap">
          <Header />
            <Switch>
              <Route path="/todo" render={()=> <TodoListContainer/>} />
              <Route exact path="/theme" render={() => <Theme />}  />
            </Switch>
        </main>
      </div>
    </div>
  );
}

export default withRouter(App);
