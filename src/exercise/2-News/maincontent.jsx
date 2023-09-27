import React from "react";

const Maincontent = () => {
  return (
    <div className="maincontent">
      <section className="nav">
        {/* unordered list avaialble here */}
        <ul>
          <li>
            <a href="#">Favorites</a>
          </li>
          <li>
            <a href="#">Alzeera</a>
          </li>
          <li>
            <a href="#">CNN</a>
          </li>
          <li>
            <a href="#">BBC</a>
          </li>
          <li>
            <a href="#">NTA</a>
          </li>
        </ul>
      </section>
      <section className="">
        {/* the list of programs based on topic */}
        <div class="newslist">
          <div class="news">
            <h3>The Building of wonder at Qarter</h3>
            <img src="https://www.course-api.com/images/tours/tour-1.jpeg" />
            <p> The unset Of humanoid robots has been harmful</p>
          </div>
          <div class="news">
            <h3>The Building of wonder at Qarter</h3>
            <img src="https://www.course-api.com/images/tours/tour-1.jpeg" />
            <p> The unset Of humanoid robots has been harmful</p>
          </div>
          <div class="news">
            <h3>The Building of wonder at Qarter</h3>
            <img src="https://www.course-api.com/images/tours/tour-1.jpeg" />
            <p> The unset Of humanoid robots has been harmful</p>
          </div>
          <div class="news">
            <h3>The Building of wonder at Qarter</h3>
            <img src="https://www.course-api.com/images/tours/tour-1.jpeg" />
            <p> The unset Of humanoid robots has been harmful</p>
          </div>
          <div class="news">
            <h3>The Building of wonder at Qarter</h3>
            <img src="https://www.course-api.com/images/tours/tour-1.jpeg" />
            <p> The unset Of humanoid robots has been harmful</p>
          </div>
          <div class="news">
            <h3>The Building of wonder at Qarter</h3>
            <img src="https://www.course-api.com/images/tours/tour-1.jpeg" />
            <p> The unset Of humanoid robots has been harmful</p>
          </div>
          <div class="news">
            <h3>The Building of wonder at Qarter</h3>
            <img src="https://www.course-api.com/images/tours/tour-1.jpeg" />
            <p> The unset Of humanoid robots has been harmful</p>
          </div>
          <div class="news">
            <h3>The Building of wonder at Qarter</h3>
            <img src="https://www.course-api.com/images/tours/tour-1.jpeg" />
            <p> The unset Of humanoid robots has been harmful</p>
          </div>
        </div>
      </section>
      <section className="morenews">
        {/* More news */}
        <a href="#">
          Get more of our news
          <div className="morenews12">
            <h2>
              {/*news icon*/}
              <i class="fa fa-newspaper-o icon" aria-hidden="true"></i>
              <font className="titlenews">News</font>
              <font className="titletwelve">12</font>
              <font className="titlepaper">PAPER</font>
            </h2>
          </div>
        </a>
      </section>
      <section>{/*  bottom */}</section>
    </div>
  );
};

export default Maincontent;
