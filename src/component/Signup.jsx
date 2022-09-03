import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = ({setAuth}) => {

    let navigate = useNavigate()
    const registerUser = () =>{
        setAuth(true)
        navigate('/')
    }
  return (
    <div class="auth-page">
    <div class="container page">
        <div class="row">

            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">Sign up</h1>
                <p class="text-xs-center">
                    <a href="/login">Have an account?</a>
                </p>

                <ul class="error-messages">
                    <li>That email is already taken</li>
                </ul>

                <form>
                    <fieldset class="form-group">
                        <input class="form-control form-control-lg" type="text" placeholder="Your Name"/>
                    </fieldset>
                    <fieldset class="form-group">
                        <input class="form-control form-control-lg" type="text" placeholder="Email"/>
                    </fieldset>
                    <fieldset class="form-group">
                        <input class="form-control form-control-lg" type="password" placeholder="Password"/>
                    </fieldset>
                    <button class="btn btn-lg btn-primary pull-xs-right" onClick={registerUser}>
                        Sign up
                    </button>
                </form>
            </div>

        </div>
    </div>
</div>
  )
}

export default Signup