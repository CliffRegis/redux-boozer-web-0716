import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router'

const CocktailsIndex = function(props){

	return (
		<div>
 		 {props.cocktails.map(cocktail => <Link to={`/cocktails/${cocktail.id}`}> <li> {cocktail.name}</li> </Link>)}
 		 {props.children}
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