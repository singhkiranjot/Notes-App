import { useState } from "react"
import { BottomLink } from "../components/BottomLink"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { PasswordInput } from "../components/PasswordInput"
import { Navbar } from "../components/NavbarForSign"



export const Signup = () =>{

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState(null)

    return(
        <>
            <Navbar />
            <div className="flex justify-center h-screen items-center bg-slate-200">
            <div className="w-96 border rounded px-7 shadow-2xl py-10 bg-white">
            <Heading lable={"Sign Up"} />
            <InputBox placeholder={"Name"} onChange={""} />
            <InputBox  placeholder={"Email"} onChange={""} />
            <PasswordInput   onChange={""} /> 
            <Button onClick={""} lable={"Sign Up"} />
            <BottomLink text={"Already registered ? "}  linkText={"Sign In"} to={"/signin"} />
            </div>
            </div>
        </>
    )
}