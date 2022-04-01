import React from 'react'

import "./homeSection.css"
export default function HomeSection() {
  return (
      <div
      className={'home--section_container'}
    >
      <div
        className={'home--section_image'}
       style={{
              backgroundImage: `url("/Assets/Images/Shadow.png")`,
          }}
      >
          <img src="/Assets/Images/Drone.png" alt="" />
      </div>
      <div
      className={'home--section_secondary'}
      >
        <h1>F-210</h1>
      <h3>“The Fastest Drone on the Planet”</h3>
      <p>“The– The Wirecutter</p>
      </div>
    </div>
  )
}
