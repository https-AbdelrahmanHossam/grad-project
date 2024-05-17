import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import { useNavigate } from "react-router";
const Signup = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setTimeout(function () {
      setMsg("");
    }, 15000);
  }, [msg]);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "user":
        setError("");
        setUser(e.target.value);
        if (e.target.value === "") {
          setError("Username has left blank!");
        }
        break;
      case "email":
        setError("");
        setEmail(e.target.value);
        if (e.target.value === "") {
          setError("Email has left blank!");
        }
        break;
      case "pass1":
        setError("");
        setPass1(e.target.value);
        if (e.target.value === "") {
          setError("Password has left blank!");
        }
        break;
      case "pass2":
        setError("");
        setPass2(e.target.value);
        if (e.target.value === "") {
          setError("Confirm password has left blank!");
        } else if (e.target.value !== pass1) {
          setError("Confirm password does not match!");
        }
        break;
      default:
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!checkPassword()) {
      return; // Stop here if the password is invalid
    }

    if (user !== "" && email !== "" && pass1 !== "" && pass2 !== "") {
      var url = "http://localhost/reactjs/registeration.php";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        user: user,
        email: email,
        pass: pass2,
      };
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          setMsg(response[0].result);
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
      setUser("");
      setEmail("");
      setPass1("");
      setPass2("");
    } else {
      setError("All fields are required!");
    }
  }

  function checkUser() {
    var url = "http://localhost/reactjs/checkuser.php";
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    var Data = {
      user: user,
    };
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then((response) => {
        setError(response[0].result);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }

  function checkEmail() {
    var url = "http://localhost/reactjs/checkemail.php";
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    var Data = {
      email: email,
    };
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then((response) => {
        setError(response[0].result);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }

  function checkPassword() {
    if (pass1.length < 8) {
      setError("Password is less than 8 characters");
      return false;
    }
    return true;
  }

  return (
    <>
      {/* first section */}
      <Header title="Register" subtitle="Sign up" />

      {/* second section */}
      <section className="max-container padding-container mb-[200px] mt-[30px] grid md:grid-cols-2">
        <div>
          <img src="/bg_loginsignup.png" alt="hero_img" />
        </div>
        <div className="lg:w-[80%]">
          <div className="space-y-3">
            <p>
              {msg !== "" ? (
                <span className="text-green-500">{msg}</span>
              ) : (
                <span className="text-red-500">{error}</span>
              )}
            </p>
            <h1 className="text-[28px] font-bold text-navy-blue">Sign Up</h1>
            <p className="text-lg text-navy-blue">
              Trippy is one of the most popular Travel agency, explore Egypt and
              try to make adventure
            </p>
          </div>
          <form method="POST" className="mt-10 flex flex-col gap-10">
            <input
              type="text"
              className="h-[50px] rounded-[200px] border border-navy-blue px-[20px] py-[12px]"
              placeholder="Username*"
              name="user"
              value={user}
              onChange={(e) => handleInputChange(e, "user")}
              onBlur={checkUser}
              required
            />
            <input
              type="email"
              className="h-[50px] rounded-[200px] border border-navy-blue px-[20px] py-[12px]"
              placeholder="Email*"
              name="email"
              value={email}
              onChange={(e) => handleInputChange(e, "email")}
              onBlur={checkEmail}
              required
            />
            <input
              type="password"
              className="h-[50px] rounded-[200px] border border-navy-blue px-[20px] py-[12px]"
              placeholder="Password*"
              name="pass1"
              value={pass1}
              onChange={(e) => handleInputChange(e, "pass1")}
              onBlur={checkPassword}
              required
            />
            <input
              type="password"
              className="h-[50px] rounded-[200px] border border-navy-blue px-[20px] py-[12px]"
              placeholder="Confirm Password*"
              name="pass2"
              value={pass2}
              onChange={(e) => handleInputChange(e, "pass2")}
              required
            />

            <div className="flex flex-col items-center gap-5">
              <input
                type="submit"
                className="h-[50px] w-full cursor-pointer rounded-[200px] bg-light-orange px-[20px] py-[12px] font-bold text-white"
                value="Signup"
                onClick={(e) => handleSubmit(e)}
              />

              <p className="text-lg text-navy-blue">
                Already have an account ?
              </p>
              <button
                className="h-[50px] w-full cursor-pointer rounded-[200px] border border-heavy-gray bg-transparent px-[20px] py-[12px] font-bold text-navy-blue-dark duration-300 ease-out hover:bg-heavy-gray hover:text-white"
                onClick={goToLogin}
              >
                Login
              </button>
              {/* //!! ADD GOOGLE REGISTERATION */}
            </div>
          </form>
        </div>
      </section>
      {/* third section */}
      <Newsletter />
    </>
  );
};

export default Signup;
