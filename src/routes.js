import React from 'react';
import {Route} from 'react-router';
import App from './components/app'
import cocktailsIndex from './components/cocktails_index'

 export default (

 		<Route path='/' component={App}>
 			<Route path='/cocktails' component={cocktailsIndex}/>
 		</Route>

 	)


