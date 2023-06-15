import { useDispatch, useSelector } from "react-redux";
import "../assets/css/editProfile.css";
import ikin from "../assets/img/gambar-ikin.png";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, updateUser } from "../redux/reducer/userReducer";

function EditProfil() {
  const userData = useSelector((state) => state.users.userData);
  const dispatch = useDispatch();
  const {id} = useParams()
 const [updatedUser, setUpdatedUser] = useState(userData)

const handleUpdateUser = () => {
dispatch(updateUser(id, updatedUser))
}
  
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
    <main>

      <Navbar />
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
                      <label >Username</label>
                      <input type="text" className="form-control mt-2" id="nama" />
                    </div>
                    <div className="form-group">
                      <label >Email</label>
                      <input type="text" className="form-control mt-2" id="nama" />
                    </div>
                    <div className="form-group">
                      <label >First Name</label>
                      <input type="text" className="form-control mt-2" id="nama" />
                    </div>
                    <div className="form-group">
                      <label >Last Name</label>
                      <input type="text" className="form-control mt-2" id="nama" />
                    </div>
                    <div className="form-group">
                      <label >Password</label>
                      <input type="text" className="form-control mt-2" id="nama" />
                    </div>
                  </div>
                  <div className="col-md-6">
                  <div className="form-group">
                      <label >Full Name</label>
                      <input type="text" className="form-control mt-2" id="nama" />
                    </div>
                    <div className="form-group">
                      <label >Address</label>
                      <input type="text" className="form-control mt-2" id="nama" />
                    </div>
                    <div className="form-group">
                      <label >Tanggal Lahir</label>
                      <input type="text" className="form-control mt-2" id="nama" />
                    </div>
                    <div className="form-group">
                      <label >Gender</label>
                      <input type="text" className="form-control mt-2" id="nama" />
                    </div>
                    <div className="form-group">
                      <label >Umur</label>
                      <input type="text" className="form-control mt-2" id="nama" />
                    </div>
  
                  </div>
                </div>
                <hr />
                <div className="row pb-4">
                  <div className="col-md-12">
                    <button className="btn btn-primary"
                    onClick={handleUpdateUser}
                    >Ubah Profile</button>
                    
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
    </main>
    </>
  );
}

export default EditProfil;
