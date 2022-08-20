import React from 'react'

const ShortStory2 = ({data}) => {
    const {coverImage,content,author,community,created,readTime}=data;
    const date = created.split("|")
  return (
    <div class="bg-white mx-64 h-auto rounded-sm  mt-3"> 
       <div class="p-4 pb-0">
        <h1 class="text-lg text-black font-bold">{content}</h1>
       </div>
       <div class="divider pt-0 mt-0 mb-0"></div>
       <div className='flex justify-between  items-center  pt-2 pb-3 pl-4 pr-4'>

        <div className="flex items-center gap-5">
        <img className='h-[50px]' src={author.profileImage} alt='author' />
        <p class="text-black font-bold t text-lg">{author.name}</p>
        </div>

          <p className="text-[#BCB8B1] ">{date[1]}, {date[0]}</p>

         <div className='flex items-center gap-3'>
             <img className="h-5" src='/image/link1.png' alt='icon' />
          <p class="text-black font-bold t text-lg">{community.name}</p>
    </div>
</div>
    </div>
  )
}

export default ShortStory2