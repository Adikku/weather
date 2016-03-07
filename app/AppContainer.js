import { Component } from 'react';
import { connect } from 'react-redux';
import Actions from './Actions';
import App from './components/App';


function mapStateToProps (state) {
	console.warn('STATE',state)
	return {
		items: state.items,
		city: state.city
	}
}

function mapDispatchToProps (dispatch) {
	return {
		fetchItems: () => dispatch(Actions.fetchItems())
	};
}


export default connect (
	mapStateToProps,
	mapDispatchToProps
)(App);
