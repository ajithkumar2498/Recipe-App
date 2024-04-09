import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import AxiosService from "../utils/AxiosService.jsx"
import ApiRoutes from '../utils/ApiRoutes.jsx'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,  faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
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
		    toast.error(error.response.data.message || "server error")
	      }
	}
  return <>
		<div className="container">
		<div className="container-login">
		<form className="login100-form validate-form" onSubmit={handleLogin}>
					<span className="header">
					 Login
					</span>
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
					<div className="button">
						<button className="btn1">
							Login
						</button>
					</div>
					<div className="link">
						<Link to='/signup' className="txt2" >
							Create your Account
							<FontAwesomeIcon icon={faArrowRight}/>
						</Link>
					</div>
		</form>
	</div>
		</div>
  </>
}

export default LoginPage