import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

import Image from './Image'

function ListImage() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const fetchImages = (count = 6) => {
    const apiRoot = `https://api.unsplash.com`
    const apiKey = `59d1c9f50a0284393d706c73425c524875694a08ba1bad3e148db8dc748ab1d7`

    Axios.get(
      `${apiRoot}/photos/random?client_id=${apiKey}&count=${count}`,
    ).then((res) => {
      setImages([...images, ...res.data])
      setLoading(true)
    })
  }

  useEffect(() => {
    fetchImages()
    //eslint-disable-next-line
  }, [])

  console.log(images)
  return (
    <InfiniteScroll
      dataLength={images.length}
      next={() => fetchImages(6)}
      hasMore={true}
      loader={<h3>Load Image..</h3>}
    >
      <div className="list-images" style={{ marginTop: '30px' }}>
        {loading
          ? images.map((image) => (
              <Image url={image.urls.regular} key={image.user.username} />
            ))
          : ''}
      </div>
    </InfiniteScroll>
  )
}
export default ListImage
