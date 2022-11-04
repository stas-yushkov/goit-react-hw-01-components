import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';

import { Wrapper } from './StyledComponents';

export const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </Wrapper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
