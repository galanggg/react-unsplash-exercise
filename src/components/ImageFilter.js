import React from 'react'

const ImageFilter = ({ data }) => {
  return (
    <div className="image-grid">
      {data.map((image, key) => (
        <img src={image.urls.small} alt="img" />
      ))}
    </div>
  )
}

export default ImageFilter
