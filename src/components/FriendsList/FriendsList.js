import style from '../FriendsList/FriendsList.module.css';
import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsListItem
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </ul>
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

export default FriendList;
