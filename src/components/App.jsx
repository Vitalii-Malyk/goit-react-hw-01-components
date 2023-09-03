import user from '../dataFiles/user.json';
import { Profile } from './Profile/Profile';
import { Section } from 'components/Sections/Sections';
import statisticData from '../dataFiles/data.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/Friendlist';
import friends from '../dataFiles/friends.json';
import transactions from '../dataFiles/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

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
          name={user.username}
          tag={user.tag}
          location={user.location}
          src={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title={'Task #2, statistics'}>
        <Statistics title="Upload stats" stats={statisticData} />
        <Statistics stats={statisticData} />
      </Section>
      <Section title={'Task #3, friendlist'}>
        <FriendList friends={friends} />
      </Section>
      <Section title={'Task #4, transactionsTable '}>
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
};
