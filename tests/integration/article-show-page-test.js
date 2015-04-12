import {
  module,
  test
} from 'qunit';

import Ember from 'ember';

import startApp from '../helpers/start-app';
var App;

module('Integration: article', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test("shows a single article", function(assert){
  visit('/').then(function(){
    click('div.article:first').then(function(){
      assert.ok(find('div.article').length);
    });
  });
});


