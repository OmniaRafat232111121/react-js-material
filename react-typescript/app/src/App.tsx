
// import './App.css';
// import User from './Components/User/User';
// const Users=[
//   {
//     id:1,
//   name: "anisul islam",
//   email: "anisul2010s@yahoo.co.uk",
//   age: 32,
//   isRegistered: true
//   },
//   {
//       id:2,
//       name: "Rabeya Begum",
//       email: "rabu2010s@yahoo.co.uk",
//       age: 31,
//       isRegistered: false,
//     }

// ]



// function App() {
//   return (
//     // <div className="App">
//     // <h1>User Management App</h1>
//     // {Users.map((user) => (
//     //   <User key={user.id} user={user} />
//     // ))}
//   // </div>
//   );
// }

// // export default App;


// // import React from 'react'
// // import User from './Components/User/User'

// // const App = () => {
// //   return (
// //     <div>
// //       <h1>User Mangement APP</h1>
// //       <User lang={['ar','fr','EN']}/>
      
// //     </div>
// //   )
// // }

// // export default App



// // import React from 'react'
// // import User from './Components/User/User';
// // const users = [
// //   {
// //     id: 1,
// //     name: "anisul islam",
// //     email: "anisul2010s@yahoo.co.uk",
// //     age: 32,
// //     isRegistered: true,
// //     languages: ["Bangla", "English"],
// //   },
// //   {
// //     id: 2,
// //     name: "Rabeya Begum",
// //     email: "rabu2010s@yahoo.co.uk",
// //     age: 31,
// //     isRegistered: false,
// //     languages: ["Bangla", "English", "Finnish"],
// //   },
// // ];
// // const App = () => {
// //   return (
// //     <div>
      
// //       <h2>User Management App</h2>
// //       {users.map((user)=>(
// //         <User key={user.id} user={user}/>
// //       ))}
// //     </div>
// //   )
// // }

// // export default App
// import React from 'react'
// import Message from './Components/Message/Message'
// import Button from './Components/Button/Button'
// import Post from './Components/Post'
// import NewUser from './Components/NewUser'
// const App = () => {
//   return (
//     <div>
//       <h1>user Mangement APp</h1>
//       <Message text="update"/>
//       <Button>Click Here</Button>
//     <Post title="Project"/>
//     <NewUser/>
//     </div>
//   )
// }

// export default App



import React, { useState } from 'react';
 import './App.css';

const App :React.FC =() => {
  interface UserProps{
    
    name:string;
    age:number|string;
    job:string;
    
  }
  interface AllUsers{
   user:UserProps;
   AllUsers:Array<UserProps>;
  }
  const [user,setUser]=useState<AllUsers>({
    user:{
      name:'',
      age:"",
      job:''
    },
    AllUsers:[]
    
  })
  console.log(user)
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>):void=>{
    e.preventDefault();
    setUser({
      user:{
        name:'',
        age:"",
        job:'',

      },
      AllUsers:[
        ...user.AllUsers,
        user.user
      ]
    })
    
  }
//on Update of user adding Information
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>):void=>{
 const FieldName=e.target.name;
 setUser({
  ...user,
  user:{
  ...user.user,
  [FieldName]:e.target.value
 }})
// console.log(e.target.value)
  }
  //Delete User
  const deletHandler=(index:number)=>{
    const filterUser=user.AllUsers.filter((user,i)=>{
      return index !==i
    })
    setUser({
      ...user,
      AllUsers:filterUser
    })

  }
  //mappimg List Of Users 
const  allUsers=user.AllUsers.map((user,index)=>(
  <div key={index} className="User">
    <p>{user.name}</p>
    <p>{user.age}</p>
    <p>{user.job}</p>
    <button onClick={()=>deletHandler(index)} className='btn'>Delete User</button>
  </div>
))
  return (
    <div className='container'>
      <h2>TODOLIst</h2>
   <form onSubmit={handleSubmit} className='card'>
   <label htmlFor='userName'>Name</label>
      <input
      id="userName"
      type="text"
      name='name'
      value={user.user.name}
      onChange={handleChange}
      />
       <label htmlFor='userAge'>Age</label>
      <input
      id="userAge"
      type="Number"
      name='age'
      value={user.user.age}
      onChange={handleChange}
      />
       <label htmlFor='userJob'>Job</label>
      <input
      id="userJob"
      type="text"
      name='job'
      value={user.user.job}
      onChange={handleChange}
      />
      <button className='btn' type='submit'>Submit</button>
   </form>
   {allUsers}
      
    </div>
  )
}

export default App
