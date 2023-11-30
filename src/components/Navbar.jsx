import React from 'react'
import {useSelector} from 'react-redux';

export default function Navbar() {

  const { tasksList , error } = useSelector((state) => state.tasks)
  return (
      <>
      <h1 className="text-center my-4 text-primary">Project Management</h1>
      <p className="text-center lead">current  {tasksList.length} project's pending</p>
      {
        (error !== '')? <h2 className=' text-center text-danger'>error</h2> : null
      }
      </>
  )
}
