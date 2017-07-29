import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavMenu extends Component {
  render() {
    return(
      <div>
        <h1>NavMenu</h1>
        <NavLink to="/" style={styles.navLink} activeStyle={styles.activeLink} exact>Home</NavLink>
        <NavLink to="/activities" style={styles.navLink} activeStyle={styles.activeLink}>Activities</NavLink>
        <NavLink to="/drivers" style={styles.navLink} activeStyle={styles.activeLink}>Drivers</NavLink>
        <NavLink to="/profile" style={styles.navLink} activeStyle={styles.activeLink}>Profile</NavLink>
        <NavLink to="/vehicles" style={styles.navLink} activeStyle={styles.activeLink}>Vehicles</NavLink>
      </div>
    )
  }
}

export default NavMenu;

const styles = {
  navLink: {
    marginLeft: 10,
    marginRight: 10,
  },
  activeLink: {
    color: 'red'
  }
}