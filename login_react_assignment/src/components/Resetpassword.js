import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

const Frgtpwdnotification = (props) => (
  <div className="home">
    <p>Reset password link will be send to ur mail successfully!!!Link Expires within 15 mins</p>
   
  </div>);

Frgtpwdnotification.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string
}

export default Frgtpwdnotification 