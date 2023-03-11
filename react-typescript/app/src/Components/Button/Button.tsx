import React from 'react'
type ButtonProps={
    children:React.ReactNode
}
const Button = ({children}:ButtonProps) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  )
}

export default Button
