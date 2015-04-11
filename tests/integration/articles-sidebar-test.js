import {
  module,
  test
} from 'qunit';

import Ember from 'ember';

import startApp from '../helpers/start-app';
var App;


module('articles sidebar', {
  beforeEach: function() {
    App = startApp;
  },
  afterEach: function() {
    Ember.run(App, 'destroy');
  }
});

test('it has an articles sidebar', function(assert) {
  visit('/').then(function() {
    assert.ok(find('div.articles').length);
  });
});


