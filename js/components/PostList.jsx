var React = require('react');
var Post = require('./Post.jsx');

var PostList = React.createClass({
  render: function() {
    var posts = this.props.postList.map(function(post) {
      return <Post post={post} />
    });

    return (
      <section>
        <ol>
          {posts}
        </ol>
      </section>
    );
  }
});

module.exports = PostList;
