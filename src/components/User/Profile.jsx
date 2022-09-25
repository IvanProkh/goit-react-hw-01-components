import PropTypes from 'prop-types';

import { ProfileLayout } from './ProfileLayout';

export const Profile = ({ items }) => {
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
