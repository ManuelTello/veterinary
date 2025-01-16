import React from "react";

export function ValidateEmailInput(
    htmlValue:string,
    valueSetter:React.Dispatch<React.SetStateAction<string>>,
    errorSetter:React.Dispatch<React.SetStateAction<{emailError:null,passwordError:null}>>):void{

    if(htmlValue == ""){
        errorSetter({emailError:"Field required"});
    }

}