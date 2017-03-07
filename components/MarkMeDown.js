var React = require('react');
var ReactDOM = require('react-dom');

//Input box
//we need a input form
//we need to set initial state to ''
//we need to do stuff when something is typed
//we need to be able to pass the text as a prop -- how ?

/*
var MarkMeDown = React.createClass({
	propTypes: {
		text: React.PropTypes.string
	},

	getInitialState: function(){
		this.state = {text: ''};
	},

	handleTextEntered: function(e){
		//when text is entered, updated inputText
		//no idea if this is right, found on https://facebook.github.io/react/docs/forms.html
		this.setState({text: e.target.value});
	},

	render: function(){
		return (
			<form>
				<input type="text" text={this.state.text} onChange={this.handleTextEntered} />
			</form>
    )
	}

});
*/

var MarkMeDown = React.createClass({
  render: function(){
    return (
      <div>No really, hi!</div>
    )
  }
});

module.exports = MarkMeDown;
