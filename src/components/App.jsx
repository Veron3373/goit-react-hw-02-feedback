import React, { Component } from "react";
import Control from "./Controlc"
import { Good, Neutral, Bad, Total, PositiveFeedback } from './Value'

class Counter extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    feedbac: 0
  }

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    total: this.props.total,
    feedbac: this.props.feedbac,
  };

  onGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      total: prevState.total + 1
    }));
  };

  onNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
      total: prevState.total + 1
    }));
  };

  onBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
      total: prevState.total + 1
    }));
  };

  render() {
    return (
      <div>
        <Control
          onGood={this.onGood}
          onNeutral={this.onNeutral}
          onBad={this.onBad}
        />
      
          <div>
            <Good good={this.state.good} />
            <Neutral neutral={this.state.neutral} />
            <Bad bad={this.state.bad} />
            <Total total={this.state.total} />
            <PositiveFeedback feedbac={this.state.feedbac} />
          </div>
  
      </div>
    )
  }
};
export default Counter







