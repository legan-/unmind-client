import React from 'react';
import PropTypes from 'prop-types';
import { Segment, Button, Header, Grid, Form } from 'semantic-ui-react';

const Step3 = ({ active, text, onCommentChange, onPrevStepClick, onSubmitBtnClick }) => {
  return (
    active === 3 && (
      <Segment color="blue" attached>
        <Header as="h3" content="Comment" textAlign="center" />
        <Grid columns="equal" textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <Form>
                <Form.TextArea onChange={onCommentChange} value={text} />
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button fluid onClick={onPrevStepClick}>
                Back
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button fluid primary onClick={onSubmitBtnClick}>
                Done
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  );
};

Step3.propTypes = {
  active: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onCommentChange: PropTypes.func.isRequired,
  onPrevStepClick: PropTypes.func.isRequired,
  onSubmitBtnClick: PropTypes.func.isRequired,
};

export default Step3;
