import { Profile } from "components/Profile/Profile";
import { Statistics } from 'components/Statistics/Statistics';
import user from '../user.json';
import data from '../data.json';

export const App = () => {
  const { username, tag, location, avatar, stats, } = user;
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};

