import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import * as fas from "@fortawesome/free-solid-svg-icons";
import Popup from "./../components/PopupAlert.jsx";

export default function LoginPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [emailVal, setEmailVal] = useState("");
  const [passVal, setPassVal] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [pesanPopup, setPesanPopup] = useState("");
  const emailEl = useRef(null);
  const passEl = useRef(null);
  const registerBtn = useRef(null);
  
  useEffect(() => {
    setIsValid(true)
    registerBtn.current.classList.remove("disabled");
    
    if (passVal.length < 1 || passVal == "" || passVal == null) {
      setIsValid(false);
      setPesanPopup("Password tidak boleh kosong");
      registerBtn.current.classList.add("disabled");
    } else {
      checkForm();
    }
  }, [emailVal, passVal])
  
  const checkForm = () => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    if (!emailVal.match(validRegex)){
      setIsValid(false);
      setPesanPopup("Format email tidak valid!");
      registerBtn.current.classList.add("disabled");
    }
  }
  
  return (
    <>
      <div id="login-page">
        <div className="login-form">
          <h1 className="text-center text-3xl font-bold text-second font-[YS] my-3">Welcome!</h1>
          
          <label htmlFor="email-input">Email</label>
          <input type="email" id="email-input" ref={emailEl} value={emailVal} onInput={() => {setEmailVal(emailEl.current.value)}} className="email-input" required/>
          
          <label htmlFor="pass-input" className="mt-3">Password</label>
          <div className="relative overflow-hidden rounded-md">
            <input type={isVisible ? "string" : "password" } id="pass-input" ref={passEl} value={passVal} onInput={() => {setPassVal(passEl.current.value)}} className="pass-input w-full block pr-4" required />
            <div className=" pointer-events-none bg-gradient-to-r from-[#00000000] from-70% to-bgColor absolute left-0 top-0 w-full h-full z-[1]"></div>
            <button className="z-[2] absolute block top-[50%] translate-y-[-50%] right-0 h-full px-3 active:scale-[.9] active:text-primary transition" onClick={() => setIsVisible(val => !val)}>
              { isVisible ? <Fa icon={fas.faEye} /> : <Fa icon={fas.faEyeSlash} /> }
            </button>
          </div>
          
          <button ref={registerBtn} onClick={() => navigate("/menu")} type="button" className="bg-second mt-3 py-3 rounded-md text-textColor active:scale-[.95] transition">Log in</button>
          <Link to={"/signin"} className="text-white text-[.85rem] mb-4 underline underline-offset-2 text-center">Belum memiliki akun</Link>
        </div>
        {
          !isValid ? <Popup pesan={pesanPopup} /> : <></>
        }
      </div>
    </>
  )
}