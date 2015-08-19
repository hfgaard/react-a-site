var React = require('react');

var Post = React.createClass({
  render: function() {
    return (
      <li>
        <p>{this.props.post.tagline}</p>
        <p>{this.props.post.link}</p>
      </li>
    )
  }
});

module.exports = Post;
