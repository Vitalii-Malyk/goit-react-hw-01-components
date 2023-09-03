import styled from 'styled-components';

export const StyleSection = styled('section')(() => {
  return {
    padding: '70px',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #000',
  };
});

export const StyleSectionTitle = styled('h2')(() => {
  return {
    textAlign: 'center',
  };
});
