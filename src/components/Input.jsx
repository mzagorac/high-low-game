import React, {useState} from "react";
import { connect } from 'react-redux'
import { placeBet } from "../redux/actions/gameActions";

const Input = ({bet, placeBet, warning}) => {
  const [newBet, setNewBet] = useState(bet);

  const changeBetHandler = e => {
    if (e.target.value >= 0) {
      setNewBet(e.target.value)
      placeBet(e.target.value)
    }
  }

  return (
    <div>
      <label>
        Place Bet
        <input type="number" value={bet} onChange={changeBetHandler} />
      </label>
      {warning && <p>{warning}</p>}
    </div>
  );
};

const mapStateToProps = state => ({
  bet: state.game.bet,
  // coinTotal: state.game.playersCoin,
  warning: state.game.warning
});

const mapDispatchToProps = dispatch => ({
  placeBet: (amount) => dispatch(placeBet(amount))
})
  


export default connect(mapStateToProps, mapDispatchToProps)(Input) ;
