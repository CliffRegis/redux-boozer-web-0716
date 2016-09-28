import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import rootReducer from './reducers';
import {fetchCocktails} from './actions'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store= createStore(rootReducer)
debugger
store.dispatch(fetchCocktails());

ReactDOM.render(
	<Provider store={store}>
	  <Router routes={routes} history={browserHistory}/>
	</Provider>, document.getElementById('container')
	)