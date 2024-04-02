import login from "../../public/images/recepies/image_12.jpg"
// import "../styles/loginpage.css"
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import AxiosService from "../utils/AxiosService.jsx"
import ApiRoutes from "../utils/ApiRoutes.jsx"
import { useNavigate } from 'react-router-dom'
function SignUp() {
	const navigate = useNavigate()

	useEffect(()=>{
       sessionStorage.clear()
	},[])
	const handleSignUp = async (e)=>{
		e.preventDefault()
		try {
		  let formData = new FormData(e.target)
		  let data = Object.fromEntries(formData)
		  let res = await AxiosService.post(ApiRoutes.SignUp.path, data)
			  if(res.status === 201){
				  
				  toast.success(res.data.message)
				  navigate('/login')
				 }
			} catch (error) 
			{
			  toast.error(error.response.data.message || error.message)
			}
	  }
  return <>
		<div className="container">
			<div className="container-login100">
				<div className="wrap-login100">
					<div className="login100-pic js-tilt" data-tilt>
						{/* <img src="{login} "alt="IMG"/> */}
					</div>

					<form className="login100-form validate-form" onSubmit={handleSignUp}>
						<span className="login100-form-title">
						Sign Up
						</span>

						<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
							<input className="input100" type="text" name="name" placeholder="Name"/>
							<span className="focus-input100"></span>
							<span className="symbol-input100">
								<i className="fa fa-envelope" aria-hidden="true"></i>
							</span>
						</div>

						<div className="wrap-input100 validate-input" data-validate = "Password is required">
							<input className="input100" type="text" name="email" placeholder="Email"/>
							<span className="focus-input100"></span>
							<span className="symbol-input100">
								<i className="fa fa-lock" aria-hidden="true"></i>
							</span>
						</div>
						<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
							<input className="input100" type="text" name="password" placeholder="Password"/>
							<span className="focus-input100"></span>
							<span className="symbol-input100">
								<i className="fa fa-envelope" aria-hidden="true"></i>
							</span>
						</div>

						<div className="wrap-input100 validate-input" data-validate = "Password is required">
							<input className="input100" type="password" name="password" placeholder="Confirm Password"/>
							<span className="focus-input100"></span>
							<span className="symbol-input100">
								<i className="fa fa-lock" aria-hidden="true"></i>
							</span>
						</div>
						
						<div className="container-login100-form-btn">
							<button className="login100-form-btn">
								sign up
							</button>
						</div>
						<div className="text-center p-t-136">
							<Link to='/login' className="txt2" >
								Login
								<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
     </>
}

export default SignUp