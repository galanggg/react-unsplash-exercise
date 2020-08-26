import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const debounce = (fn, delay) => {
  let timer = null
  return function (...args) {
    const context = this
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}

const Debouncing = () => {
  const apiRoot = `https://api.unsplash.com/search`
  const apiKey = `59d1c9f50a0284393d706c73425c524875694a08ba1bad3e148db8dc748ab1d7`

  const [query, setQuery] = useState('')
  const [images, setImages] = useState([])

  const fetchImages = async () => {
    const response = await fetch(
      `${apiRoot}/photos?client_id=${apiKey}&query=${query}`,
    )
    const results = await response.json()
    setImages(results.results)
  }
  const onSearchChange = (event) => {
    const q = event.target.value
    setQuery(q)
    fetchImages()
  }
  useEffect(() => {
    debounce(fetchImages(), 2000)
    //eslint-disable-next-line
  }, [])

  console.log(images)
  return (
    <div className="main">
      <h1>DEBOUNCING EXPERIMENT</h1>
      <input
        type="text"
        value={query}
        onChange={onSearchChange}
        placeholder="Debouncing images.."
      />
      <ul></ul>
      {images.map((image) => {
        return (
          <li style={{ listStyle: 'none' }}>
            <img src={image.urls.small} alt="image-unsplash" />
          </li>
        )
      })}
    </div>
  )
}

export default Debouncing
