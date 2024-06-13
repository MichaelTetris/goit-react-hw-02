import css from './profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={css['userCard']}>
      <div className={css['box']}>
        <img src={avatar} alt="User avatar" className={css['avatar']} />

        <div className={css['direction']}>
          <p className={css['name']}>{username}</p>
          <p className={css['text']}>@{tag}</p>
          <p className={css['text']}>{location}</p>
        </div>
      </div>

      <ul className={css['stats']}>
        <li className={css['item']}>
          <span className={css['trascription']}>Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={css['item']}>
          <span className={css['trascription']}>Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={css['item']}>
          <span className={css['trascription']}>Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;