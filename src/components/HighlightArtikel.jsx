import "../assets/css/Artikel.css";
import imgHiglight from "../assets/img/img-highlight.png";

function HighlightArtikel({imgHg, categori, date, title, excerpt, onClick}) {

   

  return (
    <section className="HighlightArtikel">
      <div className="container">
        <div className="row justify-content-center">
          <div className="card card-highlight mb-3 mt-3">
            <div className="row">
              <div className="col-md-6">
                <img src={imgHg} className="img-fluid" alt="..." />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <div className="card-category d-flex mt-4">
                 <h5>
                    <span className="badge bg-primary">{ categori }</span>
                 </h5>
                    <span className="px-5">{date}</span>
                  </div>
                  <p className="card-title mt-4">{title}</p>
                  <p className="card-text mt-4">
                    {excerpt}
                  </p>
                  <p className="card-button mt-4">
                  <a href="#" className="btn btn-outline-primary" onClick={onClick}>
                      Baca lebih lanjut
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <hr />
      </div>
    </section>
  );
}

export default HighlightArtikel;
