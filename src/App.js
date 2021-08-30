import { Component } from 'react';
import Profile from './components/Profile';
import './css/common.css';

import { name, tag, location, avatar, stats } from './user.json';

class App extends Component {
  render() {
    return (
      <>
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
}

export default App;
