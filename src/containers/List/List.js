import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion } from 'semantic-ui-react';
import { Loader } from '../../components/common';
import { Item } from '../../components/List';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.onListItemClick = this.onListItemClick.bind(this);
  }

  onListItemClick(e, titleProps) {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { isLoading, data } = this.props;

    const list = () => {
      if (data.length) {
        return data.map((insight, i) => (
          <Item
            key={i}
            index={i}
            activeIndex={this.state.activeIndex}
            insight={insight}
            onListItemClick={this.onListItemClick}
          />
        ));
      } else {
        return 'No insights added';
      }
    };

    const content = <Accordion fluid>{list()}</Accordion>;

    return <Segment>{isLoading ? <Loader /> : content}</Segment>;
  }
}

List.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
};

export default List;
