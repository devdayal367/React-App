import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    
    const navigate = useNavigate()
    const clearStorage = () =>{
        localStorage.clear();
        navigate("/");
    }
  return (
    <div>
      <h1>Dashboard component</h1>
      <Button onClick={clearStorage}>Clear storage</Button>
    </div>
  )
}
