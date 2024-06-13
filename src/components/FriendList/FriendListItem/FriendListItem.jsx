import css from './FriendListItem.module.css'


export const FriendListItem = ({ friend: {
  avatar, name, isOnline,
}}) => {
  return <li className={css.listItems}>
        
          <img className={css.img} src={avatar} alt="Avatar" width="48" />
          <p className={css.friendName}>{name}</p>
          <p>
            {isOnline ? (<span className={css.friendOnline}>Online</span>) : (<span className={css.friendOffline}>Offline</span>)}
          </p>
        
      </li>
}