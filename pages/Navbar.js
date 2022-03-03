import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return <div className = 'navbar'>
        <img src = "https://lh3.googleusercontent.com/PgacuOOq5JLBwdFKtz5Mo4H9O5B6VFjDbrw-yYuXqqndQ55GVousoIjpIlFI9-GG-wycsI0Ojdx7S1dsh5If_y9mYXecyEWagyEuxV7H0ysvt5vzajHNdx_oSiCLaVUlUuVeciPM=w2400" alt = "box" width = "300"/>
        <div className = 'navlink'>
        <NavLink activeClassName =  'active' className = "link" to = "/about"> About</NavLink>
        <NavLink activeClassName =  'active' className = "link" to = "/events">Events</NavLink>
        <NavLink activeClassName =  'active' className = "link" to = "/community">Community</NavLink>
        <NavLink activeClassName =  'active' className = "link" to = "/whitepapers">White Papers</NavLink>
        <NavLink activeClassName =  'active' className = "link" to = "/involved">Get Involved</NavLink>
        </div>
        </div>
        
}

export default Navbar;