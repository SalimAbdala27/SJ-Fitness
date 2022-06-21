import React from 'react'

const Test = (props) => {
  const {user, setUser} = props
  console.log(user)
  return (
    <div>{user?.email}</div>
  )
}

export default Test