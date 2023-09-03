import styled from 'styled-components';

export const StyleTable = styled('table')(() => {
  return {
    fontSize: '14px',
    width: '640px',
    textAlign: 'center',
    borderCollapse: 'collapse',
    background: '#252F48',
    margin: '10px',
  };
});

export const StyleTableHeader = styled('thead')(() => {
  return {
    color: '#EDB749',
    borderBottom: '1px solid #37B5A5',
    padding: '12px 17px',
    fontSize: '18px',
  };
});
export const StyleTableTerm = styled('td')(() => {
  return {
    color: '#CAD4D6',
    borderBottom: '1px solid #37B5A5',
    borderRight: '1px solid #37B5A5',
    padding: '7px 17px',
  };
});
