import React from 'react'
import { users } from '../../data'
import Author from './Author'
const AmazingAuthor = () => {
  return (
    <div className=' text-white mt-6 mx-64'>
    <p className='font-extrabold text-xl t'>Amazing authors to follow</p>
    {/* -------- Authors------- */}
    {users.map((author, index) => <Author author={author} key={index} />)}
</div>
  )
}

export default AmazingAuthor