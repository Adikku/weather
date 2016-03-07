import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducers/Reducer';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';
import Actions from './Actions';
import InitialState from './initialState';

require('./less/main.less');

let store = applyMiddleware(thunk)(createStore)(Reducer, InitialState);

const rootElement = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	rootElement
);

store.dispatch(Actions.fetchItems());