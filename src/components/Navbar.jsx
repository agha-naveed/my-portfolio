import React from 'react'
import LogoComponent from '../extraComponents/Logo'
import { Link } from 'react-router'

export default function navbar() {
  return (
    <div>
      <LogoComponent />

      <nav>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/a"}>Skills</Link></li>
          <li><Link to={"/b"}>Projects</Link></li>
        </ul>
      </nav>
    </div>
  )
}
