import { Link } from "react-router-dom";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import * as fas from "@fortawesome/free-solid-svg-icons";
import * as React from "react";

import Popup from "./../components/PopupAlert";

export default function RegisterPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isValid, setIsValid] = React.useState(false);
  const [nameVal, setNameVal] = React.useState("");
  const [emailVal, setEmailVal] = React.useState("");
  const [passVal, setPassVal] = React.useState("");
  const [passVal1, setPassVal1] = React.useState("");
  const [pesanPopup, setPesanPopup] = React.useState("");
  const nameEl = React.useRef(null);
  const emailEl = React.useRef(null);
  const passEl = React.useRef(null);
  const passEl1 = React.useRef(null);
  const popupEl = React.useRef(null);
  const registerBtn = React.useRef(null);
  
  React.useEffect(() => {
    setIsValid(true);
    registerBtn.current.classList.remove("disabled");
    
    if ( passVal == "" || passVal1 == "" ||
    passVal == null || passVal1 == null ||
    passVal.length < 1 || passVal1 < 1 ) {
      setIsValid(false);
      setPesanPopup("Password atau konfirmasi password kosong!");
      registerBtn.current.classList.add("disabled");
    } else if (passVal !== passVal1){
      setIsValid(false);
      setPesanPopup("Password dan konfirmasi password harus sama!");
      registerBtn.current.classList.add("disabled");
    } else {
      checkForm()
    }
  }, [emailVal, passVal, passVal1])
  
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
          
          <label htmlFor="name-input">Name</label>
          <input type="text" id="name-input" ref={nameEl} value={nameVal} onInput={() => {setNameVal(nameEl.current.value)}} className="name-input" required/>
          
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
          
          <label htmlFor="pass-input" className="mt-3">Password</label>
          <div className="relative overflow-hidden rounded-md">
            <input type={isVisible ? "string" : "password" } id="pass-input" ref={passEl1} value={passVal1} onInput={() => {setPassVal1(passEl1.current.value)}} className="pass-input w-full block pr-4" required />
            <div className=" pointer-events-none bg-gradient-to-r from-[#00000000] from-70% to-bgColor absolute left-0 top-0 w-full h-full z-[1]"></div>
            <button className="z-[2] absolute block top-[50%] translate-y-[-50%] right-0 h-full px-3 active:scale-[.9] active:text-primary transition" onClick={() => setIsVisible(val => !val)}>
              { isVisible ? <Fa icon={fas.faEye} /> : <Fa icon={fas.faEyeSlash} /> }
            </button>
          </div>
          
          <button ref={registerBtn} onClick={() => navigate("/menu")} type="button" className="bg-second mt-3 py-3 rounded-md text-textColor active:scale-[.95] transition">Sign in</button>
          <Link to={"/"} className="text-white text-[.85rem] mb-4 underline underline-offset-2 text-center">Sudah pernah memiliki akun</Link>
        </div>
        
        {
          !isValid ? <Popup pesan={pesanPopup} /> : <></>
        }
      </div>
    </>
  )
}