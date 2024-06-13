/* import React from 'react'; */

import FriendList from './FriendList/FriendList';
import Profile from './Profile/Profile';
import profileData from './Profile/profileData.json';
import friend from './FriendList/friends.json';
import transactionData from './TransactionHistory/transactionData.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';



const App = () => {
  return (
    <>
      <Profile
        username={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
      />
      <FriendList friends={friend} />
      <TransactionHistory items={transactionData} />
    </>
  );
};

export default App;