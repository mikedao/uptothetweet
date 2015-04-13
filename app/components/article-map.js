import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['article-map'],

  buildMap: function() {

     L.mapbox.accessToken = 'pk.eyJ1IjoiYm1yc255IiwiYSI6IjlvWUIxYmcifQ.8iPZd41vr5xtnuenlkWwtw';
    // Replace 'examples.map-i87786ca' with your map id.
    let mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v4/examples.map-i87786ca/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
      attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
    });

    this.set('map', L.map(this.elementID).addLayer(mapboxTiles));
    this.setMapCenter();
  }.on('didInsertElement'),

  .setView([42.3610, -71.0587], 15);

});
