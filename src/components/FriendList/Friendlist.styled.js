import styled from 'styled-components';

export const StyleFriendsList = styled('ul')(() => {
  return {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    padding: '0',
  };
});
