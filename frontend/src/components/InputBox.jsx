export const InputBox = ({ placeholder , onChange}) => {
    return(
        <>
            <input placeholder={placeholder} onChange={onChange} className="text-sm bg-transparent border-[1.5px] px-5 py-3 w-full rounded mb-4 outline-none" />
        </>
    )
}