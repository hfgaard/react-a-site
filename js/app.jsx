var React = require('react');
var NavBar = require('./components/NavBar.jsx');
var PostListContainer = require('./components/PostListContainer.jsx');

var App = React.createClass({
  render: function() {
    return (
      <main>
        <NavBar />
        <PostListContainer />
      </main>
    );
  }
});

React.render(<App appName='News' />, document.body);
