import { useState } from "react"
import { BottomLink } from "../components/BottomLink"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { PasswordInput } from "../components/PasswordInput"
import { Navbar } from "../components/NavbarForSign"


export const Signin = () =>{
    return(
        <>
            <Navbar/>
            <div className="flex justify-center h-screen items-center bg-slate-200">
            <div className="w-96 border rounded shadow-2xl px-7 py-10 bg-white">
            <Heading lable={"Sign In"} />
            <InputBox  placeholder={"Email"} onChange={""} />
            <PasswordInput   onChange={""} /> 
            <Button onClick={""} lable={"Sign In"} />
            <BottomLink text={"Already registered ? "}  linkText={"Sign Up"} to={"/signup"} />
            </div>
            </div>
        </>
    )
}