import { Link } from "react-router-dom"

export const BottomLink = ({text , to , linkText}) => {
    return(
        <>
        <div className="flex text-sm justify-center mt-3 text-gray-500">
            <div>{text}</div>
            <Link to={to} className="font-medium pl-2  text-primary underline">{linkText}</Link>
        </div>
        </>
    )
}