import { BsTwitterX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
function Home() {
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);
  const navigate = useNavigate();

  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
  };
  const handleConnectTwitter = () => {
    const clientId = "SFpVWEk1ZTRyVENlS1JDbE1PWWQ6MTpjaQ";
    const clientSecret = "I1kYCSy4_j_mE_HvGY6HHrM2Xf0i4z2dttAz5E1cHnzPRDQVPl";

    const authUrl = `https://api.twitter.com/oauth2/token`;

    fetch(authUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      },
      body: `grant_type=client_credentials`,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    if (token) console.log(`hCaptcha Token: ${token}`);
  }, [token]);

  return (
    <div className="container-fluid p-0">
      <div
        className="bg-image img-fluid"
        style={{
          backgroundImage: "url('/game.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "80%" }}
        >
          <div className="text-light">
            <h5 className="mb-4 text-center ">$GMRX rewards with</h5>
            <p
              onClick={handleConnectTwitter}
              style={{ cursor: "pointer" }}
              className="lead fw-bold text-center pe-cursor"
            >
              <img src="/gamein.png" alt="" />
            </p>
            <button
              onClick={() => navigate("/post")}
              className="btn btn-primary text-center w-100"
            >
              <BsTwitterX /> Connect Twitter
            </button>
            <p className="w-100 text-center mt-3 mb-3">
              By connecting your Twitter you agree to our Terms <br /> of Use
              and Privacy Policy
            </p>
            <div className="mt-3 text-center">
              <HCaptcha
                sitekey="4fd3a7da-e44d-4170-b37e-72e3c23033e8"
                onLoad={onLoad}
                onVerify={setToken}
                ref={captchaRef}
              />
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <p className="text-light text-left">
            <h2 style={{ color: "#FF368B" }}>01</h2>
            Sign Up
            <br />
            Simply connect your Twitter to get playing
          </p>
          <p className="text-light text-center">
            <h2 style={{ color: "#FF368B" }}>02</h2>
            Create & Earn
            <br />
            Earn ELO from your Twitter content
          </p>
          <p className="text-light" style={{ textAlign: "right" }}>
            <h2 style={{ color: "#FF368B" }}>03</h2>
            Claim $GMRX Reward
            <br />
            Your ELO converts to reward you $GMRX
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
