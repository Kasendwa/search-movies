import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class Listing extends Component {
	render = () => {
		const { containerStyle } = style;

		return <View style={containerStyle} />;
	};
}

const style = StyleSheet.create({
	containerStyle: {
		borderWidth: 1,
		borderColor: '#000000',
		flex: 1
	}
});
