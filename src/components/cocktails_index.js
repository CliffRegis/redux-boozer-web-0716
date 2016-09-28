import React from 'react';
import {connect} from 'react-redux'

const CocktailsIndex = function(props){

	return (
		<div>
 		 {props.cocktails.map(cocktail => <li> {cocktail.name}</li>)}
 		</div>
 		
		)
}

function mapStateToProps(state){
  return{
 	cocktails: state.cocktails
  }
}

const componentCreator= connect(mapStateToProps)

export default componentCreator(CocktailsIndex);

//props.state.cocktail