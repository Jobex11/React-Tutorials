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
      <main className="main">
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
          </ul>
        </section>
        <main className="underline"></main>
        {/* asidebar */}
        <section className="info">
          <article className="profile">
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
              <main className="row"></main>
            </main>
            <main className="row3">
              Username
              <input placeholder="jobinson" />
              Email
              <input placeholder="joblawal33@gmail.com" />
            </main>
          </article>
        </section>
        {/* main */}
      </main>
    </div>
  );
};

export default Main;
