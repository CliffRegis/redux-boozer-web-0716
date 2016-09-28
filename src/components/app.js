import React from 'react';
import NavBar from './nav_bar';
import { Link } from 'react-router';

export default (props) => {
    return (
      <div>
        < NavBar  title="Boozr" url="/" />
        	<Link to={`/cocktails`}>Index </Link>
        <div className='container'>
          { props.children }
        </div>

      </div>
    )
};
