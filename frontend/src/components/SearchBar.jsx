import { FaMagnifyingGlass } from "react-icons/fa6"
import { IoMdClose } from "react-icons/io"

export const SearchBar = ({value , onChange , handelSearch , onClearSearch}) => {

    return (
        <>
            <div className="bg-slate-200 w-80 flex items-center px-4 rounded-md">
                <input 
                type="text"
                placeholder="Search Notes"  
                className="bg-transparent text-lg py-[8px] w-full outline-none "
                value={value}
                onChange={onChange}
                />
                
                    <IoMdClose className="text-slate-500 text-xl cursor-pointer mr-3 hover:text-black" onClick={onClearSearch} />
                
                <FaMagnifyingGlass className="text-slate-500 hover:text-black cursor-pointer" onClick={handelSearch}/>
            </div>
        </>
    )
}