import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/heder.scss";
import compare from "../assets/images/compare.svg";
import wishlist from "../assets/images/wishlist.svg";
import user from "../assets/images/user.svg";
import cart from "../assets/images/cart.svg";
import menu from "../assets/images/menu.svg"
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                {" "}
                Freee shopping over 100$ & Free Return
              </p>
            </div>
            <div className="col-6">
              <p className="text-white mb-0 text-end">
                Hotline :{" "}
                <a href="#" className="text-white">
                  {" "}
                  +84 6517832
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h2>
                <Link className="text-white">Dev corner</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <i class="bi bi-search"></i>
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between ">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={compare} alt="compare" srcset="" />
                    <p  className="mb-0">
                      {" "}
                      Compore <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={wishlist} alt="wishlist" srcset="" />
                    <p  className="mb-0">
                      {" "}
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={user} alt="user" srcset="" />
                    <p  className="mb-0">
                      {" "}
                      Login <br /> Account{" "}
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src={cart} alt="cart" srcset="" />
                    <div className="d-flex flex-column">
                      <span className=" badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
<div className="col-3">
  <div className="menu-bottom d-flex align-items-center gap-30">
<div><div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
 <img src={menu} alt="menu" srcset="" /> <span>Shop Category</span>
  </button>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item text-black" to="/">Action</Link></li>
    <li><Link className="dropdown-item text-black" to="/">Another action</Link></li>
    <li><Link className="dropdown-item text-black" to="/">Something else here</Link></li>
  </ul>
</div></div>
<div className="menu-link">
  <div className="d-flex align-items-center gap-50">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/store">Store</NavLink>
    <NavLink to="/about">Blogs</NavLink>
    <NavLink to="/contact">Contact</NavLink>

  </div>
</div>
  </div>
</div>
        </div>
      </header>
    </>
  );
};
export default Header;
