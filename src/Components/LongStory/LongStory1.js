import React from 'react'
import "./LongStory.css"
const LongStory1 = ({data}) => {
    const {coverImage,author,title,hashtags,created,readTime,community}=data;
    const day = created.split("|")
    const alltags = hashtags.join(" ").substring(0, 32)
  return (
    <div class="bg-white mx-64 h-auto rounded-sm  mt-10"> 
    <div class="grid grid-cols-3">
        <div class="col-span-2 pt-2 pb-2">
            <h1 class="text-black text-xl t pl-4 pr-2 pt-2">{title}</h1>
            <div class="grid grid-cols-2 justify-between pt-4 pl-4">
                <div class="">
                   <img class="h-10 w-10 inline" src={author.profileImage}></img>
                   <h1 class="t inline text-lg pl-2">{author.name}</h1>
                </div>
                <div class="pl-16">
                <img class="h-5 inline" src="image/link1.png"></img>
                   <h1 class="t inline text-lg pl-2">{community.name}</h1>

                </div>
            </div>
            <div class="divider pt-0 mt-0 mb-0"></div>
            <div>
                <h1 class=" pl-4 pt-2 disabled text-gray-400 inline">{day[0]}| {readTime}</h1>
                <h1 class=" pt-2 inline ml-4 ">{alltags}....</h1>
            </div>
        </div>
        <div class="pt-2 pr-2 pb-2">
           <img src={coverImage}></img>
        </div>
    </div>
    </div>
  )
}

export default LongStory1
