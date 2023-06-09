import "../assets/css/editProfile.css";
import ikin from "../assets/img/gambar-ikin.png";
import DashboardLayout from "./../layout/DashboardLayout";

function EditProfil() {
  return (
    <>
    <main>

      <DashboardLayout>
        <section>
          <div className="container">
            <div className="row mt-5">
              <div className="col-3">
                <div className="col-6">
                  <div className="card-edit-profile">
                    <div className="profile-container">
                      <div className="position-relative">
                        <img
                          className="profile-img mt-3"
                          src={ikin}
                          alt="Profile Picture"
                        />
                        <div className="edit-btn">
                          <i className="fas fa-pencil-alt">+</i>
                        </div>
                      </div>
                      <h5>Ikin Sugiharto</h5>

                      <p>Mahasiswa</p>
                      <hr />
                      <button className="btn btn-outline-primary">Edit</button>
                      <br />
                      <button className="btn btn-primary">Logout</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="box-form">
                <div className="row">
                  <div className="col-md-12 mt-3">
                    <h3>Edit Profile</h3>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label >Nama Lengkap</label>
                      <input type="text" className="form-control mt-2" id="nama" />
                    </div>
                    <div className="form-group">
                      <label >Nama Lengkap</label>
                      <input type="text" className="form-control mt-2" id="nama" />
                    </div>
                    <div className="form-group">
                      <label >Nama Lengkap</label>
                      <input type="text" className="form-control mt-2" id="nama" />
                    </div>
                    <div className="form-group">
                      <label >Nama Lengkap</label>
                      <input type="text" className="form-control mt-2" id="nama" />
                    </div>
                  </div>
                  <div className="col-md-6">
                  <div className="form-group">
                      <label >Nama Lengkap</label>
                      <input type="text" className="form-control mt-2" id="nama" />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row pb-4">
                  <div className="col-md-12">
                    <button className="btn btn-primary">Ubah Profile</button>
                    
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DashboardLayout>
    </main>
    </>
  );
}

export default EditProfil;
