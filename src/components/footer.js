import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className="footer_widget">
                <div className="container">
                    <div className="row footer_row">

                        <div className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-3 ">
                            <Link to="{{ url('/') }}" className="d-block text-sm-start">
                                <img src="https://mygoodmovers.com/assets/image/logo/MGM-LOGO.png" className="footer_logo" loading="lazy"
                                    alt="MyGoodMovers_Logo" />
                            </Link>
                            <div className="company_email mt-2 mb-3 text-sm-start">
                                <h4 className="text-decoration-underline fs-5">email</h4>
                                <Link to="mailto:contact@mygoodmovers.com" className="d-flex flex-sm-row flex-column">
                                    <span className=" text-break">contact@mygoodmovers.com</span>
                                </Link>
                            </div>
                            <div className="social">
                                <nav className="social_links d-flex justify-content-center justify-content-sm-start">
                                    <Link to="https://www.facebook.com/mygoodmovers" target="_blank" aria-label="facebook">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </Link>
                                    <Link to="https://www.linkedin.com/company/my-good-movers" target="_blank"
                                        aria-label="linkedin">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                    </Link>
                                    <Link to="https://twitter.com/my_good_movers" target="_blank" aria-label="twitter">
                                        <i className="fa-brands fa-twitter"></i>
                                    </Link>
                                    <Link to="https://www.pinterest.com/mygoodmovers" target="_blank" aria-label="pinterest">
                                        <i className="fa-brands fa-pinterest-p"></i>
                                    </Link>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-3  ps-lg-5  col-6  ">
                            <h4 className="text-decoration-underline">Links</h4>
                            <ul className="pages_link list-unstyled p-0 m-0">
                                <li>
                                    <Link to="{{ route('blogs.list') }}">Blogs</Link>
                                </li>
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link to="{{ route('contact-us') }}">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="{{ route('write-review') }}">Write a review</Link>
                                </li>
                                <li>
                                    <Link to="{{ route('sitemap') }}">Sitemap</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-6  mb-lg-0 mb-3 ">
                            <h4 className="text-decoration-underline">Movers</h4>
                            <ul className="pages_link list-unstyled p-0 m-0 ">
                                <li>
                                    <Link to="{{ route('moversPage') }}">Movers In USA</Link>
                                </li>
                                <li>
                                    <Link to="{{ route('long.dis.movers') }}">Long Distance Movers</Link>
                                </li>
                                <li>
                                    <Link to="{{ route('local.movers') }}">Local Movers</Link>
                                </li>
                                <li>
                                    <Link to="{{ route('route.page') }}">Movers By Route</Link>
                                </li>
                                <li><Link to="{{ route('best.movers') }}">Best Moving Companies</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-3">

                            <h4 className="text-decoration-underline">For Business</h4>
                            <ul className="pages_link list-unstyled p-0 m-0 d-flex flex-column">
                                <li>
                                    <Link to="{{ route('biz.login') }}">Login</Link>
                                </li>
                                <li>
                                    <Link to="{{ route('register.company') }}">Add Business</Link>
                                </li>
                                <li>
                                    <Link to="{{ route('advertising.page') }}">Advertise Your Company</Link>
                                </li>
                                <li>
                                    <Link to="{{ route('certification.page') }}">Certified Movers</Link>
                                </li>
                                <li>
                                    <Link to="{{ route('broker.page') }}">Certified Broker</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="row pt-2 pb-2 new">
                        <div className="col-lg-6 col-12 text-lg-start text-center">Copyright © <span id="update_year"></span> MyGoodMovers.com. All Rights Reserved.</div>
                        <div className="col-lg-6 col-12 text-lg-end text-center">
                            <Link to="{{ route('privacy-policy') }}">Privacy Policy |</Link> <Link
                                to="{{ route('terms-conditions') }}">Terms & Conditions</Link>
                        </div>
                    </div>


                </div>
                <script type="text/javascript" src="https://cdn.ywxi.net/js/1.js" async></script>

            </footer>
        </>
    )
}
