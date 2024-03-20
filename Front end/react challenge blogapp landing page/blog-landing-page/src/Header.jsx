import React from 'react'
import './App.css'

export default function Header() {
  return (
    <header className="header">
      <h1>Zack's Blog</h1>
      <nav>
        <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
      </nav>
    </header>
  )
}
