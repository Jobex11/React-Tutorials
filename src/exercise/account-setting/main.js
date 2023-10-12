import React from "react";
import "./account.css";
import "font-awesome/css/font-awesome.min.css";

const Main = () => {
  return (
    <div>
      <main className="aside">
        <h2>
          <i class="fa fa-book" aria-hidden="true"></i>
        </h2>
      </main>
      <main className="content">
        {/* navbar */}
        <section className="navbar">
          <h2>Acount settings</h2>
        </section>
        <section className="header">
          <ul>
            <li>
              <h5>General settings</h5>
            </li>
            <li>
              <h5>Subscription</h5>
            </li>
            <li>
              <h5>Activity log</h5>
            </li>
            <li>
              <h5>Reset account</h5>
            </li>
          </ul>
        </section>
        <main className="underline"></main>
        {/* asidebar */}
        <section className="info container">
          {/* PROFILE DETAILS  */}
          <article className="profile vertical">
            <main className="row1">
              <h4>Profile Details</h4>
            </main>
            <main className="row2">
              <main className="col1">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPSJpbBkmgwgiEQhZiQUwWT7Yj6K7px9Y7obd8FWks&s"
                  alt="image-name"
                />
              </main>
              <main className="col2">
                <button type="btn" className="upload-profile">
                  Upload profile photo
                </button>
                <button type="btn" className="del-profile">
                  Delete
                </button>
                <h6>
                  *Image size should be at least 500kb and less than 4mb.
                  Allowed files .png and .jpg
                </h6>
              </main>
            </main>
            <main className="row3">
              <main className="col">
                <h5>Username</h5>
                <input placeholder="jobinson" />
              </main>
              <main className="col">
                <h5> Email </h5>
                <input placeholder="joblawal33@gmail.com" />
              </main>
            </main>
          </article>
          {/* QUIZ PREFERENCE */}
          {/* TO CONNECT TO SOCIAL MEDIA */}
          <article className="connect-media vertical">
            <main className="row1">
              <h4>Connect Account</h4>
            </main>
            <main className="row2">
              <h6>
                You can connect your profile to any of social media account. Get
                notified by just one button.
              </h6>
            </main>
            <main className="row3">
              <button>Connect</button>
            </main>
          </article>
          {/*  CHANGE PASSWORD */}
          <article className="reset-password  horizontal">
            <main>
              <h4>Reset password</h4>
            </main>
            <main>
              <h5>
                You can change can change your password. By just clicking on the
                button below.
              </h5>
            </main>
            <main>
              <button>Change password</button>
            </main>
          </article>
          {/*  CLOSE ACCOUNT */}
          <article className="close-account horizontal">
            <main>
              <h4></h4>
            </main>
            <main></main>
          </article>
        </section>
        {/* main */}
      </main>
    </div>
  );
};

export default Main;
