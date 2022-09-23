import PropTypes from 'prop-types';
import css from './friendList.module.css';

export const FriendList = ({ friends }) => {
  console.log(friends[0].isOnline);
  // let active;
  return (
    <ul className={css.friend__list}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          {/* {{ {friend.isOnline } && <h2 className={css.title}>{title}</h2>} && <h2 className={css.title}>{title}</h2>} */}

          <span className="status">
            <style>active = friend.isOnline; console.log(active);</style>
          </span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="77"
          />
          <p className={css.name}>{friend.name}</p>
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

//  {/* / {friend.status} / */}

//  style={{ backgroundColor: 'black' }}

// const friend = document.querySelector('.status');
// console.log('~ friend', friend);

// friend.addEventListener('click', findActiveFriends);

// function findActiveFriends(evt) {
//   if (evt.key === 'Escape') {
//     friend.classList.add('online');
//   } else {
//     friend.classList.add('offline');
//   }
// }
