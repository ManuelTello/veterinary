import React from "react"

interface IEmailFormLabel {
    label: string
}

function EmailFormLabel({ label }: IEmailFormLabel) {
    return <React.Fragment>
        <label>{label}</label>
    </React.Fragment>
}

export default EmailFormLabel;