import React from "react";
import {NavLink} from "react-router";

interface INavLinkProps {
    targetTo:string
    label:string
}

function NavigationLink({targetTo, label}: INavLinkProps) {
    return <React.Fragment>
        <NavLink to={targetTo} className="nav-link text-light">{label}</NavLink>
    </React.Fragment>;
}

export default NavigationLink;