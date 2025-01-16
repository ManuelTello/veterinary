import React from "react";
import EmailFormInput from "../elements/form/EmailFormInput";
import EmailFormLabel from "../elements/form/EmailFormLabel";
import PasswordFormInput from "../elements/form/PasswordFormInput";
import PasswordFormLabel from "../elements/form/PasswordFormLabel";
import ForgotPasswordLink from "../elements/form/ForgotPasswordLink";
import SendFormInputLarge from "../elements/form/SendFormInputLarge";
import InputError from "../elements/form/InputError";
import axios from "axios";

interface IErrorsList{
    emailError:string | null;
    passwordError:string | null;
}

function SignUp() {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [errors, setErrors] = React.useState<IErrorsList>({emailError:null,passwordError:null});
    const errorsList = { emailErrors: null, passwordErrors: null }

    async function OnSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        const body = {"email":email,"password":password};
        const response = await axios.post("http://localhost:5242/identity/register",body);
        console.log(response.data);
    }

    return <React.Fragment>
        <div className="d-flex justify-content-center mt-5">
            <form method="post" onSubmit={OnSubmit} className="w-50">
                <div className="mb-3">
                    <div className="form-floating">
                        <EmailFormInput value={email} setter={setEmail} />
                        <EmailFormLabel label="E-mail" />
                    </div>
                    {errorsList.emailErrors && <InputError message={errorsList.emailErrors} />}
                </div>
                <div className="mb-3">
                    <div className="form-floating">
                        <PasswordFormInput setter={setPassword} value={password} />
                        <PasswordFormLabel label="Password" />
                    </div>
                    {errorsList.passwordErrors && <InputError message={errorsList.passwordErrors} />}
                </div>
                <ForgotPasswordLink redirectTo="/account/recover-password" />
                <SendFormInputLarge buttonValue="Send" />
            </form>
        </div>
    </React.Fragment>
}


export default SignUp;