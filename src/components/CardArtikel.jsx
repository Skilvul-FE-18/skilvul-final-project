import React from 'react'

function CardArtikel({img, kategori, date, tittle, excerpt}) {
  return (
    <div className="card cardList mb-3" style={{ width: "18rem" }}>
    <img src={img} className="card-img-top" alt="..." />
    <div className="card-body">
      <div className="card-category">
        <span className="badge bg-primary">{kategori}</span>
        <span className="mx-3">{date}</span>
      </div>
      <h5 className="card-title mt-3">
        {tittle}
      </h5>
      <p className="card-text">
        {excerpt}
      </p>
      <a href="#" className="btn btn-outline-primary">
        Baca lebih lanjut
      </a>
    </div>
  </div>
  )
}

export default CardArtikel