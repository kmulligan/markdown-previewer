var React = require('react');
var ReactDOM = require('react-dom');
var Marked = require('marked');
var TextToMark = require('./components/TextToMark');
var TheMarker = require('./components/TheMarker');

//Presentation Component
//Sets up page with main header, two columns, an input textarea and an output box component

var MainBox = React.createClass({
  getInitialState: function(){
    return {
      text: 'Text you want **Marked Up** goes here.',
    }
  },
  handleTextEntered: function(e){
		this.setState({
      text: e.target.value
    })
	},

  render: function(){
    console.log("Text: " + this.state.text);
  	return (
  		<div className="col-sm-12 text-center">
  			<h1>Markdown Previewer</h1>
        <h4>Created by Kevin Mulligan with JavaScript, JSX, and React.</h4>
  			<div className="col-sm-6">
  				<h2>Text to Markdown:</h2>
  					<textarea cols="50" rows="25" value={this.state.text} onChange={this.handleTextEntered}/>
  			</div>
  			<div className="col-sm-6" id="TextDoneMarked">
  				<h2>Markdowned Text:</h2>
            <TextToMark value={this.state.text}/>
  			</div>

  		</div>
  		);
	}
});

MainBox.propTypes = {
  text: React.PropTypes.string
};

ReactDOM.render(
	<MainBox />,
	document.getElementById('app')
);
