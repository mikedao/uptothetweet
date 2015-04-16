import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  namespace: "api/v1",
  host: "http://192.241.226.124"
});
