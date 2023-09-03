import PropTypes from 'prop-types';
import {
  StyleFriendsList,
  StyleFriendsItem,
  StyleFriendsStatus,
} from 'components/FriendList/Friendlist.styled';

export const FriendList = ({ friends }) => {
  return (
    <StyleFriendsList className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <StyleFriendsItem className="friend-item" key={id}>
            <StyleFriendsStatus $status={isOnline} className="status">
              {isOnline}
            </StyleFriendsStatus>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </StyleFriendsItem>
        );
      })}
    </StyleFriendsList>
  );
};

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
