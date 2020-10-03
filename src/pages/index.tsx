import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Navbar from "../components/Navbar/Navbar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar title={"Delish Foods"} />
  </Layout>
)

export default IndexPage
