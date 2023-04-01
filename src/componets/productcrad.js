import React from "react";
import "../styles/product.scss";
import watch from "../assets/images/watch.jpg";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import cart from "../assets/images/add-cart.svg";
import view from "../assets/images/view.svg";
import watch1 from "../assets/watch-01.jpg"
import productcomparee from "../assets/images/prodcompare.svg";
import wish from "../assets/images/wish.svg";
const ProductCard = () => {
  return (
    <>
      <div className="col-3">
        <Link className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
<img src={wish} alt="wish" />
            </div>
          <div className="product-img">
            <img src={watch} alt="product-img"  className="img-fluid" srcset="" />
            <img src={watch1} alt="" className="img-fluid"/>
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kid headphone 10 pack mutil color red for student
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link to="/">
                <img src={cart} alt="add cart" srcset="" />
                </Link>
                <Link to="/">
                <img src={view} alt="view" srcset="" />
                </Link>
                <Link to="/">
                <img src={productcomparee} alt="product comparee" srcset="" />
                </Link>
            

            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
export default ProductCard;
