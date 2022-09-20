// import PropTypes from 'prop-types';
// import styles from './user.module.css';
// console.log('~ styles', styles);

import ProfileLayout from './ProfileLayout';

const Profile = ({ items }) => {
  return (
    <ProfileLayout
      username={items.username}
      tag={items.tag}
      location={items.location}
      avatar={items.avatar}
      stats={items.stats}
    />
  );
};

// Profile.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   stats: PropTypes.object.isRequired,
// };

export default Profile;
