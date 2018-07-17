import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class Search extends Component {
	render = () => {
		const { onQueryChange, query } = this.props;
		const { outsideBoxStyle, insideBoxStyle, inputStyle, searchIconStyle } = style;

		return (
			<View style={[outsideBoxStyle, query ? { backgroundColor: '#000000' } : {}]}>
				<View style={insideBoxStyle}>
					<TextInput style={inputStyle} value={query} onChangeText={value => onQueryChange(value)} />
					<TouchableOpacity onPress={() => onQueryChange('')}>
						<Icon name={query ? 'x' : 'search'} style={searchIconStyle} />
					</TouchableOpacity>
				</View>
			</View>
		);
	};
}

const style = StyleSheet.create({
	outsideBoxStyle: {
		backgroundColor: '#CCCCCC',
		width: '100%',
		padding: 17
	},
	insideBoxStyle: {
		backgroundColor: '#FFFFFF',
		borderWidth: 2,
		borderColor: '#000000',
		height: 100,
		width: '100%',
		padding: 17,
		flexDirection: 'row',
		alignItems: 'center'
	},
	inputStyle: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#000000'
	},
	searchIconStyle: {
		fontSize: 30,
		color: '#000000'
	}
});
