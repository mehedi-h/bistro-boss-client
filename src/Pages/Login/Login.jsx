import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginImg from "../../assets/others/14620625_5484597.jpg"

const Login = () => {

    const captchaRef = useRef(null)
    const [ disabled, setDisabled ] = useState(true)

    useEffect( () => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidCaptcha = () => {
        const userCaptchaValue = captchaRef.current.value;
        console.log(userCaptchaValue);
        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({email, password});
    
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center md:w-1/2 md:text-left">
                    <img src={loginImg} alt="" />
                    {/* <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                        a id nisi.
                    </p> */}

                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">

{/* ------------------------ Email input section ------------------------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    
{/* ------------------------ Password input section ------------------------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input 
                            name="password"
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

{/* ------------------------ Captcha input section ------------------------- */}
                    <div className="form-control">
                        <label className="label">
                            <LoadCanvasTemplate />
                        </label>
                        <input 
                            name="captcha"
                            ref={captchaRef}
                            type="text"
                            placeholder="Input the text captcha above"
                            className="input input-bordered"
                            required
                        />
                        <button onClick={handleValidCaptcha} className='btn btn-xs btn-outline md:mt-2 md:mx-28'>validate</button>
                    </div>

{/* ------------------------ submit button section ------------------------- */}
                    <div className="form-control mt-6">
                        <input disabled={disabled} className="btn btn-xs btn-outline" type="submit" value="Login"/>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
