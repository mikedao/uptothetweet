import {
  moduleForModel,
  test
} from 'ember-qunit';

import Article from 'uptothetweet/models/article';
import Tweet from 'uptothetweet/models/tweet';

moduleForModel('article', {
  // Specify the other units that are required for this test.
  needs: ['model:tweet']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('it has a title and abstract', function(assert) {
  var article = this.subject({
    title: 'test title',
    abstract: 'test abstract'
  });

  assert.strictEqual(article.get('title'), 'test title');
  assert.strictEqual(article.get('abstract'), 'test abstract');
});
