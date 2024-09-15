import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const DynamicPage = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        location.assign(`https://${id}.com`)
    },[])
  return (
    <div>
      <p className='text-center'>This is dynamic page</p>
      {id}
    </div>
  )
}

export default DynamicPage
