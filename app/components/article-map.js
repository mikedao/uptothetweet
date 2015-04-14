import Ember from "ember";

export default Ember.Component.extend({

  classNames: ["article-map"],

  buildMap: function () {
    L.mapbox.accessToken = "pk.eyJ1IjoiYm1yc255IiwiYSI6IjlvWUIxYmcifQ.8iPZd41vr5xtnuenlkWwtw";
    // Replace "examples.map-i87786ca" with your map id.
    let mapboxTiles = L.tileLayer("https://{s}.tiles.mapbox.com/v4/examples.map-i87786ca/{z}/{x}/{y}.png?access_token=" + L.mapbox.accessToken, {
      attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
    });

    this.set("map", L.map(this.elementId).addLayer(mapboxTiles));
    this.setMapCenter();
    this.setMarkers();
  }.on("didInsertElement"),

  setMapCenter: function () {
    if (this.get("article.latitude") && this.get("article.longitude")) {
      this.get("map").setView([this.get("article.latitude"), this.get("article.longitude")], 10);
    } else {
      this.get("map").setView([0, 0], 1);
    }
  }.observes("article"),

  setMarkers: function() {
    var tweets = this.get("article.tweets");
    var map = this.get("map");
    var markerData = [];

    tweets.forEach(function(tweet) {
      if (tweet.get("latitude") && tweet.get("longitude")) {
        var formattedTweet = {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [
              tweet.get("longitude"),
              tweet.get("latitude")
            ]
          },
          properties: {
            title: tweet.get("username"),
            description: tweet.get("body"),
            "marker-size": "large",
            "marker-color": "#BE9A6B",
            "marker-symbol": "circle"
          }
        }

        markerData.push(formattedTweet);
      }
    });

    var markerLayer = L.mapbox.featureLayer({
      type: "FeatureCollection",
      features: markerData
    }).addTo(map);
  }.observes("article")

});
