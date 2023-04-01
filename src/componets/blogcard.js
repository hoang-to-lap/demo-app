import React from "react";
import "../styles/blogcard.scss";
import blog1 from "../assets/images/blog-1.jpg";
import { Link } from "react-router-dom";
const BlogCard = () =>{
    return(
        <>
        <div className="col-3">
            <div className="blog-card">
<img src={blog1} alt="Blog" className="img-fluid" srcset="" />
<div className="blog-content">
    <p className="date">1 Dec,2023</p>
    <h5 className="title"> A Beautiful Sunday Morning Renaissence</h5>
    <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus illo nisi laboriosam commodi obcaecati minima, nihil vel quae nam quod blanditiis quasi nobis eum vero amet quas libero reprehenderit. Praesentium.</p>
    <Link to="/"  type="button" class="btn btn-primary">Read More</Link>

</div>
            </div>
        </div>
        </>
    )
}
export default BlogCard;