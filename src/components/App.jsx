import dataUser from '../user.json';
import { Profile } from './Profile/Profile';
import { Section } from 'components/Sections/Sections';
import statisticData from '../data.json';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        gap: '40px',
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
      <Section title={'Task #2, statistics'}>
        <Statistics title="Upload stats" stats={statisticData} />
        <Statistics stats={statisticData} />
      </Section>
    </div>
  );
};
