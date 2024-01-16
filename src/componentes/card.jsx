import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <p className="card-text">{props.parrafocards}</p>
          <a href="#" className="btn btn-primary">{props.botontexto}</a>
        </div>
      </div>
    </>
  )
}

export default Card