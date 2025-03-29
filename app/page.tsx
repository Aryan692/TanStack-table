import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='text-center flex justify-between items-center'>
    <Link href="/users">  <h1 className='text-4xl font-bold text-red-600'> GO TO THE USERS PAGE </h1></Link>
    </div>
  )
}

export default page
