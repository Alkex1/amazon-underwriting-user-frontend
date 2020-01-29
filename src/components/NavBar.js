import React, { Component } from "react";
// import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
class NavBar extends Component {
    render() {
        return (
            <div className="nav-div" >
                <Link to="/">
                    <button>HomePage</button>
                </Link>
                <Link to="/childcare">
                    <button>Childcare</button>
                </Link>
                <Link to="/homebasedbusinesses">
                    <button>Home-based Businesses</button>
                </Link>
                <Link to="/personalaccident">
                    <button>Personal Accident</button>
                </Link>
            </div>
        )
    }
}

export default NavBar;