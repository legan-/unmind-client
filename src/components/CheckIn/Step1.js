import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Header, Button, Input, Grid } from 'semantic-ui-react';
import { Face } from '../../components/common';

const Step1 = ({ active, mood, onMoodChange, onNextStepClick }) => {
  return (
    active === 1 && (
      <Segment color="blue" attached>
        <Header as="h3" content="Current mood" textAlign="center" />
        <Grid columns="equal" textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <Face size={120} type={mood} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Input
                min={1}
                max={7}
                name="mood"
                onChange={onMoodChange}
                step={1}
                type="range"
                value={mood}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button fluid primary onClick={onNextStepClick}>
                Next
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  );
};

Step1.propTypes = {
  active: PropTypes.number.isRequired,
  mood: PropTypes.number.isRequired,
  onMoodChange: PropTypes.func.isRequired,
  onNextStepClick: PropTypes.func.isRequired,
};

export default Step1;
