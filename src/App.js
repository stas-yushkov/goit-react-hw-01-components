import { name, tag, location, avatar, stats } from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';

import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';

import './css/common.css';

function App() {
  return (
    <>
      <FriendList friends={friends} />
      <Statistics title={'upload stats'} stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </>
  );
}

export default App;
