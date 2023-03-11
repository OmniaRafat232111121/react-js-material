import React from 'react'
type  Props={
    title:string;
}
const Post = ({title}:Props) => {

  return (
    <div>
      <h1>Thisids first title {title}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nobis vel velit alias rerum nostrum officiis perspiciatis odit
         corporis,

        consequuntur explicabo assumenda minima quis commodi exercitationem quam harum omnis! Est.</p>
    </div>
  )
}

export default Post
