import DS from 'ember-data';

let Tweet =  DS.Model.extend({
  body: DS.attr('string'),
  username: DS.attr('string'),
  userProfileImage: DS.attr('string'),
  article_id: DS.belongsTo('article'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  tweetId: DS.attr('string')
});

export default Tweet;
