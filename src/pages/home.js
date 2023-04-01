import React from "react";
import "../styles/home.scss";
import mainBanner from "../assets/images/main-banner-1.jpg";
import catBAnner1 from "../assets/images/catbanner-01.jpg";
import catBAnner2 from "../assets/images/catbanner-02.jpg";
import catBAnner3 from "../assets/images/catbanner-03.jpg";
import catBAnner4 from "../assets/images/catbanner-04.jpg";
import service1 from "../assets/images/service.png";
import service2 from "../assets/images/service-02.png";
import service3 from "../assets/images/service-03.png";
import service4 from "../assets/images/service-04.png";
import service5 from "../assets/images/service-05.png";
import camera from "../assets/images/camera.jpg";
import tv from "../assets/images/tv.jpg";
import brand1 from "../assets/images/brand-01.png";
import brand2 from "../assets/images/brand-02.png";
import brand3 from "../assets/images/brand-03.png";
import brand4 from "../assets/images/brand-04.png";
import brand5 from "../assets/images/brand-05.png";
import brand6 from "../assets/images/brand-06.png";
import brand7 from "../assets/images/brand-07.png";
import watch from "../assets/images/headphone.jpg";
import { Link, NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../componets/blogcard";
import ProductCard from "../componets/productcrad";
const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner p-3 position-relative">
                <img
                  src={mainBanner}
                  alt="main-banner"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPPERCHARGED FOR PROS</h4>
                  <h5>Iphone 14 promax</h5>
                  <p>From 100$ or 20$/month</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 ">
                <div className="small-banner  position-relative">
                  <img
                    src={catBAnner1}
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPPERCHARGED FOR PROS</h4>
                    <h5>Iphone 14 promax</h5>
                    <p>From 100$ or 20$/month</p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img
                    src={catBAnner2}
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPPERCHARGED FOR PROS</h4>
                    <h5>Iphone 14 promax</h5>
                    <p>From 100$ or 20$/month</p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img
                    src={catBAnner3}
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPPERCHARGED FOR PROS</h4>
                    <h5>Iphone 14 promax</h5>
                    <p>From 100$ or 20$/month</p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img
                    src={catBAnner4}
                    alt="main-banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPPERCHARGED FOR PROS</h4>
                    <h5>Iphone 14 promax</h5>
                    <p>From 100$ or 20$/month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src={service1} alt="service" srcset="" />
                  <div>
                    <h6> Free Shipping</h6>
                    <p classNAme="mb-0">From all order over 5$</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service2} alt="service" srcset="" />
                  <div>
                    <h6>Daily Suprise Offers</h6>
                    <p classNAme="mb-0">Saves upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service3} alt="service" srcset="" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p classNAme="mb-0">Shop with an export</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service4} alt="service" srcset="" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p classNAme="mb-0">Get factory Defalut Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={service5} alt="service" srcset="" />
                  <div>
                    <h6>Secure Payment</h6>
                    <p classNAme="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2  py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories align-items-center justify-content-between d-flex flex-wrap">
                <div className="d-flex gap-30 align-items-center itms">
                  <div>
                    <h6>Camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center itms">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                  <img src={tv} alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center itms">
                  <div>
                    <h6>Camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center itms">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src={watch} alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center itms">
                  <div>
                    <h6>Camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center itms">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                  <img src={tv} alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center itms">
                  <div>
                    <h6>Camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center itms">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src={watch} alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src={brand1} alt=" brand " srcset="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand2} alt=" brand " srcset="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand3} alt=" brand " srcset="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand4} alt=" brand " srcset="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand5} alt=" brand " srcset="" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand6} alt=" brand " srcset="" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand7} alt=" brand " srcset="" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="col-12">
            <h3 className="section-heading">Fetured Collection</h3>
          </div>
          <div className="row">
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>

        </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="col-12">
            <h3 className="section-heading">Our Letters Blogs</h3>
          </div>
          <div className="row">
    
        <BlogCard/>
          <BlogCard/>
          <BlogCard/>
          <BlogCard/>
      
        </div>
        </div>
      </section>
    </>
  );
};
export default Home;
