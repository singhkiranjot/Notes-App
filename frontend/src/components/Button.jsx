export const Button = ({lable , onClick }) => {
    return(
        <>
            <button className="w-full bg-primary text-sm text-white p-2 rounded my-1 hover:bg-blue-600" onClick={onClick} >{lable}</button>
        </>
    )
}