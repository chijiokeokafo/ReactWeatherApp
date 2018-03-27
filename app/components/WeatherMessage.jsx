var React = require('react');

var WeatherMessage = ({temp, location}) => {
	return (
		<div>
			<h4>It's {temp}°C in {location} right now</h4>
		</div>
	)
};

module.exports = WeatherMessage;