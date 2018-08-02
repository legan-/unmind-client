import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Button, Header, Grid } from 'semantic-ui-react';

const Step2 = ({
  active,
  feelings,
  activeFeelings,
  onFeelingClick,
  onPrevStepClick,
  onNextStepClick,
}) => {
  return (
    active === 2 && (
      <Segment color="blue" attached>
        <Header as="h3" content="Your feelings" textAlign="center" />
        <Grid columns="equal" textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <Button.Group basic vertical fluid>
                {feelings.map(f => (
                  <Button
                    key={f.id}
                    name={f.id}
                    active={activeFeelings.includes(f.id)}
                    onClick={onFeelingClick}>
                    {f.name}
                  </Button>
                ))}
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button fluid onClick={onPrevStepClick}>
                Back
              </Button>
            </Grid.Column>
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

Step2.propTypes = {
  active: PropTypes.number.isRequired,
  feelings: PropTypes.array.isRequired,
  activeFeelings: PropTypes.array.isRequired,
  onFeelingClick: PropTypes.func.isRequired,
  onPrevStepClick: PropTypes.func.isRequired,
  onNextStepClick: PropTypes.func.isRequired,
};

export default Step2;
