import { useEffect } from 'react'
// import "../styles/loginpage.css"
import { Link } from 'react-router-dom'
import login from "../../public/images/recepies/image_11.jpg"
import toast from 'react-hot-toast'
import AxiosService from "../utils/AxiosService.jsx"
import ApiRoutes from '../utils/ApiRoutes.jsx'
import { useNavigate } from 'react-router-dom'
function LoginPage() {
    const navigate = useNavigate()

	useEffect(()=>{
       sessionStorage.clear()
	},[])
	const handleLogin = async (e)=>{
      e.preventDefault()
	  try {
		let formData = new FormData(e.target)
		let data = Object.fromEntries(formData)
		let res = await AxiosService.post(ApiRoutes.LOGIN.path, data)
			if(res.status === 200){
				sessionStorage.setItem('token', res.data.token)
				sessionStorage.setItem('role', res.data.role)
				sessionStorage.setItem('name', res.data.name)
				sessionStorage.setItem('id', res.data.id)
				toast.success(res.data.message)
				if(res.data.role === "admin"){
                    navigate('/dashboard')
				}else{
					navigate(`/profile/${res.data.id}`)
				}
			}
	      } catch (error) 
		  {
		    toast.error(error.response.data.message || error.message)
	      }
	}
  return <>
    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
					<img src={login} alt="IMG"/>
				</div>

				<form className="login100-form validate-form" onSubmit={handleLogin}>
					<span className="login100-form-title">
					 Login
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" name="email" placeholder="Email"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100" type="password" name="password" placeholder="Password"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Login
						</button>
					</div>

					<div className="text-center p-t-136">
						<Link to='/signup' className="txt2" >
							Create your Account
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</Link>
					</div>
				</form>
			</div>
		</div>
	</div>
	
  </>
}

export default LoginPage