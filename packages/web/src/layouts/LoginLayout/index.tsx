import React from 'react'
import { Outlet } from "react-router-dom"
import styles from './index.scss'

function LoginLayout() {
  return (
    <div className={styles.container}>
      <Outlet/>
    </div>
  )
}

export default LoginLayout
