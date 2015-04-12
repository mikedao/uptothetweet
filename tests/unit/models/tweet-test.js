import {
  moduleForModel,
  test
} from 'ember-qunit';

import Tweet from 'uptothetweet/models/tweet';
import Article from 'uptothetweet/models/article';

moduleForModel('tweet', {
  // Specify the other units that are required for this test.
  needs: ['model:article']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('tweet has meta data properties', function(assert){
  var body = Tweet.metaForProperty('body');
  assert.ok(body.isAttribute);
  assert.strictEqual(body.type, 'string');
  var username = Tweet.metaForProperty('username');
  assert.ok(username.isAttribute);
  assert.strictEqual(username.type, 'string');
  var userProfileImage = Tweet.metaForProperty('userProfileImage');
  assert.ok(userProfileImage.isAttribute);
  assert.strictEqual(userProfileImage.type, 'string');
});

test("it has attributes", function(assert){
  var tweet = this.subject({
    body: 'Put a Bird on it!',
    username: 'birdman',
    userProfileImage: 'http://google.com',
    latitude: 30,
    longitude: 60,
    tweetId: '12345'
  });

  assert.strictEqual(tweet.get('body'), 'Put a Bird on it!');
  assert.strictEqual(tweet.get('username'), 'birdman');
  assert.strictEqual(tweet.get('userProfileImage'), 'http://google.com');
  assert.strictEqual(tweet.get('latitude'), 30);
  assert.strictEqual(tweet.get('longitude'), 60);
  assert.strictEqual(tweet.get('tweetId'), '12345');
});
