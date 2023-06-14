

function ListArtikelAdmin({artikel, onDeleteArtikel, onUpdateArtikel}) {
  return (
    <>
           {
                artikel.map((item) => (

            <div className="card card-list-admin mb-3" key={item.id}>
            <div className="row g-0 align-items-center">
              <div className="col-md-2">
                <img src={item.image_source} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                    <div className="card-category d-flex mt-0">

                    <p className="">{item.categori}</p>
                    <p className="px-5">{item.createdAt}</p>
                    </div>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="card-button">
                    <button className="btn btn-outline-primary" onClick={()=> onUpdateArtikel(item.id)}>Edit</button>
                    <button className="btn btn-outline-danger" onClick={()=> onDeleteArtikel(item.id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
                ))
           }
      
  
    </>
  )
}

export default ListArtikelAdmin