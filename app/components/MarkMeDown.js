var React = require('react');
var ReactDOM = require('react-dom');

//Input box
//we need to do stuff when something is typed
//we need to be able to pass the text as a prop -- how ?

var MarkMeDown = React.createClass({
		/*
		propTypes: {
			text: React.PropTypes.string
		},
	*/
	getInitialState: function(){
		return {
			text: ''
		}
	},

	handleTextEntered: function(e){
		this.setState({text: e.target.value});
	},

	render: function(){
		console.log(this.state.text);
		return (
			<div>
				<div>
					Howdy!
				</div>
				<form>
					<input
						type="text"
						onChange={this.handleTextEntered} />
				</form>
			</div>
			)
	}

});

module.exports = MarkMeDown;
