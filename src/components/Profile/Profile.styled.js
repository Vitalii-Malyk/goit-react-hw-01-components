import styled from 'styled-components';

export const StyleProfile = styled('div')(() => {
  return {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '3px 3px #4ba3c1, -0.3em 0 0.3em #4ba3c1',
    borderRadius: '4%',
    overflow: 'hidden',
  };
});

export const StyleDescription = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
});

export const StyleProfilImage = styled('img')(() => {
  return {
    display: 'block',
    marginTop: '70px',
    backgroundColor: 'antiquewhite',
    maxWidth: '70%',
    borderRadius: '50%',
  };
});

export const StyleProfilName = styled('p')(() => {
  return {
    fontSize: '48px',
    fontWeight: '500',
    margin: '40px 0 0 0',
  };
});

export const StyleProfilTag = styled('p')(() => {
  return {
    fontSize: '32px',
    color: '#858587',
    margin: '40px 0 0 0',
  };
});

export const StyleProfilLocation = styled('p')(() => {
  return {
    fontSize: '32px',
    color: '#858587',
    margin: '40px 0 0 0',
  };
});

export const StyleProfilStatsWrap = styled('ul')(() => {
  return {
    listStyle: 'none',
    padding: '0',
    margin: '40px 0 0 0',
    width: '100%',
    height: '120px',
    color: '#858587',
    backgroundColor: '#f5eeee',
    display: 'flex',
  };
});

export const StyleProfilStatsLi = styled('li')(() => {
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

export const StyleProfilStatsSpanQuantity = styled('span')(() => {
  return {
    fontWeight: '700',
    color: 'rgb(46, 45, 45, 0.8)',
  };
});
