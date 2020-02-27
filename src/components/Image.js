import React from 'react'

const Image = ({url, key}) => {
  return (
  <div key={key}>
    <img src={url} alt="img" style={{width: "600px"}}/>
  </div>
  )
}

export default Image