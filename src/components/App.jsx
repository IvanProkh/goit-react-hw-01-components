import Profile from './user/User.jsx';
import user from './user/user.json';

import Statistics from './statistics/Statistics';
import data from './statistics/data.json';

import FriendList from './friendList/FriendList';
import friends from './friendList/friends.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
