import React, { Component } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import SectionTitle from './SectionTitle/SectionTitle';
import Notification from './Notification/Notification';

import style from './App.module.css';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = state => {
    this.setState(initialState => ({[state]: initialState[state] + 1,}));
  };

  feedbackCounter() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  positivePercentCounter() {
    const { good } = this.state;
    return Math.round((good / this.feedbackCounter()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
  
    return (
      <div className={style.container}>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            options={options}
            leaveFeedback={this.leaveFeedback}
          />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {this.feedbackCounter() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.feedbackCounter()}
              positivePercent={this.positivePercentCounter()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </SectionTitle>
      </div>
    );
  }
}