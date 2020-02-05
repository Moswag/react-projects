import React, { Component } from 'react'
import AuthService from '../../service/AuthService';

class Login extends Component {
	constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            message: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        localStorage.clear();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const credentials = {username: this.state.username, password: this.state.password};
        AuthService.login(credentials).then(res => {
            if(res.data.status === 200){
                localStorage.setItem("userInfo", JSON.stringify(res.data.result));
                this.props.history.push('/view_users');
            }else {
				this.setState({
					message: res.data.message,
					password: ''
				});
				alert(this.state.message);
            }
        });
    };

    onChange = (e) =>{
		this.setState({ [e.target.name]: e.target.value });
	}
        

	render() {
		return (
			<div>
				{/* Page content */}

				<div className="page-content">
					{/* Main content */}
					<div className="content-wrapper">
						{/* Content area */}
						<div className="content d-flex justify-content-center align-items-center">
							{/* Login form */}
							<form className="login-form" onSubmit={this.handleSubmit}>
								<div className="card mb-0">
									<div className="card-body">
										<div className="text-center mb-3">
											<img src="assets/images/zb.jpeg" style={{ height: 120, weight: 80 }} alt="Web" />
											<h5 className="mb-0">Login to your account</h5>
											<span className="d-block text-muted">Enter your credentials below</span>
										</div>
										<div className="form-group form-group-feedback form-group-feedback-left">
											<input type="text" className="form-control" placeholder="Username" name="username" 
											 value={this.state.username} onChange={this.onChange} required />
											<div className="form-control-feedback">
												<i className="icon-user text-muted" />
											</div>
										</div>
										<div className="form-group form-group-feedback form-group-feedback-left">
											<input type="password" className="form-control" placeholder="Password" name="password" 
											 value={this.state.password} onChange={this.onChange} required/>
											<div className="form-control-feedback">
												<i className="icon-lock2 text-muted" />
											</div>
										</div>
										<div className="form-group">
											<button type="submit" className="btn btn-success btn-block">Sign in <i className="icon-circle-right2 ml-2" /></button>
										</div>
										<div className="text-center">
											<a href="login_password_recover.html">Forgot password?</a>
										</div>
									</div>
								</div>
							</form>
							{/* /login form */}
						</div>
						{/* /content area */}
						{/* Footer */}

						{/* /footer */}
					</div>
					{/* /main content */}
				</div>
			</div>

		)
	}
}

export default Login;
