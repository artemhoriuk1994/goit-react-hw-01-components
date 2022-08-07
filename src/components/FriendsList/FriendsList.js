import style from '../FriendsList/FriendsList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={style.item} key={id}>
          <span
            className={style.status}
            style={{ backgroundColor: isOnline ? 'red' : 'green' }}
          ></span>
          <img
            className={style.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={style.name}>{name}</p>
        </li>
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
