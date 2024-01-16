import React from 'react'

const Jumbotron = (props) => {
  return (
    <>
      <div className="p-4 shadow-4 rounded-3">
        <h2>A warm welcome!</h2>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling extra
          attention to featured content or information.
        </p>

        <hr className="my-4" />

        <p>
          It uses utility classNamees for typography and spacing to space content out within the
          larger container.
        </p>
        <button type="button" className="btn btn-primary">
          Learn more
        </button>
      </div>
    </>
  )
}

export default Jumbotron