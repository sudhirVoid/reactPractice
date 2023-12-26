import React from "react"
import { useParams } from "react-router-dom"

function User() {
    const {userid} = useParams()
  return (
    <div className="text-green-700 bg-gray-900 py-4 flex justify-center text-2xl" >User: {userid}</div>
  )
}

export default User