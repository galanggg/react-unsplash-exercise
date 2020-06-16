import React from 'react'

const Image = ({ url, key }) => {
  return (
    <div>
      <img
        key={key}
        src={url}
        alt="img"
        loading="auto"
        style={{ width: '400px' }}
        className="card-img-top img-fluid mx-auto"
      />
    </div>
  )
}

export default Image
