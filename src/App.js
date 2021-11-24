import React, { useState } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGoodFeedback = event => {
    event.preventDefault();

    setGood(good + 1);
  };

  const onNeutralFeedback = event => {
    event.preventDefault();

    setNeutral(neutral + 1);
  };

  const onBadFeedback = event => {
    event.preventDefault();

    setBad(bad + 1);
  };

  const totalStatisticCount = good + neutral + bad;
  const positivePercentage = Math.round((good / totalStatisticCount) * 100);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={[
            { name: 'good', func: onGoodFeedback },
            { name: 'neutral', func: onNeutralFeedback },
            { name: 'bad', func: onBadFeedback },
          ]}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalStatisticCount}
          positivePercentage={positivePercentage}
        ></Statistics>
      </Section>

      {totalStatisticCount === 0 && (
        <Notification message="No feedback given"></Notification>
      )}
    </>
  );
};

export default App;
