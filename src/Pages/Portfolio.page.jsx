import React from 'react'
import Portfolio from '../Component/Portfolio'

const PortfolioPage = () => {
    const pageDescription=`Odio et unde deleniti. Deserunt numquam exercitationem. 
    Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum 
    debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.`
  return (
    <div>
        <Breadcrumb title={"Portfolio"} description="pageDescription"/>
        <Portfolio/>
    </div>
  )
}

export default PortfolioPage