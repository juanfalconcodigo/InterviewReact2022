import React from 'react'
import { Navigate } from 'react-router-dom'

const userInfo={
    isAuthenticate:false,
    userName:'test'
}

export default function PrivateRoute({children}) {
  return userInfo.isAuthenticate?children:<Navigate replace to="/"/>
}
