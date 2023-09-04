import styled from 'styled-components';

export const StyleFriendsItem = styled('li')(() => {
  return {
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
    width: '450px',
    backgroundColor: 'antiquewhite',
    boxShadow: '15px 15px 15px -8px rgba(100,135,209,1)',
    borderRadius: '15px',
  };
});

export const StyleFriendsStatus = styled('span')(({ $status }) => {
  return {
    width: '20px',
    height: '20px',
    marginLeft: '20px',
    borderRadius: '50%',
    backgroundColor: $status ? 'green' : 'red',
  };
});
