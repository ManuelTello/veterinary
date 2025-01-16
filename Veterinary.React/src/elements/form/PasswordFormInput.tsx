import React from "react";

interface IPasswordFormInput {
    setter: React.Dispatch<React.SetStateAction<string>>
    value: string
}

function PasswordFormInput({ setter, value }: IPasswordFormInput) {
    return <React.Fragment>
        <input
            type="password"
            onChange={(input: React.ChangeEvent<HTMLInputElement>) => setter(input.target.value)}
            value={value}
            className="form-control"
            placeholder=""
        />
    </React.Fragment>
}

export default PasswordFormInput;