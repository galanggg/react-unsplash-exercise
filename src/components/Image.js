import React from 'react'

const Image = ({url, key}) => {
  return (
  <div key={key}>
    <img src={url} alt="img" loading="auto" style={{width: "400px"}}/>
  </div>
  )
}

export default Image