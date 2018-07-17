import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Search from './components/search';
import Listing from './components/listing';

export default class App extends Component {
	state = {
		query: ''
	};

	renderListingUI = () => {
		if (!this.state.query) {
			return <View />;
		}

		return <Listing />;
	};

	render() {
		const { canvasStyle } = style;

		return (
			<View style={canvasStyle}>
				<Search
					onQueryChange={query =>
						this.setState({
							query: query
						})
					}
					query={this.state.query}
				/>
				{this.renderListingUI()}
			</View>
		);
	}
}

const style = StyleSheet.create({
	canvasStyle: {
		backgroundColor: '#CCCCCC',
		flex: 1,
		justifyContent: 'center'
	}
});
