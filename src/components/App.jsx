import { Profile } from './user/Profile';
import user from './user/user.json';

import { Statistics } from './statistics/Statistics';
import data from './statistics/data.json';

import { FriendList } from './friendList/FriendList';
import friends from './friendList/friends.json';

import { TransactionHistory } from './transactionHistory/TransactionHistory';
import transactions from './transactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile items={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

// export const App = () => {
//   return (
//     <div>
//       <Profile
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={user.stats}
//       />
//       <Statistics stats={data} />
//       <FriendList friends={friends} />
//       <TransactionHistory items={transactions} />
//     </div>
//   );
// };
