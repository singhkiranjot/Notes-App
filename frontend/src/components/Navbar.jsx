import { useState } from "react"
import { ProfileInfo } from "./ProfileInfo"
import { SearchBar } from "./SearchBar"


export const Navbar = ({name})=>{
  const [serchQuery , setSerchQuery] = useState("")
    const handelSearch = () =>{

    }
    const onClearSearch = () => {

    }

    
    return(
        <>
          <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow ">
            <h2 className="text-2xl font-medium text-black py-2">Notes</h2>
            <SearchBar value={serchQuery}
            onChange={({target})=>{
              setSerchQuery(target.value)
            }}
            handelSearch={handelSearch}
            onClearSearch={onClearSearch}/>

           <ProfileInfo name={name} />
          </div>
        </>
    )
}