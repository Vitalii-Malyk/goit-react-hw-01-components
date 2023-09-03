import dataUser from '../user.json';
import { Profile } from './Profile/Profile';
import { Section } from 'components/Sections/Sections';
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
      <Section title={'Task #1, profile card'}>
        <Profile
          name={dataUser.username}
          tag={dataUser.tag}
          location={dataUser.location}
          src={dataUser.avatar}
          stats={dataUser.stats}
        />
      </Section>
      {/* <Statistics key={dataStatistics.id} title="Upload stats" stats={data} /> */}
    </div>
  );
};
