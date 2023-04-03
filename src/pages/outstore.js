import React from "react";
import BreadCrumb from "../componets/Breadcrumb";
import { Helmet } from "react-helmet";
import Meta from "../componets/meta";
import "../styles/home.scss";
import "../styles/ourstore.scss";
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
                  
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Products Tag</h3>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
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
