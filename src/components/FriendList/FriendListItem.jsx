import { Item, Status, Avatar, Name } from './StyledComponents';

import { randomDarkColor } from 'utils';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline} />
      <Avatar
        color={randomDarkColor()}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <Name>{name}</Name>
    </Item>
  );
};
