import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';
import Title from './_ItemTitle';
import Content from './_ItemContent';

const Item = ({ index, activeIndex, insight, onListItemClick }) => {
  const { mood, comment, feelings, createdAt } = insight;

  return (
    <div>
      {index !== 0 ? <Divider /> : ''}
      <Title
        index={index}
        activeIndex={activeIndex}
        mood={mood}
        createdAt={createdAt}
        onClick={onListItemClick}
      />
      <Content index={index} activeIndex={activeIndex} comment={comment} feelings={feelings} />
    </div>
  );
};

Item.propTypes = {
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  insight: PropTypes.shape({
    mood: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    feelings: PropTypes.array.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  onListItemClick: PropTypes.func.isRequired,
};

export default Item;
