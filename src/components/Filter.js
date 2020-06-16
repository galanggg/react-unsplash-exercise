import React from 'react'
import { useState, useEffect } from 'react'
import ImageFilter from './ImageFilter'

function Filter() {
  const [values, setValues] = useState('')
  const [results, setResults] = useState([])
  const [show, setShow] = useState(false)

  const onChange = (e) => {
    setValues(e.target.value)
  }

  const handleSubmit = async (e) => {
    setShow(true)
    e.preventDefault()
    const apiRoot = `https://api.unsplash.com/search`
    const apiKey = `59d1c9f50a0284393d706c73425c524875694a08ba1bad3e148db8dc748ab1d7`

    const response = await fetch(
      `${apiRoot}/photos?client_id=${apiKey}&query=${values}`,
    )
    const data = await response.json()
    setResults(data.results)
  }

  console.log(results)
  return (
    <div className="row">
      <form className="mx-auto mt-4">
        <div className="form-row align-items-center mx-auto">
          <div className="col-auto">
            <label className="sr-only" htmlFor="inlineFormInput">
              Images
            </label>
            <input
              type="text"
              className="form-control mb-2"
              value={values}
              onChange={onChange}
              id="inlineFormInput"
              placeholder="Photography"
            />
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary mb-2"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
      </form>
      {show ? <ImageFilter data={results} /> : null}
    </div>
  )
}

export default Filter
