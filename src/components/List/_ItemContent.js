import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Label } from 'semantic-ui-react';

const ItemContent = ({ index, activeIndex, comment, feelings }) => (
  <Accordion.Content active={activeIndex === index} className="list-active-item">
    <dl>
      <dt>Comment</dt>
      <dd>{comment}</dd>
      <dt>{feelings.length ? 'Feelings' : ''}</dt>
      <dd>
        {feelings.map((f, i) => (
          <Label key={i}>{f.name}</Label>
        ))}
      </dd>
    </dl>
  </Accordion.Content>
);

ItemContent.propTypes = {
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  feelings: PropTypes.array.isRequired,
};

export default ItemContent;
