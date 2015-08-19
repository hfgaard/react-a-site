var React = require('react');
var PostList = require('./PostList.jsx');

var PostListContainer = React.createClass({
  getInitialState: function() {
    return {
      posts: [
        {tagline: 'Google News', link: 'https://news.google.com/news'},
        {tagline: 'CNN', link: 'http://www.cnn.com/'},
        {tagline: 'The Huffington Post', link: 'http://www.huffingtonpost.com/'}
      ]
    }
  },
  render: function() {
    return (
      <PostList postList={this.state.posts} />
    );
  }
});

module.exports = PostListContainer;
