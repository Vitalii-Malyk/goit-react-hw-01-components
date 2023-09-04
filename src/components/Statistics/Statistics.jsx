import PropTypes from 'prop-types';

import { randomColor } from 'helper/functions';

import {
  StyleSection,
  StyleTitle,
  StyleStatList,
  StyleStatItem,
  StylePercentage,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StyleSection className="statistics">
      {title && <StyleTitle className="title">{title}</StyleTitle>}
      <StyleStatList className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <StyleStatItem
              className="item"
              key={id}
              style={{ backgroundColor: randomColor() }}
            >
              <span className="label">{label}</span>
              <StylePercentage className="percentage">
                {percentage} %
              </StylePercentage>
            </StyleStatItem>
          );
        })}
      </StyleStatList>
    </StyleSection>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
