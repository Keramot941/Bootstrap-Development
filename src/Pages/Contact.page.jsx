import React from 'react'
import Breadcrumb from '../Component/Breadcrums';
import Contact from '../Component/Contact/Contact';

const ContactPage = () => {
    const pageDescription=`Odio et unde deleniti. Deserunt numquam exercitationem. 
    Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum 
    debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.`;

  return (
    <div>
      <Breadcrumb title="Contact" description={pageDescription} />
        <Contact/>
    </div>
  )
}

export default ContactPage;