import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/signup");
  };

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setTimeout(function () {
      setMsg("");
    }, 5000);
  }, [msg]);

  const handleInputChange = (e, type) => {
    switch (type) {
      case "user":
        setError("");
        setUser(e.target.value);
        if (e.target.value == "") {
          setError("Username has left blank!");
        }
        break;
      case "pass":
        setError("");
        setPass(e.target.value);
        if (e.target.value == "") {
          setError("Password has left blank!");
        }
        break;
      default:
    }
  };

  function LoginSubmit(e) {
    e.preventDefault();
    if (user !== "" && pass !== "") {
      var url = "http://localhost/reactjs/login.php";
      var headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };
      var Data = {
        user: user,
        pass: pass,
      };
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (
            response[0].result === "Invalid username!" ||
            response[0].result === "Invalid password!"
          ) {
            setError(response[0].result);
          } else {
            setMsg(response[0].result);
          }
        })
        .catch((err) => {
          setError(err);
          console.log(err);
        });
    } else {
      setError("All fields are required!");
    }
  }

  return (
    <>
      {/* first section */}
      <Header title="Login" subtitle="Sign in" />

      {/* second section */}
      <section className="max-container padding-container mb-[200px] mt-[30px] grid md:grid-cols-2">
        <div>
          <img src="/bg_loginsignup.png" alt="hero_img" />
        </div>
        <div className="lg:w-[80%]">
          <div className="space-y-3">
            <h1 className="text-[28px] font-bold text-navy-blue">Login</h1>
            {msg !== "" ? (
              <span className="text-green-500">{msg}</span>
            ) : (
              <span className="text-red-500">{error}</span>
            )}
            <p className="text-lg text-navy-blue">
              Trippy is one of the most popular Travel agency to explore Egypt
              and try to make adventure
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
            />
            <input
              type="password"
              className="h-[50px] rounded-[200px] border border-navy-blue px-[20px] py-[12px]"
              placeholder="Password*"
              name="pass"
              value={pass}
              onChange={(e) => handleInputChange(e, "pass")}
            />

            <div className="flex justify-between">
              <div className="flex items-center">
                <input id="orange-checkbox" type="checkbox" name="checkbox" />
                <label
                  htmlFor="orange-checkbox"
                  className="ms-1 text-sm text-heavy-gray"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-light-orange">
                Forget Password?
              </a>
            </div>

            <div className="flex flex-col gap-5">
              <input
                type="submit"
                className="h-[50px] w-full cursor-pointer rounded-[200px] bg-light-orange px-[20px] py-[12px] font-bold text-white"
                value="Login"
                onClick={LoginSubmit}
              />
              <button
                className="h-[50px] w-full cursor-pointer rounded-[200px] border border-heavy-gray bg-transparent px-[20px] py-[12px] font-bold text-navy-blue-dark duration-300 ease-out hover:bg-heavy-gray hover:text-white"
                onClick={goToRegister}
              >
                Register
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

export default Login;
