import React from "react";
import postImage1 from "../../assets/images/blog/blog-s-1.jpg";
import postImage2 from "../../assets/images/blog/blog-s-2.jpg";
import postImage3 from "../../assets/images/blog/blog-s-3.jpg";

const BlogSidebar = () => {
  return (
    <div className="blog-sidebar">
      <div className="blog-sidebar__search">
        <form action="#">
          <input type="text" placeholder="Search here" />
          <button type="submit">
            <i className="azino-icon-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div className="blog-sidebar__single">
        <h3>Latest Posts</h3>
        <ul className="list-unstyled blog-sidebar__post">
          <li>
            <img src={postImage1} alt="" />
            <h3>
              <a href="news-details.html">
                Our donation is hope for poor childrens
              </a>
            </h3>
          </li>
          <li>
            <img src={postImage2} alt="" />
            <h3>
              <a href="news-details.html">Promoting The Rights of Children</a>
            </h3>
          </li>
          <li>
            <img src={postImage3} alt="" />
            <h3>
              <a href="news-details.html">
                Growing Up Children in Charity Care
              </a>
            </h3>
          </li>
        </ul>
      </div>
      <div className="blog-sidebar__single">
        <h3>Categories</h3>
        <ul className="list-unstyled blog-sidebar__category">
          <li>
            <a href="#none">Charity</a>
          </li>
          <li>
            <a href="#none">Fundraising</a>
          </li>
          <li>
            <a href="#none">Donations</a>
          </li>
          <li>
            <a href="#none">Health</a>
          </li>
          <li>
            <a href="#none">Save Lives</a>
          </li>
          <li>
            <a href="#none">Clean Water</a>
          </li>
        </ul>
      </div>
      <div className="blog-sidebar__single">
        <h3>Tags</h3>
        <ul className="list-unstyled blog-sidebar__tags">
          <li>
            <a href="#none">Charity</a>
          </li>
          <li>
            <a href="#none">donations</a>
          </li>
          <li>
            <a href="#none">savelives</a>
          </li>
          <li>
            <a href="#none">education</a>
          </li>
          <li>
            <a href="#none">poorpeople</a>
          </li>
          <li>
            <a href="#none">health</a>
          </li>
          <li>
            <a href="#none">cleanwater</a>
          </li>
        </ul>
      </div>
      <div className="blog-sidebar__single">
        <h3>Comments</h3>
        <ul className="blog-sidebar__comments">
          <li>
            <a href="#none">A Wordpress Commenter on Launch New Mobile App</a>
          </li>
          <li>
            <a href="#none">John Doe on Template: Comments</a>
          </li>
          <li>
            <a href="#none">A Wordpress Commenter on Launch New Mobile App</a>
          </li>
          <li>
            <a href="#none">John Doe on Template: Comments</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
