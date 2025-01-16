import React from "react"

interface IEmailFormInput {
    setter: React.Dispatch<React.SetStateAction<string>>
    value: string
}

function EmailFormInput({ setter, value }: IEmailFormInput) {
    return <React.Fragment>
        <input
            type="text"
            onChange={(input: React.ChangeEvent<HTMLInputElement>) => setter(input.target.value)}
            value={value}
            className="form-control"
            placeholder=""
        />
    </React.Fragment>
}

export default EmailFormInput;