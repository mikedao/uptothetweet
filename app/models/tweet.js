import DS from 'ember-data';

let Tweet =  DS.Model.extend({
  body: DS.attr('string')
});

export default Tweet;
