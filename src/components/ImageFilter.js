import React from 'react'

const ImageFilter = ({ data }) => {
  return (
    <div className="image-grid">
      {data.map((image, key) => (
        <div className="image-item" key={key}>
          <img src={image.urls.regular} />
        </div>
      ))}
    </div>
  )
}

export default ImageFilter
