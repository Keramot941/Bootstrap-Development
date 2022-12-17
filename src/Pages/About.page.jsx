
import React from "react"
import Breadcrumb from "../Component/Breadcrums"
import Faq from "../Component/About/Faq"
import Stats from "../Component/About/State"
import AboutUs from "../Component/About/AboutUs"
import Clients from "../Component/Client"


const About = () => {
  const pageDescription = `Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
  quo odio sint voluptas consequatur ut a odio voluptatem. Sit
  dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
  quaerat ipsum dolorem.`

  return (
    <>
      <Breadcrumb title="About" description={pageDescription} />
      <AboutUs/>
      <Faq />
      <Clients/>
      <Stats/>
      </>
  )
}

export default About
