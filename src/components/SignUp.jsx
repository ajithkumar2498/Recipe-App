import login from "../../public/images/recepies/image_12.jpg"
// import "../styles/loginpage.css"
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import AxiosService from "../utils/AxiosService.jsx"
import ApiRoutes from "../utils/ApiRoutes.jsx"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons"
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
			<div className="container-login">
				<div className="wrap-login100">
					<form className="login100-form validate-form" onSubmit={handleSignUp}>
						<span className="header">
						Sign Up
						</span>
						<div className="name" >
							<span className="symbol-input100">
								<FontAwesomeIcon icon={faUser}/>
							</span>
							<input className="input100" type="text" name="name" placeholder="Name"/>
						</div>

						<div className="email" >
						    <span className="symbol-input100">
								<FontAwesomeIcon icon={faEnvelope}/>
							</span>
							<input className="input100" type="text" name="email" placeholder="Email"/>
						</div>
						<div className="password" >
							<span className="symbol-input100">
								<FontAwesomeIcon icon={faLock}/>
							</span>
							<input className="input100" type="password" name="password" placeholder="Password"/>
						</div>

						<div className="password" >
							<span className="symbol-input100">
								<FontAwesomeIcon icon={faLock}/>
							</span>
							<input className="input100" type="password" name="confirm password" placeholder="Confirm Password"/>
						</div>
						
						<div className="container-login100-form-btn">
							<button className="btn1">
								sign up
							</button>
						</div>
						<div className="link">
							<Link to='/login' className="txt2" >
								Login
								<FontAwesomeIcon icon={faArrowRight}/>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
     </>
}

export default SignUp