import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ImageExperiment from './ImageExperiment'
import useIO from '../lib/useIO'
import fallbackImage from '../assets/Infinity-1s-205px.svg'

const Experiment = () => {
  const apiRoot = `https://api.unsplash.com`
  const apiKey = `59d1c9f50a0284393d706c73425c524875694a08ba1bad3e148db8dc748ab1d7`
  const count = 15

  const [data, setData] = useState([])

  const [observer, setElements, entries] = useIO({
    thresold: 0.25,
    root: null,
  })

  useEffect(() => {
    axios
      .get(`${apiRoot}/photos/random?client_id=${apiKey}&count=${count}`)
      .then((res) => {
        setData([...res.data])
      })
      .catch((err) => {
        console.error(err)
      })
  }, [apiKey, apiRoot])

  useEffect(() => {
    if (data.length) {
      let img = Array.from(document.getElementsByClassName('lazy'))
      setElements(img)
    }
  }, [data, setElements])

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let lazyImage = entry.target
        lazyImage.src = lazyImage.dataset.src
        lazyImage.classList.remove('lazy')
        observer.unobserve(lazyImage)
      }
    })
  }, [entries, observer])

  const images = data.map((item) => {
    return (
      <ImageExperiment
        key={item.id}
        src={item.urls.regular}
        fallbackSrc={fallbackImage}
        isLazy
        style={{
          display: 'block',
          height: '250px',
          width: '250px',
          margin: 'auto',
          marginBottom: '15px',
        }}
        alt="thumbnail"
      />
    )
  })
  console.log(data)

  return (
    <div className="image">
      <h1>Experiment lazy load</h1>
      {images}
    </div>
  )
}

export default Experiment
