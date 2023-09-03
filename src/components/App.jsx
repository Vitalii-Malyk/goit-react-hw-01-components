import dataUser from '../user.json';
import { Profile } from './Profile/Profile';
// import dataStatistics from '../data.json';
// import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        name={dataUser.username}
        tag={dataUser.tag}
        location={dataUser.location}
        src={dataUser.avatar}
        stats={dataUser.stats}
      />
      {/* <Statistics
        key={dataStatistics.id}
        title={dataStatistics.title}
        label={dataStatistics.label}
        percentage={dataStatistics.percentage}
      /> */}
    </div>
  );
};
