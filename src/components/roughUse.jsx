import React from 'react'

const roughUse = () => {
  return <>
   <div className="container-login100">
				<form className="login100-form validate-form" onSubmit={handleLogin}>
					<span className="login100-form-title">
					 Login
					</span>
					<div className="wrap-input100 validate-input" >
						<input className="input100" type="text" name="email" placeholder="Email"/>
						<span className="symbol-input100">
							<FontAwesomeIcon icon={faEnvelope}/>
						</span>
					</div>
					<div className="wrap-input100 validate-input" data-validate = "Password is required">
						<input className="input100" type="password" name="password" placeholder="Password"/>
						<span className="symbol-input100">
							<FontAwesomeIcon icon={faLock}/>
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
  </>
}

export default roughUse