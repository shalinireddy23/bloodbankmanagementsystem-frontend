import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <>
            <div className='d-flex'>
                <h1 className=' p-4 mx-auto' style={{ color: "#6a5acd", textAlign: "justify" }}>404 - Not Found!.</h1><br />
            </div>
            <center>
                <Link to="/"><button className='btn btn btn-outline-warning'>Go to Home</button></Link>
            </center>
        </>

    )
}
