import React from "react";
import {NavLink, Outlet} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <>
                <nav className = "nav">
                    <li>
                        <NavLink
                            activeclassname = "active"
                            className = "nav-link"
                            to = "/">Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeclassname = "active"
                            className = "nav-link"
                            to = "/battle">Battle
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            activeclassname = "active"
                            className = "nav-link"
                            to = "/popular">Popular
                        </NavLink>
                    </li>
                </nav>
                <Outlet/>
            </>
        )
    }
}

export default Nav;