import React from 'react'

const page = () => {
  return (
    <div>
      <div className='w-full h-[10%] border-b border-black rounded-md bg-slate-300  flex flex-row justify-between p-2 '>
        <div>
            <h1>Logo</h1>
        </div>
        <div>
            <ul className="flex flex-row justify-around gap-4 m-x-2">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>   
            </li>
            <li>
                <a href="#">Contact</a>
            </li> 
            </ul>
        </div>  
        <div>
            <button>Sign In</button>
        </div>  
      </div>
    </div>
  )
}

export default page
