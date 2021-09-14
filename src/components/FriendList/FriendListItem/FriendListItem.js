import {
  ListItem,
  RoundBlob,
  UserImage,
  UserName,
} from './FriendListItem.styled.jsx';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListItem className="item">
      <RoundBlob className="status" isOnline={isOnline} />
      <UserImage className="avatar" src={avatar} alt={name} width="48" />
      <UserName className="name">{name}</UserName>
    </ListItem>
  );
}

export default FriendListItem;
