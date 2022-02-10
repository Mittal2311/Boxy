import React from 'react'
import Link from "next/link";
export default function Header() {

    return (
           <>
           <div className="headers">
           <nav className="navbar">
            <Link href="/">
              <a>Work</a>
            </Link>
            <Link href="/About">
              <a>About</a>
            </Link>
            <Link href="/Contact">
              <a>Contact</a>
            </Link>
            </nav>
            <div>
            <a href="#" className="get">Get a Quote</a>
            </div>
           </div>
           
            </>
    )
}
