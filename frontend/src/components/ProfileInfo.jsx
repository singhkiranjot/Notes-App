import { useNavigate } from "react-router-dom"


export const ProfileInfo = ({name}) => {

    const navigate = useNavigate()

    const  onLogout = () => {
        navigate("/signin")
    }
    return (
        <>
            <div className="flex gap-3 items-center">
                <div className="flex items-center justify-center h-12 w-12 text-slate-950 rounded-full font-medium text-xl bg-slate-300">{name[0].toUpperCase()}</div>
                <div>
                    <p className="font-medium text-sm">{name.toUpperCase()}</p>
                    <button onClick={onLogout} className="underline text-sm text-slate-600">Logout</button>
                </div>
            </div>
        </>
    )
}