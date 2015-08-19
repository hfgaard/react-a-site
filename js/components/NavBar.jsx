var React = require('react');

var NavBar = React.createClass({
  render: function() {
    return (
      <nav>
        <p>News</p>
        <ul>
          <li>New</li>
          <li>Comments</li>
          <li>Show</li>
          <li>Ask</li>
          <li>Jobs</li>
          <li>Submit</li>
        </ul>
      </nav>
    );
  }
});

module.exports = NavBar;
