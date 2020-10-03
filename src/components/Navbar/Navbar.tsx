import React, { FunctionComponent } from "react"

import Image from "../image"

type NavProps = {
  title: string
}

const Navbar: FunctionComponent<NavProps> = ({ title, img }) => {
  return (
    <nav className="test">
      <ul>
        <li>{title}</li>
        <li>
          <Image />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
