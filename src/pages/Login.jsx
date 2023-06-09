import "../assets/css/Login.css";
import buddy from "../assets/img/buddy.png";
import login from "../assets/img/login.png";

function Login() {
  return (
    <section className="container-fluid login">
      {/* <div className="row">
        <div className="col-md-6 kiri">
          <img src={login} alt="" />
        </div>
        <div className="col-md-6 kanan">
          <div className="buddy">
            <img src={buddy} alt="" />
            <span>Buddy</span>
          </div>

          <div className="judul">
            <h1>Masuk</h1>
            <p>
              Belum punya akun? <a href="register.html">Daftar, yuk!</a>
            </p>
          </div>

          <div className="form">
            <form id="loginForm">
              <label className="email" for="email">
                Email
              </label>
              <input
                className="form-control"
                type="text"
                id="email"
                name="email"
                placeholder="Masukkan email"
              />
              <div className="box-password">
                <label className="password" for="password">
                  Kata Sandi
                </label>
                <input
                  className="form-control input-password"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Masukkan kata sandi"
                />
                <span id="showHide">
                  <i className="fa fa-eye"></i>
                </span>
              </div>
              <button type="submit" className="btn btn-primary" id="btnLogin">
                Masuk
              </button>
            </form>
          </div>
        </div>
      </div> */}
      <div className="row">
        <div className="col-md-6 kiri">
          <div className="row align-items-center">
            <img src={login} alt="" />
          </div>
        </div>
        <div className="col-md-6 kanan">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="buddy">
                <img src={buddy} alt="" />
                <span>Buddy</span>
              </div>

              <div className="judul">
                <h1>Masuk</h1>
                <p>
                  Belum punya akun? <a href="register.html">Daftar, yuk!</a>
                </p>
              </div>
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <div className="row">
                    <div className="col">
                      <label className="form-check-label" for="exampleCheck1">
                        Ingat Saya
                      </label>
                    </div>
                    <div className="col lupa-password">
                      <a href="">Lupa Password?</a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <button type="submit" className="btn btn-primary">
                    Masuk
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
