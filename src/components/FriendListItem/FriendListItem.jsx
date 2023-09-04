import {
  StyleFriendsItem,
  StyleFriendsStatus,
} from 'components/FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <StyleFriendsItem className="friend-item">
      <StyleFriendsStatus $status={isOnline} className="status">
        {isOnline}
      </StyleFriendsStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </StyleFriendsItem>
  );
};
