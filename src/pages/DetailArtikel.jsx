import "../assets/css/Artikel.css";
import imgCard from "../assets/img/imageCard.png";
import MainLayout from "./../layout/MainLayout";

function DetailArtikel() {
  return (
    <>
      <MainLayout>
        <section className="DetailArtikel">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <img
                  src={imgCard}
                  className="img-fluid"
                  alt="Responsive image"
                  style={{
                    width: "923px",
                  }}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="d-flex mb-3">
                  <div className="p-2">
                    <i className="fa-solid fa-user px-2"></i>
                    <span>Putri Tanjung</span>
                  </div>
                  <div className="p-2 px-5">
                    <span className="badge bg-primary">Bullying</span>
                  </div>
                  <div className="ms-auto p-2">
                    <i className="fa fa-bookmark px-3"></i>
                    <span> 7 Maret 2023 </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-9">

              <div className="judul">
                <p>Bullying di Lingkungan Sekolah</p>
              </div>
              <div className="desc mb-5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam ex repellendus, adipisci atque iusto veritatis deserunt nulla nobis vero quisquam fugiat enim quas laboriosam facilis nemo quo blanditiis neque?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis facilis odio neque veniam enim error fugit quibusdam. Quo eum hic explicabo aliquid modi, enim est architecto suscipit eaque numquam minus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis pariatur aperiam architecto culpa eum laudantium enim praesentium commodi labore quia quo repellat, quibusdam ut. Iure nemo facilis totam! Architecto, quam?
                </p>
              </div>
                </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export default DetailArtikel;
