import PropTypes from 'prop-types';
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

Profile.propTypes = {
  items: PropTypes.object.isRequired,
};

export default Profile;
