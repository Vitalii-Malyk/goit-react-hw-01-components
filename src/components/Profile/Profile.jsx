import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleProfile = styled('div')(() => {
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

const StyleDescription = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
});

const StyleProfilImage = styled('img')(() => {
  return {
    display: 'block',
    marginTop: '70px',
    backgroundColor: 'antiquewhite',
    maxWidth: '70%',
    borderRadius: '50%',
  };
});

const StyleProfilName = styled('p')(() => {
  return {
    fontSize: '48px',
    fontWeight: '500',
    margin: '40px 0 0 0',
  };
});

const StyleProfilTag = styled('p')(() => {
  return {
    fontSize: '32px',
    color: '#858587',
    margin: '40px 0 0 0',
  };
});

const StyleProfilLocation = styled('p')(() => {
  return {
    fontSize: '32px',
    color: '#858587',
    margin: '40px 0 0 0',
  };
});

const StyleProfilStatsWrap = styled('ul')(() => {
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

const StyleProfilStatsLi = styled('li')(() => {
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

const StyleProfilStatsSpanQuantity = styled('span')(() => {
  return {
    fontWeight: '700',
    color: 'rgb(46, 45, 45, 0.8)',
  };
});

export const Profile = ({ name, tag, location, src, stats }) => {
  return (
    <StyleProfile className="profile">
      <StyleDescription className="description">
        <StyleProfilImage src={src} alt="User avatar" className="avatar" />
        <StyleProfilName className="name">{name}</StyleProfilName>
        <StyleProfilTag className="tag">{tag}</StyleProfilTag>
        <StyleProfilLocation className="location">
          {location}
        </StyleProfilLocation>
      </StyleDescription>

      <StyleProfilStatsWrap className="stats">
        <StyleProfilStatsLi>
          <span className="label">Followers</span>
          <StyleProfilStatsSpanQuantity className="quantity">
            {stats.followers}
          </StyleProfilStatsSpanQuantity>
        </StyleProfilStatsLi>
        <StyleProfilStatsLi>
          <span className="label">Views</span>
          <StyleProfilStatsSpanQuantity className="quantity">
            {stats.views}
          </StyleProfilStatsSpanQuantity>
        </StyleProfilStatsLi>
        <StyleProfilStatsLi>
          <span className="label">Likes</span>
          <StyleProfilStatsSpanQuantity className="quantity">
            {stats.likes}
          </StyleProfilStatsSpanQuantity>
        </StyleProfilStatsLi>
      </StyleProfilStatsWrap>
    </StyleProfile>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  stats: {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  },
};
