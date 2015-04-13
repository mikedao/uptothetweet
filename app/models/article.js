import DS from 'ember-data';

let Article = DS.Model.extend({
  title: DS.attr('string'),
  abstract: DS.attr('string'),
  url: DS.attr('string'),
  descFacet: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  tweets: DS.hasMany('tweet')
});

export default Article;
