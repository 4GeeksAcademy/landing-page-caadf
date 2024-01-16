import React from 'react'

const Jumbotron = (props) => {
  return (
    <>
      <div className="p-4 shadow-4 rounded-3 bg-secondary bg-opacity-25">
        <h1>{props.title}</h1>
        <p>{props.parrafo}</p>
        <button type="button" className="btn btn-primary">
          {props.boton}
        </button>
      </div>
    </>
  )
}

export default Jumbotron