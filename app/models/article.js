import DS from 'ember-data';

let Article = DS.Model.extend({
  title: DS.attr('string'),
  abstract: DS.attr('string'),
  url: DS.attr('string'),
  descFacet: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number')
});

//Article.reopenClass({
//  FIXTURES: [
//    {
//      id: 1,
//      title: "I am the first title",
//      abstract: "This is the description of the first",
//      url: "http://turing.io",
//      latitude: 35,
//      longitude: 88
//    },
//
//    {
//      id: 2,
//      title: "I am the second title",
//      abstract: "This is the description of the second",
//      url: "http://turing.io",
//      latitude: 55,
//      longitude: 48
//    }
//  ]
//});
//
export default Article;
