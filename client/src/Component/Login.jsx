
import profile from "./image/p.jpg";
import email from "./image/email.jpg";
import pass from "./image/pass.png";
import style from "./Login.module.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
    const [number,setNumber] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const handleClickLogin=()=>{
        if(number && password){
            navigate('/farmerpage')
        }
        else{
            navigate('/error')
        }
    }
  return (
    <>
      <div className={style.loginmain}>
        <div className={style.submain}>
          <div>
            <div className={style.imgs}>
              <div className={style.containerimage}>
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
            <div>
                <h1>Login Page</h1>
              <div className={style.inptlogn}>
                <div>
                  <img src={email} alt="email" className={style.email} />
                  <input
                  onChange={(e)=>setNumber(e.target.value)}
                    type="number"
                    placeholder="Phone Number"
                    className={style.name}
                  />
                </div>
                <div className={style.secondinput}>
                  <img src={pass} alt="pass" className={style.email} />
                  <input
                  onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className={style.name}
                  />
                </div>
                <div className={style.loginbutton}>
                  <button onClick={handleClickLogin}>Login</button>
                </div>
              </div>

              <p className={style.link}>
                <a href="#">Forgot password ?</a> <br></br>Or<br></br>
                <a href="#">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
        <div className={style.submain1}>
          <div>
            <div className={style.imgs}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
