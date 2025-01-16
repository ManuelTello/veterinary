import React from "react";

interface IErrorInputProps {
    message: string
}

function InputError({ message }: IErrorInputProps) {
    return <React.Fragment>
        <span className="text-danger form-text fw-light w-100">{message}</span>
    </React.Fragment>
}

export default InputError;