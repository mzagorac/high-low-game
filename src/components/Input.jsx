import React, {useState} from "react";
import { connect } from 'react-redux'
import { placeBet } from "../redux/actions/gameActions";

const Input = ({bet, placeBet, warning}) => {
  const [, setNewBet] = useState(bet);

  const changeBetHandler = e => {
    if (Number(e.target.value) > 0) {
      setNewBet(Number(e.target.value))
      placeBet(Number(e.target.value))
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
  warning: state.game.warning
});

const mapDispatchToProps = dispatch => ({
  placeBet: (amount) => dispatch(placeBet(amount))
})
  


export default connect(mapStateToProps, mapDispatchToProps)(Input) ;
