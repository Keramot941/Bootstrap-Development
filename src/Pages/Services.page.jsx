import React from 'react'
import Breadcrumb from '../Component/Breadcrums'
import Services from '../Component/Services/Services'
import Testimonials from '../Component/Services/Testimonial'

const ServicesPage = () => {
        const pageDescription = `Odio et unde deleniti. Deserunt numquam exercitationem. 
          Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum 
          debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
        `
  return (
    <div>
      <Breadcrumb title="Services" description={pageDescription} />
      <Services/>
      <Testimonials/>
    </div>
  )
}

export default ServicesPage
