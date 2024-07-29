import { MdCreate , MdDelete} from "react-icons/md"


export const NoteCard = ({title , content , onEdit ,OnDelete }) => {
    return (
        <>
            <div className="border rounded p-4 bg-white shadow-md hover:shadow-xl transition-all ease-in-out ">
                <div className="flex items-center justify-center">
                    <h6 className="text-lg font-medium">{title}</h6>
                </div>
                {/* <div className=" w-full h-1 rounded-full bg-slate-300 mt-1"></div> */}
                    
                <p className="text-base text-slate-600 mt-4">{content?.slice(0,60)}</p>

                <div className="flex items-center justify-end gap-4">
                    <MdCreate 
                    className="text-xl text-slate-300 cursor-pointer hover:text-green-600"
                    onClick={onEdit} />
                    <MdDelete 
                    className="text-xl text-slate-300 cursor-pointer hover:text-green-600"
                    onClick={OnDelete} />
                </div>
            </div>
        </>
    )
}