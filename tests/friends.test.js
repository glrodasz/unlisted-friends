import test from 'ava';
import friends from '../src/lib/friends';
import connectToTwitter from '../src/lib/utils/connect-to-twitter';
import keys from './keys';

const Twitter = connectToTwitter(
  keys.CONSUMER_KEY || undefined,
  keys.CONSUMER_SECRET || undefined
);

test(`Given an username
      When I ask for his/her friend list
      Then I should have his/her friend list.`, t => {
  const username = 'Garethderioth';

  return friends(Twitter, username).then(friendList => {
    t.truthy(friendList.length);
  });
});

test(`Given an username that doesn\'t follow anyone
      When I ask for his/her friend list
      Then I should throw an error.`, t => {
  const username = 'Pictoline';

  t.throws(friends(Twitter, username));
});

test(`Given an undefined username
      When I ask for his/her friend list
      Then I should throw an error.`, t => {
  t.throws(friends(Twitter));
});
