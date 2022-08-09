import style from './FriendsList.module.css';

const FriendsListItem = ({ id, name, isOnline, avatar }) => {
  return (
    <li className={style.item} key={id}>
      <span
        className={style.status}
        style={{ backgroundColor: isOnline ? 'red' : 'green' }}
      ></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

export default FriendsListItem;
