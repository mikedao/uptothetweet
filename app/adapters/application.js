import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: "api/v1",
  host: "http://localhost:3000"
});


  //host: "http://192.241.226.124"
