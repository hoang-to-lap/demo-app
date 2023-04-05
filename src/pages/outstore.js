import React from "react";
import BreadCrumb from "../componets/Breadcrumb";
import { Helmet } from "react-helmet";
import Meta from "../componets/meta";
import "../styles/home.scss";
import "../styles/ourstore.scss";
import ReactStars from "react-rating-stars-component";
import watch from "../assets/watch-01.jpg"
import { Link } from "react-router-dom";
const OutStore = () => {
  
  return (
    <>
      <Meta title="Out Store" />
      <BreadCrumb title="Out Store" />
      <div className="store-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop by categories</h3>
                <div className="">
                  <ul className="ps-0">
                    <li>
                      <Link>Iphone</Link>
                    </li>
                    <li>
                      <Link>Tv</Link>
                    </li>
                    <li>
                      <Link>Watch</Link>
                    </li>
                    <li>
                      <Link>Ipad</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availabity</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        checked
                      />
                      <label className="form-check-label">In Stock(1)</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        Our of Stock(0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        From
                      </label>
                      <input
                        type="email"
                        class="form-control py-1"
                        id="exampleFormControlInput1"
                        placeholder="From"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">
                        To
                      </label>
                      <input
                        type="email"
                        class="form-control py-1"
                        id="exampleFormControlInput1"
                        placeholder="To"
                      />
                    </div>
                  </div>
                  <h5 className="sub-title">Color</h5>
                  <div>
                    <div className="d-flex flex-wrap">
                      <ul className="color ps-0">
                        <li className=""></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>

                    </div>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                  <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                        checked
                      />
                      <label className="form-check-label " htmlFor="color-1">S (2)</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                        checked
                      />
                      <label className="form-check-label " htmlFor="color-1">S (2)</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                        checked
                      />
                      <label className="form-check-label " htmlFor="color-1">S (2)</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                        checked
                      />
                      <label className="form-check-label " htmlFor="color-1">S (2)</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Products Tag</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap gap-10">
<span className="badge bg-light text-secondary rounded-3 py-2 px-3 "> Headphone

</span>
<span className="badge bg-light text-secondary rounded-3 py-2 px-3 "> Laptop

</span>
<span className="badge bg-light text-secondary rounded-3 py-2 px-3 ">Iphone

</span>
<span className="badge bg-light text-secondary rounded-3 py-2 px-3 ">Ipad

</span>
<span className="badge bg-light text-secondary rounded-3 py-2 px-3 "> TV

</span>
<span className="badge bg-light text-secondary rounded-3 py-2 px-3  "> Watch

</span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-product d-flex mb-3">
<div className="w-50">
<img src={watch} alt="" className="img-fluid"/>
</div>
<div className="w-50">
<h5>Headphone for kid from 20 age to 20 age</h5>
<ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <b>$ 20</b>
</div>
                  </div>
                  <div className="random-product d-flex">
<div className="w-50">
<img src={watch} alt="" className="img-fluid"/>
</div>
<div className="w-50">
<h5>Headphone for kid from 20 age to 20 age</h5>
<ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <b>$ 20</b>
</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OutStore;
