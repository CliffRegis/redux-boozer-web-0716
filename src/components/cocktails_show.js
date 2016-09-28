import React from 'react';
import {Link} from 'react-router'
import {connect} from 'react-redux'

 
const CocktailsShow = function(props){
	return (
		<div>
		 {props.cocktail.name}
		</div>
		)
}

function mapStateToProps(state, ownProps){
    const cocktail = state.cocktails.find((cocktail) => {return cocktail.id == ownProps.params.id})
	 	return {cocktail: cocktail}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CocktailsShow);