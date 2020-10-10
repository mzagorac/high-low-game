import React, {useState} from "react";
import { connect } from 'react-redux'
import { placeBet } from "../redux/actions/gameActions";

import './styles/Input.css';

const Input = ({bet, placeBet, warning, label, name}) => {
  const [, setNewBet] = useState(bet);

  const changeBetHandler = e => {
    if (Number(e.target.value) > 0) {
      setNewBet(Number(e.target.value))
      placeBet(Number(e.target.value))
    }
  }

  return (
    <div className="Input">
      <label htmlFor={name}>{label}</label>
      <input type="number" id={name} value={bet} onChange={changeBetHandler} />
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
