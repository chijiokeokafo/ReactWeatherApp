var React = require('react');

var ErrorModal = React.createClass({
	componentDidMount: function () {
		var error = $('#error-modal');
		var modal = new Foundation.Reveal(error);
		modal.open();
		// alert('Zest test');
	},
	render: function () {
		return(
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>Some Title</h4>
				<p>Our error message</p>
				<p>
					<button className="button hollow" data-close="">okay</button>
				</p>
			</div>	
		);
	}
});

module.exports = ErrorModal;