import { name, tag, location, avatar, stats } from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';

import Container from 'components/Container';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';

function App() {
  return (
    <Container>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title={'upload stats'} stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
    </Container>
  );
}

export default App;
