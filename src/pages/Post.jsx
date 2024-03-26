import { useEffect, useState } from "react";
import { BsHeartFill, BsQuote } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { FaEye, FaRetweet } from "react-icons/fa6";
import { FaReply } from "react-icons/fa";
import "./page.css";

function Post() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const today = new Date();
    const targetDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(
        (distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const countdownStr = `${days}d${days !== 1 ? "" : ""}, ${hours}h${
        hours !== 1 ? "" : ""
      }, ${minutes}m${minutes !== 1 ? "" : ""}, ${seconds}s${
        seconds !== 1 ? "" : ""
      }`;

      setCountdown(countdownStr);

      if (distance < 0) {
        clearInterval(interval);
        setCountdown("EXPIRED");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="container-fluid p-0 app__post"
      style={{
        backgroundColor: "#070209",
        height: "100%",
      }}
    >
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a onClick={() => navigate("/")} className="navbar-brand" href="#">
            <img src="/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto text-center mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active  text-white"
                  aria-current="page"
                  href="#"
                >
                  How To Play
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="#">
                  Telegram
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-white" href="#">
                  Discord
                </a>
              </li>
            </ul>

            <span className="text-white" type="submit">
              Twitter Username
            </span>
          </div>
        </div>
      </nav>
      <div style={{ height: "70%" }}>
        <div className="row mt-5">
          <div className="col-sm-3 text-center">
            <div className="text-light">
              <h2 className="mb-2">
                {" "}
                <img src="/need.png" alt="" />
              </h2>
              <br />
              <small>TOTAL ELO</small>
              <h4>0 ELO</h4>
              <small>*ELO updated every few days</small>
              <br />
              <small>SEASON LEFT</small>
              <h4 className="text-uppercase" style={{ color: "#FF368B" }}>
                {countdown}
              </h4>
            </div>
          </div>
          <div className="col-sm-7 text-center">
            <div className="text-light">
              <h2 className="mb-2">RANKED by GAIMIN</h2>
              <p>
                TOTAL Earn ELO by engaging with us on X/Twitter to convert to
                $GMRX
              </p>

              <div className="twitter__link">
                <TwitterTweetEmbed tweetId={"1771438481069273284"} />
              </div>

              <div className="row twitter__link">
                <div className="col-sm-4">
                  <div>
                    <p className="mt-4" style={{ color: "#C1C1C1" }}>
                      Gaimin Power Post Engagement
                    </p>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="fw-bolder" style={{ color: "#C1C1C1" }}>
                        {" "}
                        <BsHeartFill /> LIKES (20 ELO):
                      </span>
                      <span>
                        <span style={{ color: "#FF368B" }}> (0 ELO)</span>/4
                      </span>
                    </p>

                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="fw-bolder" style={{ color: "#C1C1C1" }}>
                        {" "}
                        <BsQuote /> QUOTE (20 ELO):
                      </span>
                      <span>
                        <span style={{ color: "#FF368B" }}> (0 ELO)</span>/4
                      </span>
                    </p>

                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="fw-bolder" style={{ color: "#C1C1C1" }}>
                        {" "}
                        <FaRetweet /> REPOST (20 ELO):
                      </span>
                      <span>
                        <span style={{ color: "#FF368B" }}> (0 ELO)</span>/4
                      </span>
                    </p>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="fw-bolder" style={{ color: "#C1C1C1" }}>
                        {" "}
                        <FaReply /> REPLIES (20 ELO):
                      </span>
                      <span>
                        <span style={{ color: "#FF368B" }}> (0 ELO)</span>/4
                      </span>
                    </p>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div>
                    <p className="mt-4" style={{ color: "#C1C1C1" }}>
                      Your posts/tweets engagement ELO tagging @gaiminio
                    </p>
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="fw-bolder" style={{ color: "#FF368B" }}>
                        {" "}
                        <BsHeartFill /> 0 / 0 ELO
                      </span>
                      <span className="fw-bold" style={{ color: "#FF368B" }}>
                        10 ELO Per Like
                      </span>
                    </p>

                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="fw-bolder" style={{ color: "#FF368B" }}>
                        {" "}
                        <BsQuote /> 0 / 0 ELO
                      </span>
                      <span className="fw-bold" style={{ color: "#FF368B" }}>
                        30 ELO Per Quote
                      </span>
                    </p>

                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="fw-bolder" style={{ color: "#FF368B" }}>
                        {" "}
                        <FaRetweet /> 0 / 0 ELO
                      </span>
                      <span className="fw-bold" style={{ color: "#FF368B" }}>
                        30 ELO Per Repost
                      </span>
                    </p>

                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="fw-bolder" style={{ color: "#FF368B" }}>
                        {" "}
                        <FaReply /> 0 / 0 ELO
                      </span>
                      <span className="fw-bold" style={{ color: "#FF368B" }}>
                        30 ELO Per Reply
                      </span>
                    </p>

                    <p
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="fw-bolder" style={{ color: "#FF368B" }}>
                        {" "}
                        <FaEye /> 0 / 0 ELO
                      </span>
                      <span className="fw-bold" style={{ color: "#FF368B" }}>
                        30 ELO Per View
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-2">
                Note: We crawl X every 24 hours to check your engagement and
                reward you with ELO
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
