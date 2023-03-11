import React,{useState} from 'react'

const NewUser = () => {
    type NewuserProps={
        name:string;
        email:string;
    }
    const [user,setUser]=useState<NewuserProps>({name:'',email:''})

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      setUser({
        name:'',
        email:''

      })
    }
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const fieldName=e.target.name;
        setUser({...user,[fieldName]:e.target.value})

    }
  return (
   <div>
    <h2>Createe User</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name
        <input
        id="name"
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        required
        />
        </label>
        <label htmlFor='email'>Email
        <input
        id='email'
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        required
        />
        </label>
<button type='submit'>Create User</button>

    </form>
   </div>
  )
}

export default NewUser
