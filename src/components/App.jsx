import { Profile } from "components/Profile/Profile";
import user from '../user.json';

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
    </div>
  );
};

