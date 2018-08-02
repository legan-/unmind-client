import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Container } from 'semantic-ui-react';

import { Summary } from '../../components/Home';
import List from '../List';

class Home extends Component {
  componentDidMount() {
    document.title = `Unmind - ${this.props.title}`;
  }

  render() {
    const { loading, data } = this.props;

    const total = data.length || 0;

    const moodSum = data.map(i => i.mood).reduce((a, b) => a + b, 0);
    const avgMood = total ? Math.round(moodSum / total) : 4;
    const percentage = total ? Math.round((moodSum / total / 8) * 100) : 0;

    return (
      <Container>
        <Summary isLoading={loading} avgMood={avgMood} percentage={percentage} total={total} />
        <List isLoading={loading} data={data} />
      </Container>
    );
  }
}

const Query = gql`
  {
    allInsights(direction: DESC) {
      id
      mood
      comment
      createdAt
      feelings {
        name
      }
    }
  }
`;

const QueryHandler = {
  props: ({ props, data: { loading, allInsights = [] } }) => ({
    ...props,
    loading,
    data: allInsights,
  }),
};

export default graphql(Query, QueryHandler)(Home);
