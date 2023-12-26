import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom';
export default function Github() {
    // const [data, setData] = useState([]);
    const data = useLoaderData()
    // we use loader instead of this.
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/sudhirVoid')
    //     .then(response=>response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className=" text-green-700 bg-gray-900 py-4 text-center text-2xl" >
        Github followers: {data.followers}

        <img src={data.avatar_url} alt='Git picture' width={300} />
    </div>
  )
}

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/sudhirVoid')
    return response.json();
}