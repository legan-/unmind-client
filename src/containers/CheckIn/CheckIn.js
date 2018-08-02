import React, { Component } from 'react';
import gql from 'graphql-tag';
import { withRouter } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import { Header, Container } from 'semantic-ui-react';
import { StepBar, Step1, Step2, Step3, CancelBtn } from '../../components/CheckIn';

class CheckIn extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      mood: 4,
      feelings: [],
      comment: '',
      error: [],
    };

    this.onMoodChange = this.onMoodChange.bind(this);
    this.onFeelingClick = this.onFeelingClick.bind(this);
    this.onCommentChange = this.onCommentChange.bind(this);
    this.onPrevStepClick = this.onPrevStepClick.bind(this);
    this.onNextStepClick = this.onNextStepClick.bind(this);
    this.onSubmitBtnClick = this.onSubmitBtnClick.bind(this);
  }

  componentDidMount() {
    document.title = `Unmind - ${this.props.title}`;
  }

  onMoodChange(e, { value }) {
    this.setState({
      mood: parseInt(value, 10),
    });
  }

  onFeelingClick(e, { name }) {
    const id = parseInt(name, 10);
    const feelings = this.state.feelings;
    const isAdded = feelings.includes(id);

    if (isAdded) {
      const index = feelings.indexOf(id);
      feelings.splice(index, 1);
    } else {
      feelings.push(id);
    }

    this.setState({
      feelings,
    });
  }

  onCommentChange(e, { value }) {
    this.setState({
      comment: value,
    });
  }

  onPrevStepClick() {
    const step = this.state.step - 1;
    this.setState({
      step,
    });
  }

  onNextStepClick() {
    const step = this.state.step + 1;
    this.setState({
      step,
    });
  }

  async onSubmitBtnClick() {
    const { mood, comment, feelings } = this.state;
    let response = null;

    try {
      response = await this.props.createInsight({
        variables: {
          mood,
          comment,
          feelings,
        },
      });
    } catch (err) {
      console.error(err);
      return;
    }

    const { success } = response.data.createInsight;

    if (success) {
      this.props.history.push('/');
      alert('Insight successfully added');
    } else {
      alert('Something went wrong');
    }
  }

  render() {
    const { title, feelings } = this.props;
    const { step, mood, comment } = this.state;
    const activeFeelings = this.state.feelings;

    return (
      <Container>
        <Header as="h2" textAlign="center" content={title} />
        <StepBar active={step} />
        <Step1
          active={step}
          mood={mood}
          onMoodChange={this.onMoodChange}
          onNextStepClick={this.onNextStepClick}
        />
        <Step2
          active={step}
          feelings={feelings}
          activeFeelings={activeFeelings}
          onFeelingClick={this.onFeelingClick}
          onPrevStepClick={this.onPrevStepClick}
          onNextStepClick={this.onNextStepClick}
        />
        <Step3
          active={step}
          text={comment}
          onCommentChange={this.onCommentChange}
          onPrevStepClick={this.onPrevStepClick}
          onSubmitBtnClick={this.onSubmitBtnClick}
        />
        <CancelBtn />
      </Container>
    );
  }
}

const GetFeelingsQuery = gql`
  {
    allFeelings {
      id
      name
    }
  }
`;

const QueryProps = {
  props: ({ data: { allFeelings = [] } }) => ({
    feelings: allFeelings,
  }),
};

const SubmitDataMutation = gql`
  mutation($mood: Int!, $comment: String, $feelings: [Int!]!) {
    createInsight(mood: $mood, comment: $comment, feelings: $feelings) {
      success
      insight {
        id
      }
    }
  }
`;

const MutationOptions = {
  name: 'createInsight',
};

export default compose(
  withRouter,
  graphql(GetFeelingsQuery, QueryProps),
  graphql(SubmitDataMutation, MutationOptions)
)(CheckIn);
