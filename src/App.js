import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import BurgerMenu from './components/Menu/Menu';
import Theme from './components/Themes/Theme';
import TodoListContainer from './components/TodoList/TodoListContainer';

function App() {
  return (
    <div id='bodyApp' className="bodyApp">
      <div id="outer-container">
        <BurgerMenu />
        <main id="page-wrap">
          <Header />
          <Switch>
            <Route exact path="/" render={() => <TodoListContainer />} />
            <Route path="/todo" render={() => <TodoListContainer />} />
            <Route path="/theme" render={() => <Theme />} />
            <Route
                key={"*"}
                path='*'
                render={() => <div dangerouslySetInnerHTML={{ __html: "404 NOT FOUND" }} />}
              />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default withRouter(App);



// import React from 'react';
// import { Route, Switch, withRouter } from 'react-router-dom';
// import Header from './components/Header/Header';
// import BurgerMenu from './components/Menu/Menu';
// import Theme from './components/Themes/Theme';
// import TodoListContainer from './components/TodoList/TodoListContainer';
// import './App.css';
// import {
//   CSSTransition,
//   TransitionGroup,
// } from 'react-transition-group'
// import './styles.css';
// function App() {
//   return (
//     <div id='bodyApp' className="bodyApp">
//       <div id="outer-container">
//         <BurgerMenu />
//         <main id="page-wrap">
//           <Header />
//           <Route render={({location}) => (
//             <TransitionGroup>
//               <CSSTransition timeout={500} classNames="item" key={location.key}>
//                 <Switch location={location}>
//                   <Route path="/todo" render={() => <TodoListContainer />} />
//                   <Route exact path="/theme" render={() => <Theme />} />
//                 </Switch>
//               </CSSTransition>
//             </TransitionGroup>
//           )} />
//         </main>
//       </div>
//     </div>
//   );
// }

// export default withRouter(App);
