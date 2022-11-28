import React from 'react'
import "/Registercss.css"

function Register() {
  return (
  <div>
    <main>
    <div className="row">
         <div className="colm-logo">
              <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Logo"/>
            <h2>Facebook helps you connect and share with the people in your life.</h2>
         </div>
        <div className="colm-form">
            <div className="form-container">
                <input type="text" placeholder="Email address or phone number"/>
                <input type="password" placeholder="Password"/>
                <button className="btn-login">Login</button>
                <a href="#">Forgotten password?</a>
                <button className="btn-new">Create new Account</button>
             </div>
            <p><a href="#"><b>Create a Page</b></a> for a celebrity, brand or business.</p>
           </div>
     </div>
     </main>   
   <footer>
       <div className="footer-contents">
          <ol>
            <li>English (UK)</li>
            <li><a href="#">മലയാളം</a></li>
            <li><a href="#">தமிழ்</a></li>
            <li><a href="#">తెలుగు</a></li>
            <li><a href="#">বাংলা</a></li>
            <li><a href="#">اردو</a></li>
            <li><a href="#">हिन्दी</a></li>
            <li><a href="#">ಕನ್ನಡ</a></li>
            <li><a href="#">Español</a></li>
            <li><a href="#">Português (Brasil)</a></li>
            <li><a href="#">Français (France)</a></li>
            <li><button>+</button></li>
         </ol>
        <small>Facebook © 2022</small>
    </div>
  </footer>
</div>
) 
}


export default Register;