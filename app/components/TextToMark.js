var React = require('react');
var Marked = require('marked');
var TheMarker = require('./TheMarker');

//Marked is a tool that does the hard work of marking up text for you.

var TextToMark = React.createClass({
  render: function(){
    var newText = Marked('' + this.props.value + '');
    return (
      <TheMarker newText={newText}/>
    )
  }
});

module.exports = TextToMark;
