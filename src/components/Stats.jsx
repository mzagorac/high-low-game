import React from "react";
import {connect} from 'react-redux'

const Stats = ({currentAmount}) => {
  return (
    <div>
      <h2>You curently have {currentAmount} coins</h2>

    </div>
  );
};

const mapStateToProps = state => ({
  currentAmount: state.game.playersCoin
})

export default connect(mapStateToProps)(Stats) ;
