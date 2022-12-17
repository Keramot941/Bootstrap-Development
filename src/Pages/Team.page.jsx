import React from 'react'
import Breadcrumb from '../Component/Breadcrums'
import Team from '../Component/Team'

const TeamPage = () => {
  const pageDescription=`Odio et unde deleniti. Deserunt numquam exercitationem. 
                        Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum 
                        debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
                         `
  return (
    <div>
      <Breadcrumb title={"Team"} description="pageDescription"/>
      <Team/>
    </div>
  )
}

export default TeamPage
