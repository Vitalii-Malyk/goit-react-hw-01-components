import styled from 'styled-components';

export const StyleSection = styled('section')(() => {
  return {
    width: '800px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: '80px',
    borderRadius: '36px',
  };
});

export const StyleTitle = styled('h2')(() => {
  return {
    margin: '0',
    display: 'flex',
    alignItems: 'center',
    padding: '70px 0',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
  };
});

export const StyleStatList = styled('ul')(() => {
  return {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    width: '100%',
    height: '120px',
    color: '#fff',
    display: 'flex',
  };
});

export const StyleStatItem = styled('li')(() => {
  return {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    border: '1px solid rgb(133, 133, 135, 0.1)',
    width: 'calc(100% / 3)',
    fontSize: '28px',
  };
});

export const StylePercentage = styled('span')(() => {
  return {
    fontWeight: '500',
    fontSize: '42px',
  };
});
