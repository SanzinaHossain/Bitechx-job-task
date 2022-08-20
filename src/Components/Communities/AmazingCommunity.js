import React from 'react'
import { communities } from '../../data'
import Community from './Community'
const AmazingCommunity = () => {
  return (
    <div className='mt-6 mx-64 text-white'>
    <p className='font-extrabold text-xl t'>Amazing communities to follow</p>
    {/* -------- communities------- */}
    {communities.map((community, index) => <Community community={community} key={index} />)}
</div>
  )
}

export default AmazingCommunity