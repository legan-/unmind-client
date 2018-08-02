import React from 'react';
import PropTypes from 'prop-types';
import { Statistic, Segment, Grid } from 'semantic-ui-react';
import { Loader } from '../common';
import Button from './_Button';
import { Face } from '../../components/common';

const Summary = ({ isLoading, avgMood, percentage, total }) => {
  const staticsticsRow = (
    <Grid.Row columns={2} divided>
      <Grid.Column verticalAlign="middle">
        <Face type={avgMood} size={90} />
      </Grid.Column>
      <Grid.Column>
        <Statistic size="small">
          <Statistic.Value>{percentage}%</Statistic.Value>
          <Statistic.Label>
            Based on {total} entr
            {total === 1 ? 'y' : 'ies'}
          </Statistic.Label>
        </Statistic>
      </Grid.Column>
    </Grid.Row>
  );

  const buttonRow = (
    <Grid.Row>
      <Button />
    </Grid.Row>
  );

  const content = (
    <Grid textAlign="center" padded>
      {staticsticsRow}
      {buttonRow}
    </Grid>
  );

  return <Segment raised>{isLoading ? <Loader /> : content}</Segment>;
};

Summary.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  avgMood: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Summary;
