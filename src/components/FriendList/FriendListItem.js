function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li>
      {avatar}
      {name}
      {isOnline}
    </li>
  );
}

export default FriendListItem;
