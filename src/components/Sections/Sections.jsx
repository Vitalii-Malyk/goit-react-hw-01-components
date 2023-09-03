import PropTypes from 'prop-types';
import { StyleSection, StyleSectionTitle } from './Section.styled';

export function Section({ title, children }) {
  return (
    <StyleSection className="section">
      <StyleSectionTitle className="section-title">{title}</StyleSectionTitle>
      {children}
    </StyleSection>
  );
}

Section.prototype = {
  title: PropTypes.string,
};
