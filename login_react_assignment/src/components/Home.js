import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

const Home = (props) => (
  <div className="home">
    <p>Welcome to the homepage!!!!shop and have fun!!! Discounts Guarentee</p>
   
  </div>);

Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string
}

export default Home