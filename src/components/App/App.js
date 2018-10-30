import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from '../Main/MainPage';
import AdminPanel from '../Admin/AdminPanel';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/admin" component={AdminPanel}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
