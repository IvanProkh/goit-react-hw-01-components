// import PropTypes from 'prop-types';
// import styles from '';

const FriendList = ({ friends }) => {
  return (
    <ul classname="friend-list">
      {friends.map(friend => (
        <li className="item" key={friend.id}>
          <span className="status">{friend.status}</span>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

// FriendList.propTypes = {
//   friends: PropTypes.object.isRequired,
// };

export default FriendList;
