import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import View1 from './View1';
import View2 from './View2';
import View3 from './View3';

class AppShell extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Page 1</Link>
          <Link to="/page2">Page 2</Link>
          <Link to="/page3">Page 3</Link>
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={View1}/>
            <Route path="/page2" component={View2}/>
            <Route path="/page3" component={View3}/>
          </Switch>
        </main>

        <footer>
          Made with Love
        </footer>
      </div>
    );
  }
}

export default AppShell;
