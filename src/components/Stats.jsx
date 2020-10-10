import React from "react";
import {connect} from 'react-redux'

const Stats = ({currentAmount}) => {

  console.log(typeof currentAmount)
  return (
    <div>
      {
        currentAmount > 0 ? 
          <h2>{`You, currently, have ${currentAmount} ${currentAmount === 1 ? 'coin' : 'coins'}`}</h2> :
          <h2>You are out of coin</h2>
      }

    </div>
  );
};

const mapStateToProps = state => ({
  currentAmount: state.game.playersCoin
})

export default connect(mapStateToProps)(Stats) ;
