import PropTypes from 'prop-types';
import {
  StyleProfile,
  StyleDescription,
  StyleProfilImage,
  StyleProfilName,
  StyleProfilTag,
  StyleProfilLocation,
  StyleProfilStatsWrap,
  StyleProfilStatsLi,
  StyleProfilStatsSpanQuantity,
} from './Profile.styled';

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
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
