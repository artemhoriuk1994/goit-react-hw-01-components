import style from '../Profile/Profile.module.css';
const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt={username} class={style.avatar} />
        <p className={style.name}>{username}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>
      <ul className={style.stats}>
        <li className={style.stats_item}>
          <span className={style.lable}>Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={style.stats_item}>
          <span className={style.lable}>Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={style.stats_item}>
          <span className={style.lable}>Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
