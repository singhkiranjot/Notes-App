import { Navbar } from "../components/Navbar"
import { NoteCard } from "../components/NoteCard"



export const Dashboard = () =>{
    return(
        <>
            <Navbar name={"kiranjot singh"} /> 

            <div className="w-11/12 container mx-auto">
                <div className="grid grid-cols-3 gap-4 mt-5">
                    <NoteCard
                    title="meeting on 7 am"
                    content="therer is meating ian clg on lksdffs"
                    onEdit={()=>{}}
                    OnDelete={()=>{}}
                    />
                    
                </div>
            </div>

        </>
    )
}

