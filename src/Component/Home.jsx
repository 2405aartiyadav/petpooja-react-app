import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Link to="/login">
        <button>
        Login
        </button>
        </Link>
      <Link to="/order">
        <button>
            Order
        </button>
        </Link>
        <Link to="/bill">
        <button>
            Bill
        </button>
        </Link>
    </div>
  )
}

export default Home