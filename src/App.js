import React, { useEffect } from "react";
import { connect } from "react-redux";

import Header from './components/Header';
import Cardboard from "./components/Cardboard";
import Interface from "./components/Interface";
import Stats from "./components/Stats";

// import CanvasTest from './components/CanvasTest';

import { fetchDeck } from "./redux/actions/deckActions";

import "./App.css";

function App({getDeck}) {
  useEffect(() => {
    getDeck();
  }, [getDeck]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Stats />
        <Cardboard />
        {/* <CanvasTest /> */}
        <Interface />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getDeck: () => dispatch(fetchDeck()),
});

export default connect(null, mapDispatchToProps)(App);
