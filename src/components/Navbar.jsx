import React from 'react'

export default function Navbar() {
    const currentUser = "Jerome"

  const initial = currentUser?.split(" ")?.map((n) => n[0])?.join("");
  console.log("hello");

  return (
    <div className='shadow py-4 w-full flex items-center justify-between px-4'>
    <div className=""></div>
    <div className="initial bg-brand-color w-6 h-6 items-center text-center rounded-full text-white font-bold">
      {initial}
    </div>
  </div>
  )
}
