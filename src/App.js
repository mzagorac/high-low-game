import React, { useEffect } from "react";
import { connect } from "react-redux";

import Cardboard from "./components/Cardboard";
import Interface from "./components/Interface";
import Stats from "./components/Stats";

import { fetchDeck } from "./redux/actions/deckActions";

import "./App.css";

function App({getDeck}) {
  useEffect(() => {
    getDeck();
  }, [getDeck]);

  return (
    <div className="App">
      <h1>High-Low</h1>
      <Stats />
      <Cardboard />
      <Interface />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getDeck: () => dispatch(fetchDeck()),
});

export default connect(null, mapDispatchToProps)(App);
