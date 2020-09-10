import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Player from './player/Player';
import styles from './App.css';

export default function App() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrap}>
        <Router>
          {/* <Header /> */}
          <Switch>
            <Route exact path='/' component={Player} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </div>
    </div>
  );
}
