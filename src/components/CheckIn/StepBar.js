import React from 'react';
import PropTypes from 'prop-types';
import { Step } from 'semantic-ui-react';

const StepBar = ({ active }) => {
  const steps = [
    {
      key: '1',
      active: active === 1,
      title: 'Mood',
    },
    {
      key: '2',
      active: active === 2,
      title: 'Feelings',
    },
    {
      key: '3',
      active: active === 3,
      title: 'Comment',
    },
  ];

  return <Step.Group size="tiny" fluid unstackable items={steps} />;
};

StepBar.propTypes = {
  active: PropTypes.number.isRequired,
};

export default StepBar;
