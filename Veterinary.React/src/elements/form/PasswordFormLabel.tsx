import React from "react";

interface IPasswordFormLabel {
    label: string
}

function PasswordFormLabel({ label }: IPasswordFormLabel) {
    return <React.Fragment>
        <label>{label}</label>
    </React.Fragment>
}

export default PasswordFormLabel;