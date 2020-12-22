import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import ConcertList from "./Pages/ConcertList/ConcertList";
import Account from "./Pages/Account/Account";
import Notice from "./Pages/Notice/Notice";
import AlbumDetail from "./Pages/AlbumList/AlbumDetail";
import AlbumList from "./Pages/AlbumList/AlbumList";
import Footer from "./Components/Footer/Footer";
import SignIn from "./Pages/Account/SignIn";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/AlbumList" component={AlbumList} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/AlbumList/detail/:id" component={AlbumDetail} />
          <Route exact path="/AlbumList/:currentPage" component={AlbumList} />
          <Route exact path="/ConcertList" component={ConcertList} />
          <Route exact path="/Account" component={Account} />
          <Route exact path="/Notice" component={Notice} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
