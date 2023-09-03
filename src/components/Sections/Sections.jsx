import PropTypes from 'prop-types';
import { StyleSection } from './Section.styled';

export function Section({ title, children }) {
  return (
    <StyleSection className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </StyleSection>
  );
}

Section.prototype = {
  title: PropTypes.string,
};
