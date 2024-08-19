import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/image1.jpg";

const Loginregister = () => {
  const [action, setAction] = useState("");

  const navigate = useNavigate();

  const [newuser, setnewuser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [olduser, setolduser] = useState({
    name: "",
    password: "",
  });

  const HandleLogin = async () => {
    if (!olduser.name) {
      alert("Username is required");
      return;
    }

    try {
      const response = await axios.get("http://localhost:7000/users");
      const users = response.data;

      const userExists = users.some((user) => user.password === olduser.password);

      if (userExists) {
        alert("Login Success");
        navigate("/");
      } else {
        alert("User Not found");
        registerLink();
      }
    } catch (error) {
      alert("User not found");
    }
  };

  const HandleName = (e) => {
    setnewuser({
      ...newuser,
      name: e.target.value,
    });
  };

  const HandleEmail = (e) => {
    setnewuser({
      ...newuser,
      email: e.target.value,
    });
  };

  const HandlePassword = (e) => {
    setnewuser({
      ...newuser,
      password: e.target.value,
    });
  };

  const registerLink = () => {
    setAction(" active");
  };

  const LoginLink = () => {
    setAction("");
  };

  const HandleOldName = (e) => {
    setolduser({
      ...olduser,
      name: e.target.value,
    });
  };

  const HandleOldPassword = (e) => {
    setolduser({
      ...olduser,
      password: e.target.value,
    });
  };

  const HandleRegister = async () => {
    const user = await axios.post("http://localhost:7000/user", newuser);
    console.log(user);

    LoginLink();
  };

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      backgroundImage: `url(${image1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    formWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      transition: 'all 0.2s',
      width: '420px',
      backgroundColor: 'transparent',
      border: '2px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '10px',
      color: '#fff',
      height: action ? '520px' : '450px',
    },
    form: {
      width: '100%',
      padding: '2.5rem',
      transition: 'transform 0.15s',
      transform: action ? 'translateX(-400px)' : 'translateX(0)',
    },
    registrationForm: {
      position: 'absolute',
      width: '100%',
      padding: '2.5rem',
      transition: 'transform 0.15s',
      transform: action ? 'translateX(0)' : 'translateX(400px)',
    },
    inputContainer: {
      position: 'relative',
      width: '100%',
      marginTop: '2rem',
      marginBottom: '2rem',
    },
    input: {
      width: '100%',
      height: '3rem',
      padding: '0.5rem 1.25rem',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: 'transparent',
      border: '2px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '2rem',
      outline: 'none',
    },
    icon: {
      position: 'absolute',
      fontSize: '1.25rem',
      top: '50%',
      right: '1.25rem',
      transform: 'translateY(-50%)',
    },
    button: {
      width: '100%',
      height: '2.75rem',
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#333',
      backgroundColor: '#fff',
      borderRadius: '2rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
    },
    linkHover: {
      textDecoration: 'underline',
    },
    rememberForgot: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.875rem',
      marginTop: '1rem',
      marginBottom: '1.5rem',
    },
    checkbox: {
      accentColor: '#fff',
      marginRight: '0.5rem',
    },
  };

  return (
    <div id="register" style={styles.container}>
      <div style={styles.formWrapper}>
        {/* Login Form */}
        <div style={styles.form}>
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 style={{ textAlign: 'center', fontSize: '1.875rem' }}>Login</h1>
            <div style={styles.inputContainer}>
              <input
                onChange={HandleOldName}
                type="text"
                placeholder="Username"
                required
                style={styles.input}
              />
              <FaUser style={styles.icon} />
            </div>
            <div style={styles.inputContainer}>
              <input
                onChange={HandleOldPassword}
                type="password"
                placeholder="Password"
                required
                style={styles.input}
              />
              <FaLock style={styles.icon} />
            </div>
            <div style={styles.rememberForgot}>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" style={styles.checkbox} />
                Remember me
              </label>
              <a href="#" style={styles.link}>
                Forgot password?
              </a>
            </div>
            <button
              onClick={HandleLogin}
              type="submit"
              style={styles.button}
            >
              Login
            </button>
            <div style={{ marginTop: '1.5rem', fontSize: '0.875rem', textAlign: 'center' }}>
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={registerLink} style={styles.link}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Registration Form */}
        <div style={styles.registrationForm}>
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 style={{ textAlign: 'center', fontSize: '1.875rem' }}>Registration</h1>
            <div style={styles.inputContainer}>
              <input
                onChange={HandleName}
                type="text"
                placeholder="Username"
                required
                style={styles.input}
              />
              <FaUser style={styles.icon} />
            </div>
            <div style={styles.inputContainer}>
              <input
                onChange={HandleEmail}
                type="email"
                placeholder="Email"
                required
                style={styles.input}
              />
              <FaEnvelope style={styles.icon} />
            </div>
            <div style={styles.inputContainer}>
              <input
                onChange={HandlePassword}
                type="password"
                placeholder="Password"
                required
                style={styles.input}
              />
              <FaLock style={styles.icon} />
            </div>
            <div style={styles.rememberForgot}>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" style={styles.checkbox} />
                I agree to terms & conditions
              </label>
            </div>
            <button
              onClick={HandleRegister}
              style={styles.button}
            >
              Register
            </button>
            <div style={{ marginTop: '1.5rem', fontSize: '0.875rem', textAlign: 'center' }}>
              <p>
                Already have an account?{" "}
                <a href="#" onClick={LoginLink} style={styles.link}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginregister;
