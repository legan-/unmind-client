import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Label, Icon } from 'semantic-ui-react';
import { Face } from '../../components/common';

const formatDate = rawDate => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const format = int => (int < 10 ? '0' : '') + int;

  const d = new Date(rawDate);

  const date = `${d.getDate()} ${monthNames[d.getMonth()]}`;
  const time = `${format(d.getHours())}:${format(d.getMinutes())}:${format(d.getSeconds())}`;

  return `${date} - ${time}`;
};

const ItemTitle = ({ index, activeIndex, mood, createdAt, onClick }) => (
  <Accordion.Title active={activeIndex === index} index={index} onClick={onClick}>
    <Icon name="dropdown" />
    {formatDate(createdAt)}
    <Label className="list-mood">
      <Face type={mood} size={20} />
    </Label>
    <div className="clear" />
  </Accordion.Title>
);

ItemTitle.propTypes = {
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  mood: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ItemTitle;
