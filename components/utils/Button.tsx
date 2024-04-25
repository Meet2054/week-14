"use client";
interface ButtonProps {
    label: string
}

export default function signinbutton({ label }: ButtonProps) {
    return (
        <button onClick={()=>{
            console.log("Sign in clicked")
        }} type="button"  className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            {label}
        </button>
    )
}