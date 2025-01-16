import {NavLink} from "react-router";

interface IForgotPasswordLink {
    redirectTo:string;
}

function ForgotPasswordLink({ redirectTo }:IForgotPasswordLink) {
    return <div className="my-4">
        <NavLink to={redirectTo}>I forgot my password</NavLink>
    </div>
}

export default ForgotPasswordLink;