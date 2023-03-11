//import React from 'react'
//string,number,boolean,null,void
//usertype defined=>object,array,enum,any
// type UserProps={
//     name:string;
//     age:number;
//     email:string;
//     isRegester:boolean;
// }
// const User = ({name,email,isRegester,age}:UserProps) => {
//   return (
//     <div style={{border:'1px solid ',margin:'1rem'}}>
//      <h2>{name}</h2>
//      <h2>{email}</h2>
//      <p>{age} years Old</p>
//      <p>{isRegester ? 
//      ` is regester</p>`:
//      `  is not regester`}</p>
//     </div>
//   )
// }

// export default User

// import React from 'react'
// type UserProps={
//     user:{
//         name:string;
//         email:string;
//         age:number;
//         isRegistered:boolean;
//     }
// }
// const User = ({user}:UserProps) => {
//   return (
//     <div style={{ border: "1px solid", margin: "1rem" }}>
//     <h2>{user.name}</h2>
//     <p>{user.email}</p>
//     <p>{user.age} years old</p>
//     {user.isRegistered ? (
//       <p>Registered Student</p>
//     ) : (
//       <p>Unregistered Student</p>
//     )}
//   </div>
//   )
// }

// export default 



//array

// import React from 'react'
// //type=>any ,array,object,enum,union
// type UserProps={
//     lang:string[]

// }
// const User = ({lang}:UserProps) => {
//   return (
//     <div style={{ border: "1px solid", margin: "1rem" }}>
//     <p>
//       Speaks:{" "}
//       {lang.map((language, index) => {
//         return <span key={index}>{language} </span>;
//       })}
//     </p>
//   </div>
//   )
// }

// export default User


//complex example


// import React from 'react'
// type UserProps={
//     user:{
//         name:string;
//         email:string;
//         age:number;
//         lang:string[];
//         isRegester:boolean;

//     }
// }
// const User = ({user}:UserProps) => {
//   return (
//     <div style={{ border: "1px solid", margin: "1rem" }}>
//       <h2>{user.name}</h2>
//       <h2>{user.email}</h2>
//       <h2>{user.age} Years Old</h2>
//       {user.isRegester ?(
//            <p>Refgester Student</p>
//       ):
//       (
//         <p>is not Regester Student</p>

//       )}
//     </div>
//   )
// }

// export default User





