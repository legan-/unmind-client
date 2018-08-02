import React from 'react';
import { Divider, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <Divider hidden />
    <Grid textAlign="center">
      <Grid.Row>
        <Link to="/" className="ui blue tiny basic button">
          Cancel
        </Link>
      </Grid.Row>
    </Grid>
  </div>
);
