import login from "../assets/img/login.png";
import buddy from "../assets/img/buddy.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiEndPoint } from "../App";
import {useState,useEffect} from "react"

function Login() {
	const [data, setData] = useState({ email: "", password: ""});
	const [users, setUsers] = useState([]);
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		axios.get(apiEndPoint+"/users")
		.then((result) => {
			setUsers(result.data);
			// console.log(result.data)
		})
		.catch((err) => {
			// console.log(err);
		});
	}, []);

	const doLogin = () => {
		return () => { //agar tidak auto terpanggil saat melakukan render
			if(data.email === "" || data.password === ""){
				alert("Data tidak boleh kosong");
				setIsSubmitting(false);
				return;
			}
			if(isSubmitting) return;
			setIsSubmitting(true);
			const user = users.find((user) => user.email === data.email);
			if(!user){
				alert("Email tidak terdaftar");
				setIsSubmitting(false);
				return;
			}
			if(user.password !== data.password){
				alert("Password salah");
				setIsSubmitting(false);
				return;
			}
			alert('Login Berhasil : Halo '+user.name)
			//empty data
			setData({email: "", password: ""})
			setIsSubmitting(false);
		}
	}


	return (
		<div>
			<div className="container-md">
				<div className="min-vh-100 d-flex justify-content-center align-items-center w-100">
					<div
						className="shadow d-lg-flex justify-content-between gap-1 "
						style={{ width: "800px" }}>
						<div className="w-50 d-lg-flex d-none justify-content-center items-center py-5 px-5">
							<img src={login} alt="" className="ratio ratio-1x1 " />
						</div>
						<div
							className="flex-grow-1 px-md-5 px-3 py-5"
							style={{ backgroundColor: "#f6f9ff" }}>
							<div className="d-flex align-items-center justify-content-start gap-2 mb-4">
								<img src={buddy} alt="" style={{ height: "40px" }} />
								<span>Buddy</span>
							</div>
							<span className="fw-bold lh-1 fs-2">Masuk</span>
							<p className="mb-3">
								<span style={{ color: "#838383",fontSize:"14px" }}>Belum punya akun?</span>{" "}
								<Link to="/registrasi" className="text-decoration-none fw-bold" style={{fontSize:"14px"}}>
									Daftar, yuk!
								</Link>
							</p>
							<form>
								<div className="mb-2">
									<label htmlFor="email" className="form-label">
										Email
									</label>
									<input
										value={ data.email ?? ""}
										type="email"
										className="form-control"
										id="email"
										placeholder="Masukkan email"
										onChange={(e) => { setData({...data, email: e.target.value}) }}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="password" className="form-label">
										Kata Sandi
									</label>
									<input
										value={data.password ?? ""}
										type="password"
										className="form-control"
										id="password"
										placeholder="Masukkan kata sandi"
										onChange={(e) => { setData({...data, password: e.target.value}) }}
									/>
								</div>
								
								<button type="button" className="btn btn-primary block w-100" onClick={doLogin()}>
									{isSubmitting ? "Loading..." : "Masuk"}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
