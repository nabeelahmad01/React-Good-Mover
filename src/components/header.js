import React, { useState } from "react";
import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header style={{ borderBottom: "1px solid rgb(0 0 0 / 7%)" }}>
                <div className="d-lg-block d-none p-0">
                    <div id="navBar" style={{ borderBottom: "1px solid rgb(0 0 0 / 7%)" }}>
                        <nav className="navbar container px-3 navbar-expand-lg ">
                            <div className="container-fluid p-0">
                                <Link className="navbar-brand" to="/">
                                    <img src="https://mygoodmovers.com/assets/image/logo/MGM-LOGO.png" className="company_logo" width="175"
                                        height="53" loading="lazy" alt="logo" />
                                </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#goodMoverNavbar" aria-controls="goodMoverNavbar" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" aria-label="toggler icon"></span>
                                </button>
                                <div className="collapse navbar-collapse " id="goodMoverNavbar">
                                    <ul className="navbar-nav ms-auto d-flex align-items-center">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/top-mover">Top Movers</Link>
                                        </li>

                                        <li className="nav-item movers_menu">
                                            <Link className="nav-link" to="{{ route('moversPage') }}">movers<i style={{ fontSize: "14px" }}
                                                className="fa-solid fa-chevron-down ms-1"></i></Link>
                                            <ul className="p-2 m-0 list-unstyled sub_menu">
                                                <li><Link to="/local-mover">local movers</Link></li>
                                                <li><Link to="{{ route('long.dis.movers') }}">long distance movers</Link></li>
                                                <li><Link to="{{ route('route.page') }}">Movers by route</Link></li>
                                                <li><Link to="{{ route('cityMoversPage') }}">Top Moving Cities</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item movers_menu">
                                            <Link className="nav-link" to="/resource">Resources<i style={{ fontSize: "14px" }}
                                                className="fa-solid fa-chevron-down ms-1"></i></Link>
                                            <div className="resourse_sub_menu resources_menu list-unstyled p-0 m-0">
                                                <div className="resource_menu">
                                                    <div className="resources_deep_menue"
                                                        style={{ borderRight: "1px solid #bdbdbdbd", width: "50%" }}>
                                                        <p>Best Movers By Services</p>
                                                        <ol className="list-unstyled p-0 m-0">
                                                            <li className="li">
                                                                <Link to="https://mygoodmovers.com/r/best-moving-companies-in-usa">Best
                                                                    Moving Companies in USA</Link>
                                                            </li>
                                                            <li className="li">
                                                                <Link
                                                                    to="https://mygoodmovers.com/r/best-long-distance-moving-companies">Best
                                                                    Long Distance Moving Companies</Link>
                                                            </li>
                                                            <li className="li">
                                                                <Link to="https://mygoodmovers.com/r/best-local-moving-companies">Best
                                                                    Local Moving Companies</Link>
                                                            </li>
                                                            <li className="li">
                                                                <Link
                                                                    to="https://mygoodmovers.com/r/best-commercial-moving-companies">Best
                                                                    Commercial Moving Companies</Link>
                                                            </li>
                                                            <li className="li">
                                                                <Link
                                                                    to="https://mygoodmovers.com/r/best-residential-moving-companies">Best
                                                                    Residential Moving Companies</Link>
                                                            </li>
                                                            <li className="li">
                                                                <Link
                                                                    to="https://mygoodmovers.com/r/best-state-to-state-moving-companies">Best
                                                                    State-to-State Moving Companies</Link>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                    <div className="resources_deep_menue" style={{ width: "50%" }}>
                                                        <p>Best Movers By States</p>
                                                        <ol className=" list-unstyled">
                                                            <li><Link
                                                                to="https://mygoodmovers.com/r/best-moving-companies-in-florida">Best
                                                                Moving
                                                                Companies in Florida</Link></li>
                                                            <li><Link
                                                                to="https://mygoodmovers.com/r/best-moving-companies-in-california">Best
                                                                Moving
                                                                Companies in California</Link></li>
                                                            <li><Link
                                                                to="https://mygoodmovers.com/r/best-moving-companies-in-new-jersey">Best
                                                                Moving
                                                                Companies in New Jersey</Link></li>
                                                            <li><Link
                                                                to="https://mygoodmovers.com/r/best-moving-companies-in-illinois">Best
                                                                Moving
                                                                Companies in Illinois</Link></li>
                                                            <li><Link
                                                                to="https://mygoodmovers.com/r/best-moving-companies-in-new-york">Best
                                                                Moving
                                                                Companies in New York</Link></li>
                                                            <li><Link to="https://mygoodmovers.com/r/best-moving-companies-in-texas">Best
                                                                Moving
                                                                Companies in Texas</Link></li>

                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about">about us</Link>
                                        </li>
                                        <li className="nav-item movers_menu">
                                            <Link className="nav-link " to="{{ route('blogs.list') }}">blogs<i style={{ fontSize: "14px" }}
                                                className=" fa-solid fa-chevron-down ms-1"></i></Link>
                                            <ul className="p-2 m-0 list-unstyled sub_menu">
                                                <li><Link to="/categoryshow">ghjgjk</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="{{ route('move.quote') }}">Free Moving Estimate</Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div id="headForm">
                    <div className="container p-0 d-flex align-items-center justify-content-center">

                        <div className="row header_form d-flex align-items-center justify-content-end" style={{ width: "100%" }}>
                            <div className="col-12 col-md-3 col-lg-3 ">
                                <form action="{{ route('company.company-search') }}" method="get">
                                    <div className="input-group mt-2">
                                        <input type="search" className="companySearch form-control  border-end-0" name="search"
                                            value="{{ request('search') }}" placeholder="Search Your Moving Companies" />
                                        <span className="input-group-text">
                                            <button type="submit" className="border-0 bg-transparent" aria-label="search button"><i
                                                className="fa-solid fa-magnifying-glass"></i></button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 form_input_box position-relative">
                                <label for="zip_from_header">City You Are Moving From?</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fa fa-building"></i></span>
                                    <input type="text" name="zip_from" id="zip_from_header" maxlength="5"
                                        className="zipfromsearch form-control "
                                        value="zip search" placeholder="Zip, State or City*" />

                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 ">
                                <label for="zip_to_header">City You Are Moving To?</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text"><i className="fa fa-building"></i></span>
                                    <input type="text" name="zip_to" value="{{ old('zip_to') }}" maxlength="5"
                                        className=" ziptosearch form-control"
                                        placeholder="Zip, State or City*" id="zip_to_header" />
                                </div>
                            </div>
                            <div className="col-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center">
                                <label style={{ marginTop: "-15px", marginBottom: "-5px", textAlign: "center" }}><i
                                    className="fs-4 fa-solid fa-phone"
                                    style={{ color: "rgb(30 117 187)", fontSize: "14px !important" }}></i>
                                    <span className="fs-4"
                                        style={{ color: "rgb(30 117 187)", fontWeight: 900, fontSize: "14px !important;" }}>(239)
                                        799-6077</span></label>
                                <button type="button" className="get_quote" data-bs-toggle="modal" data-bs-target="#modalForm">Get Your
                                    Free Quote</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-md container-fluid d-lg-none d-block py-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="row d-flex align-items-center">
                                <div
                                    className="col-sm-4 col-9 d-flex align-items-center justify-content-sm-start justify-content-between">
                                    <div className="company_login_router d-sm-none d-block">
                                        <Link to="{{ route('biz.login') }}">
                                            <i className="fa-solid fa-user"></i>
                                        </Link>
                                    </div>
                                    <Link to="/">
                                        <img src="https://mygoodmovers.com/assets/image/logo/MGM-LOGO.png" className="company_logo" width="175"
                                            height="53" loading="lazy" alt="logo" />
                                    </Link>
                                </div>
                                <div className="col-sm-8 col-3 d-flex align-items-center justify-content-end">
                                    <Link to="#searchCompanyModal" data-bs-toggle="modal" id="anchor_searchbar">
                                        <i className="fa-solid fa-magnifying-glass" aria-label="icon"></i>
                                    </Link>
                                    <button className="offcanvas_btn" type="button" data-bs-toggle="offcanvas"
                                        data-bs-target="#goodMoversOffcanvas" aria-label="toggler bars icon"
                                        aria-controls="goodMoversOffcanvas">
                                        <i className="fa-solid fa-bars"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="offcanvas offcanvas-start" tabindex="-1" id="goodMoversOffcanvas"
                                aria-labelledby="offcanvasExampleLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                                        <Link to="/">
                                            <img src="https://mygoodmovers.com/assets/image/logo/MGM-LOGO.png" loading="lazy" width="175" height="53"
                                                className="company_logo" alt="logo" />
                                        </Link>
                                    </h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <div className="offcanvas_search_bar mt-4">
                                        <ul className="navbar-nav ms-auto d-flex r">
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/top-mover">Top Movers</Link>
                                            </li>

                                            <li className="nav-item movers_menu">
                                                <Link className="nav-link" to="{{ route('moversPage') }}">movers<i style={{ fontSize: "14px" }}
                                                    className="fa-solid fa-chevron-down ms-1"></i></Link>
                                                <ul className="p-2 m-0 list-unstyled sub_menu">
                                                    <li><Link to="/local-mover">local movers</Link></li>
                                                    <li><Link to="{{ route('long.dis.movers') }}">long distance movers</Link></li>
                                                    <li><Link to="{{ route('route.page') }}">Movers by route</Link></li>
                                                    <li><Link to="{{ route('cityMoversPage') }}">Top Moving Cities</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item movers_menu">
                                                <Link className="nav-link" to="#">Resources<i style={{ fontSize: "14px" }}
                                                    className="fa-solid fa-chevron-down ms-1"></i></Link>
                                                <div className="resourse_sub_menu resources_menu list-unstyled p-0 m-0">
                                                    <div className="resource_menu">
                                                        <div className="resources_deep_menue"
                                                            style={{ borderRight: "1px solid #bdbdbdbd", width: "50%" }}>
                                                            <p>Best Movers By Services</p>
                                                            <ol className="list-unstyled p-0 m-0">
                                                                <li className="li">
                                                                    <Link to="https://mygoodmovers.com/r/best-moving-companies-in-usa">Best
                                                                        Moving Companies in USA</Link>
                                                                </li>
                                                                <li className="li">
                                                                    <Link
                                                                        to="https://mygoodmovers.com/r/best-long-distance-moving-companies">Best
                                                                        Long Distance Moving Companies</Link>
                                                                </li>
                                                                <li className="li">
                                                                    <Link to="https://mygoodmovers.com/r/best-local-moving-companies">Best
                                                                        Local Moving Companies</Link>
                                                                </li>
                                                                <li className="li">
                                                                    <Link
                                                                        to="https://mygoodmovers.com/r/best-commercial-moving-companies">Best
                                                                        Commercial Moving Companies</Link>
                                                                </li>
                                                                <li className="li">
                                                                    <Link
                                                                        to="https://mygoodmovers.com/r/best-residential-moving-companies">Best
                                                                        Residential Moving Companies</Link>
                                                                </li>
                                                                <li className="li">
                                                                    <Link
                                                                        to="https://mygoodmovers.com/r/best-state-to-state-moving-companies">Best
                                                                        State-to-State Moving Companies</Link>
                                                                </li>
                                                            </ol>
                                                        </div>
                                                        <div className="resources_deep_menue" style={{ width: "50%" }}>
                                                            <p>Best Movers By States</p>
                                                            <ol className=" list-unstyled">
                                                                <li><Link
                                                                    to="https://mygoodmovers.com/r/best-moving-companies-in-florida">Best
                                                                    Moving
                                                                    Companies in Florida</Link></li>
                                                                <li><Link
                                                                    to="https://mygoodmovers.com/r/best-moving-companies-in-california">Best
                                                                    Moving
                                                                    Companies in California</Link></li>
                                                                <li><Link
                                                                    to="https://mygoodmovers.com/r/best-moving-companies-in-new-jersey">Best
                                                                    Moving
                                                                    Companies in New Jersey</Link></li>
                                                                <li><Link
                                                                    to="https://mygoodmovers.com/r/best-moving-companies-in-illinois">Best
                                                                    Moving
                                                                    Companies in Illinois</Link></li>
                                                                <li><Link
                                                                    to="https://mygoodmovers.com/r/best-moving-companies-in-new-york">Best
                                                                    Moving
                                                                    Companies in New York</Link></li>
                                                                <li><Link to="https://mygoodmovers.com/r/best-moving-companies-in-texas">Best
                                                                    Moving
                                                                    Companies in Texas</Link></li>

                                                            </ol>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/about">about us</Link>
                                            </li>
                                            <li className="nav-item movers_menu">
                                                <Link className="nav-link " to="{{ route('blogs.list') }}">blogs<i style={{ fontSize: "14px" }}
                                                    className=" fa-solid fa-chevron-down ms-1"></i></Link>
                                                <ul className="p-2 m-0 list-unstyled sub_menu">
                                                    <li><Link to="{{ route('blogs.cat.show', $c->slug) }}">ghjgjk</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="{{ route('move.quote') }}">Free Moving Estimate</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </header >


            <div className="modal_search_form">
                <div className="modal fade" id="searchCompanyModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-header border-0 ">
                                <h2 className="modal-title ms-auto fs-3" id="exampleModalLabel">Search Company</h2>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body p-0">
                                <form action="{{ route('company.company-search') }}" className="py-2" method="GET">
                                    <div className="input-group">
                                        <input type="search" placeholder="Search Companies" name="search"
                                            value="{{ request('search') }}" className="form-control border-0" />
                                        <span className="input-group-text bg-transparent border-0">
                                            <button type="submit" className="bg-transparent border-0" aria-label="search icon"><i
                                                className="fa-solid fa-magnifying-glass" aria-label="icon"></i></button>
                                        </span>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}
