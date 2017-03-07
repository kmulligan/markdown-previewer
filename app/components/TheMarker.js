var React = require('react');
var ReactDOM = require('react-dom');

var TheMarker = React.createClass({
  render: function(){
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.newText}} />
      )
  }
});


module.exports = TheMarker;
