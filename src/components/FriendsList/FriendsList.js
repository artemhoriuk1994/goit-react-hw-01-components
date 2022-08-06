import style from '../FriendsList/FriendsList.module.css';
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
export default FriendList;
