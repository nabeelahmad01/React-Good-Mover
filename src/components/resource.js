import React from 'react'
import "./resource.css"
import { Link } from 'react-router-dom';

export default function Resource() {
    return (
        <>
            <div className="navbar_company  px-3" id="sticky_navbar_company">
                <div className="container" id="scrollDiv">
                    <div className="row">
                        <div className="col-12 ps-0">
                            <div className="inner_navbar py-2">
                                <ul className="m-0 p-0 list-unstyled d-flex">
                                    <li><Link to="#{{ $navbar->company->slug }}"
                                        id="{{ $navbar->company->slug }}_link">ghdfghfgh</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-4">
                <div className="container">
                    <div className="row best_mover_heading ">
                        <div className="col-xl-12 col-12 mx-auto ">
                            <div className="container p-0">
                                <nav aria-label="breadcrumb"
                                    style={{ marginBottom: "14px", fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                                    <ol className="breadcrumb p-0 m-0">
                                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">dsfsfg</li>
                                    </ol>
                                </nav>
                                <h1 className="m-0 text-start">hgfghf of 2024</h1>
                                <div className="col-lg-8 col-12 authors d-flex mb-2 mt-3">
                                    <div className="d-sm-flex">
                                        <div className="col-sm-6 col-12 p-0">
                                            <div className="wrritenby d-flex align-items-center me-2">
                                                <img src="https://mygoodmovers.com/users/profile_image/isaac-aiden.png"
                                                    className="rounded-circle writer-img me-2" />
                                                <div className="auth_detai d-flex flex-column ">
                                                    <Link to="#"
                                                        style={{ fontWeight: 700, color: "var(--secondary-color)", fontFamily: 'Plus Jakarta Sans' }}>Written
                                                        by: <br /><span>Rylan Steven</span></Link>
                                                    <span className="writen_date"> Published Date:10, july</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-12 mt-sm-0 mt-2 p-0">
                                            <div className="editedby d-flex align-items-center">
                                                <img src="https://mygoodmovers.com/users/profile_image/isaac-aiden.png"
                                                    className="rounded-circle writer-img me-2" />
                                                <div className="auth_detai d-flex flex-column ">
                                                    <Link to="#"
                                                        style={{ fontWeight: 700, color: "var(--secondary-color)", fontFamily: 'Plus Jakarta Sans' }}>Edited
                                                        by:
                                                        <br /><span>Scolfield Yern</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div id="resources_content_text">
                                    wtsedgrshg sgdsfgdgh
                                </div>
                                <h2 className="featured_mover">Featured Movers</h2>
                                <div className="swiper-container" id="topBestCompanyCarousel">
                                    <span className="advertisement_tag" tabindex="0" data-bs-toggle="popover"
                                        data-bs-trigger="hover focus"
                                        data-bs-content="At My Good Movers, transparency matters. We want you to know that we may receive compensation for services purchased through our platform. This compensation affects how offers are ranked and featured. We prioritize showcasing offers that provide the best value, though not every offer may be included (some are customizable)."
                                        data-bs-placement="bottom"> Advertisements <i
                                            className="fa-regular fa-circle-question"></i></span>

                                    <div className="swiper-wrapper justify-content-center">
                                        <div className="swiper-slide">
                                            <div className="card @if ($item->position == 1) card__active @endif top_cards  px-xl-2  px-3 py-4 position-relative
                                     {{-- {{ $item->status == 0 ? 'blurred' : '' }} --}}
                                      ">
                                                <img src="{{ asset('assets/image/MGM-Trusted-Movers-Badge.webp') }}"
                                                    className="water_mark_image" alt="company_watermark" />
                                                <span className="numbring"> 3</span>
                                                <span className="span_tag @if ($item->position == 1) span_tag__active @endif">Our Top
                                                    Pick</span>
                                                <Link to="{{ route('company.show', $item->company->slug) }}" target="_blank">
                                                    <div className="card_badge @if ($item->position == 1) card__active__badge @endif">
                                                        dfsgeg
                                                    </div>
                                                    <div
                                                        className="card-header border-0 position-relative p-0 bg-transparent d-flex justify-content-center">
                                                        <img src="https://mygoodmovers.com/companies/logo/international-van-lines.png" className="ad_card_img"
                                                            alt="fgshggd" />
                                                    </div>
                                                </Link>

                                                <div className="card-body p-0 text-center">
                                                    <ul
                                                        className="list-unstyled stars_list m-0 mb-2 d-flex align-items-center justify-content-center">
                                                        <li><i className="fas fa-star" aria-hidden="true"></i></li>
                                                        <li><i className="fa fa-star-half-stroke" aria-hidden="true"></i></li>
                                                        <li><i className="far fa-star" aria-hidden="true"></i></li>

                                                    </ul>
                                                    <ul
                                                        className="list-unstyled stars_list m-0 mb-2 d-flex align-items-center justify-content-center">
                                                        <li>
                                                            <span className="best_company_rating">fsgeg (MGM Rating)</span>
                                                        </li>
                                                    </ul>
                                                    <ul className="list-unstyled card-li text-start">
                                                        <li className="d-flex align-items-baseline"><img
                                                            src="https://mygoodmovers.com/assets/image/check-mark.png" alt="check-mark"
                                                            width="13" height="13" />fghjghjkghj</li>
                                                        <li className="d-flex align-items-baseline"><img
                                                            src="https://mygoodmovers.com/assets/image/check-mark.png" alt="check-mark"
                                                            width="13" height="13" />jghkhgjk</li>
                                                        <li className="d-flex align-items-baseline"><img
                                                            src="https://mygoodmovers.com/assets/image/check-mark.png" alt="check-mark"
                                                            width="13" height="13" />jhkhjk</li>
                                                    </ul>
                                                    <div className="text-center">
                                                        <i className="fa-solid fa-phone">
                                                            <Link to="javascript:void(0);" className="contact-number"
                                                                data-company-id="{{ $item->company->id }}"
                                                                data-phone="{{ $item->phone_no }}"
                                                                style={{ color: "#123269", fontFamily: 'Albert Sans', fontSize: "18px", fontWeight: 600, marginLeft: "10px", marginBottom: "-2px" }}>
                                                                Call Now
                                                            </Link>
                                                        </i>
                                                    </div>
                                                    <div
                                                        className="card-footer @if ($item->position == 1) card_footer_active @endif bg-transparent border-0 text-center">
                                                        <Link to="{{ route('contact.mover', $item->company->slug) }}" target="_blank"
                                                            className="btn btn-primary border-0">Get Free Estimates</Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                    <div className="swiper-button-next"></div>
                                    <div className="swiper-button-prev"></div>
                                </div>
                                <div className="col-xl-12 col-12 mx-auto">
                                    <div className="row">
                                        <div className="col-lg-8" style={{ padding: "0px" }}>

                                            <div className="company_details">

                                                <div className="container" style={{ padding: "0px" }}>
                                                    <hr />
                                                    <div className="row"
                                                        id="{{ str_replace('moving-companies', 'movers', $bestMoverPage->slug) }}">
                                                        <div className="col-xl-12 col-12 best_company_list ">
                                                            <h2>The uhljhl;k of 2024</h2>
                                                            <ul>
                                                                <li>
                                                                    <span><Link target="_blank"
                                                                        to="{{ route('company.show', $list->company->slug) }}"
                                                                        className="text-black"
                                                                        style={{ color: "var(--primary-color)" }}>gfdjhfgj</Link></span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="row" id="campare-long-distance">
                                                        <div className="col-xl-12 col-12 my-3">
                                                            <h3>Here The hjkjhlj;
                                                                Comparison</h3>
                                                        </div>
                                                        <div className="col-xl-12 company_feature_table">
                                                            <div className="table-responsive">
                                                                <table className="table comperison_table ">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Companies</th>
                                                                            <th scope="col">MGM Rating</th>
                                                                            <th scope="col">Deposit Required</th>
                                                                            <th scope="col">Service Availability</th>
                                                                            <th scope="col">Estimate Cost</th>
                                                                            <th scope="col">Link</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <img src="{{ URL::to($company->company->logo) }}"
                                                                                    width="65" height="26"
                                                                                    alt="company-logo" />
                                                                            </td>
                                                                            <td>
                                                                                <span className="rating">4/5</span>
                                                                                <ul
                                                                                    className="d-flex list-unstyled justify-content-center">
                                                                                    <li><i className="far fa-star"
                                                                                        aria-hidden="true"></i></li>
                                                                                    <li><i className="far fa-star"
                                                                                        aria-hidden="true"></i></li>
                                                                                    <li><i className="far fa-star"
                                                                                        aria-hidden="true"></i></li>
                                                                                    <li><i className="far fa-star"
                                                                                        aria-hidden="true"></i></li>
                                                                                    <li><i className="far fa-star"
                                                                                        aria-hidden="true"></i></li>

                                                                                </ul>
                                                                            </td>
                                                                            <td>hkjlj;</td>
                                                                            <td>klj;jkl;</td>
                                                                            <td>
                                                                                yuftyj to yjufghjg
                                                                            </td>
                                                                            <td>
                                                                                <Link target="_blank"
                                                                                    to="{{ route('contact.mover', $company->company->slug) }} "><i
                                                                                        className="fa-solid fa-globe"></i></Link>
                                                                            </td>
                                                                        </tr>

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div id="top-recommendations">
                                                        <hr />
                                                        <div className="col-xl-12 col-12 my-3 mt-5">
                                                            <h3>Details of fjghjgh</h3>
                                                        </div>
                                                        <div className="row company_section" id="{{ $company->company->slug }}">
                                                            <div className="col-12">
                                                                <div className="row mt-5">
                                                                    <div className="col-xl-12 col-12">
                                                                        <div className="card mb-3 rounded-4 position-relative">
                                                                            <span className="badge_title">fghfj</span>
                                                                            <div className="row g-0 d-flex align-items-center">
                                                                                <div
                                                                                    className="col-xl-3 col-12 d-flex justify-content-center flex-column align-items-center">
                                                                                    <Link target="_blank"
                                                                                        to="{{ route('company.show', $company->company->slug) }}">
                                                                                        <img src="{{ URL::to($company->company->logo) }}"
                                                                                            width="140" height="100"
                                                                                            className="img-fluid rounded-start best_company_logo"
                                                                                            alt="company logo" />
                                                                                    </Link>
                                                                                    <div className="company_rating_stars">

                                                                                        <h4 className="mb-0">jkljkl;<span
                                                                                            className="rating_review">jkl;kjl;k
                                                                                            reviews</span></h4>
                                                                                        <ul
                                                                                            className="d-flex list-unstyled justify-content-center">
                                                                                            <li><i className="far fa-star"
                                                                                                aria-hidden="true"></i></li>
                                                                                            <li><i className="far fa-star"
                                                                                                aria-hidden="true"></i></li>
                                                                                            <li><i className="far fa-star"
                                                                                                aria-hidden="true"></i></li>
                                                                                            <li><i className="far fa-star"
                                                                                                aria-hidden="true"></i></li>
                                                                                            <li><i className="far fa-star"
                                                                                                aria-hidden="true"></i></li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-xl-9 col-12">
                                                                                    <div className="card-body ">
                                                                                        <div className="row">
                                                                                            <div
                                                                                                className="col-lg-8 col-12 company_title_feature position-relative">
                                                                                                <h3 className=" m-0 company__name">
                                                                                                    hgfjgjhk fj fhj
                                                                                                </h3>
                                                                                                <ul
                                                                                                    className="list-unstyled m-0 p-0 mt-2">
                                                                                                    <li><i
                                                                                                        className="fa-solid fa-check"></i>fghjgfj
                                                                                                    </li>
                                                                                                    <li><i
                                                                                                        className="fa-solid fa-check"></i>ghjgj
                                                                                                    </li>
                                                                                                    <li><i
                                                                                                        className="fa-solid fa-check"></i>ghjghkgj
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </div>
                                                                                            <div className="col-lg-4 col-12">
                                                                                                <div
                                                                                                    className="btn_group d-flex flex-column justify-content-end align-items-center ms-lg-auto mx-lg-0 mx-auto mt-lg-0 mt-3">
                                                                                                    <Link to="{{ route('company.show', $company->company->slug) }}"
                                                                                                        target="_blank"
                                                                                                        className="btn btn-primary reviews mb-3 "
                                                                                                        style={{ padding: '7px 30px' }}>Learn
                                                                                                        More</Link>
                                                                                                    <Link to="#moverContactBottom{{ $company->company->id }}"
                                                                                                        data-bs-toggle="modal"
                                                                                                        className="btn btn-primary  text-capitalize  estimate"
                                                                                                        style={{ padding: '7px 20px' }}>free
                                                                                                        estimate</Link>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xl-12 col-12 company_details_info">
                                                                        fghfjgfhj
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="modal fade" id="moverContactBottom{{ $company->company->id }}"
                                                            tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                            <div className="modal-dialog modal-lg modal-dialog-centered">
                                                                <div className="modal-content claim_form">
                                                                    <div className="modal-header px-sm-5 border-0">
                                                                        <img src="{{ URL::to($company->company->logo) }}"
                                                                            className="ps-2" alt="companylogo" />
                                                                        <button type="button" className="btn-close"
                                                                            data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div className="modal-body pt-0">
                                                                        <form
                                                                            action="{{ route('contact.mover.post', $company->company->id) }}"
                                                                            method="POST">
                                                                            @csrf
                                                                            <input type="hidden" name="referrer"
                                                                                value="{{ URL::current() }}" />
                                                                            <div className="card">
                                                                                <div className="card_header px-sm-5 ">

                                                                                    <h2 className="text-start">hgfjgjk</h2>
                                                                                    <span className="fw-bold fs-5">Free Instant
                                                                                        Quote</span>
                                                                                    <br />
                                                                                    <span>
                                                                                        Fields marked with an * are required</span>
                                                                                </div>
                                                                                <div className="card-body px-sm-5 px-0">
                                                                                    <div className="row">
                                                                                        <div className="col-lg-6 col-12 mb-1">
                                                                                            <label for="ozip">City you are
                                                                                                moving
                                                                                                from*</label>
                                                                                            <input type="text" name="ozip"
                                                                                                className="zipfromsearch form-control"
                                                                                                id="ozip"
                                                                                                placeholder="City Name or Zip From"
                                                                                                required />
                                                                                        </div>
                                                                                        <div className="col-lg-6 col-12 mb-1">
                                                                                            <label for="dzip">City you are moving
                                                                                                to*</label>
                                                                                            <input type="text" name="dzip"
                                                                                                className="ziptosearch form-control"
                                                                                                id="dzip"
                                                                                                placeholder="City Name or Zip To"
                                                                                                required />
                                                                                        </div>
                                                                                        <div className="col-lg-6 col-12 mb-1">
                                                                                            <label for="firstname">Enter Your Full
                                                                                                Name*</label>
                                                                                            <input type="text" name="firstname"
                                                                                                className="form-control"
                                                                                                placeholder="Full Name" id="firstname"
                                                                                                required />
                                                                                        </div>
                                                                                        <div className="col-lg-6 col-12 mb-1">
                                                                                            <label for="email">Enter Email
                                                                                                Address*</label>
                                                                                            <input type="email" name="email"
                                                                                                className="form-control"
                                                                                                placeholder="Email" id="email"
                                                                                                required />
                                                                                        </div>
                                                                                        <div className="col-lg-6 col-12 mb-1">
                                                                                            <label for="phone1">Enter Phone
                                                                                                Number*</label>
                                                                                            <input type="text" name="phone1"
                                                                                                className="form-control"
                                                                                                placeholder="Phone No." id="phone1"
                                                                                                required />
                                                                                        </div>
                                                                                        <div className="col-lg-6 col-12 mb-1">
                                                                                            <label for="movedte">Select Move
                                                                                                Date*</label>
                                                                                            <input type="date" name="date"
                                                                                                placeholder="When do you except to move?"
                                                                                                className="form-control" id="movedte"
                                                                                                required />
                                                                                        </div>


                                                                                        <div className="col-lg-6 col-12 mb-1">
                                                                                            <label for="date">Select Move
                                                                                                Size*</label>
                                                                                            <select name="movesize"
                                                                                                className="form-control">
                                                                                                <option value="" disabled selected>
                                                                                                    Select Move Size
                                                                                                </option>
                                                                                                <option value="Apartment Move">
                                                                                                    Apartment
                                                                                                    Move</option>
                                                                                                <option value="Residential Move">
                                                                                                    Residential Move</option>
                                                                                                <option value="Partial Move">Partial
                                                                                                    Move
                                                                                                </option>
                                                                                                <option value="Studio Move">Studio
                                                                                                    Move
                                                                                                </option>
                                                                                                <option value="Office Move">Office
                                                                                                    Move
                                                                                                </option>
                                                                                                <option value="Commercial Move">
                                                                                                    Commercial
                                                                                                    Move</option>
                                                                                                <option value="4 Bedroom Home">4+
                                                                                                    Bedroom
                                                                                                    Home</option>
                                                                                                <option value="4 Bedroom Home">4
                                                                                                    Bedroom
                                                                                                    Home</option>
                                                                                                <option value="3 Bedroom Home">3
                                                                                                    Bedroom
                                                                                                    Home</option>
                                                                                                <option value="2 Bedroom Home">2
                                                                                                    Bedroom
                                                                                                    Home</option>
                                                                                                <option value="1 Bedroom Home">1
                                                                                                    Bedroom
                                                                                                    Home</option>
                                                                                            </select>
                                                                                        </div>
                                                                                        <div className="col-lg-6 col-12 mb-1">
                                                                                            <label for="mover_date">Comment
                                                                                                (Optional)
                                                                                            </label>
                                                                                            <input type="text" name="message"
                                                                                                placeholder="Any Message"
                                                                                                className="form-control" required />
                                                                                        </div>
                                                                                        <div className="col-lg-6 col-12 mb-1">
                                                                                            <div className="input-group ">
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-12 text-end mt-4">
                                                                                            <button
                                                                                                className="btn btn-primary">Submit</button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row my-5">
                                                        <div className="col-xl-12 col-12">
                                                            <h3>Best Moving Companies by State</h3>
                                                            <div className="row ml-2">
                                                                <div
                                                                    className="col-lg-3 my-2 col-md-4 col-6 moving_companies_by_states">
                                                                    <Link
                                                                        to="{{ route('state.show', $state->slug) }}">fghcv</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <form id="msform" action="{{ route('quote.post') }}" method="POST">
                                                        <input type="hidden" name="referrer" value="{{ URL::current() }}" />
                                                        <div className="progress-container">
                                                            <div className="progress-bar-wrapper">
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" style={{ width: "0%" }}
                                                                        aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="progress-percentage">0%</div>
                                                        </div>
                                                        <fieldset className="first_page">
                                                            <h3 className="wp-block-heading mt-2" style={{ margin: "0", textAlign: "left" }}>
                                                                Let's Get You Moved </h3>
                                                            <div className="form-content">
                                                                <div className=" d-flex flex-column col-12 p-0 text-left">
                                                                    <label className="fw-bold my-1" for="">Moving From</label>
                                                                    <div className="d-flex align-items-center input-form">
                                                                        <i className="fa fa-building building" aria-hidden="true"></i>
                                                                        <input type="text" id="zip_from" name="zip_from"
                                                                            maxlength="5" style={{ paddingLeft: "40px" }} className="zipfromsearch form-control input-field" placeholder="Zip From" />

                                                                    </div>
                                                                </div>
                                                                <div className=" d-flex flex-column col-12 p-0 text-left">
                                                                    <label className="fw-bold my-1" for="">Moving to</label>
                                                                    <div className="d-flex align-items-center input-form">
                                                                        <i className="fa fa-building building" aria-hidden="true"></i>
                                                                        <input type="text" id="zip_to" name="zip_to"
                                                                            value="{{ old('zip_to') }}" maxlength="5"
                                                                            style={{ paddingLeft: "40px" }}
                                                                            className=" ziptosearch form-control input-field"
                                                                            placeholder="Zip To" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <input type="button" name="next" className="next calculate-btn"
                                                                value="Next" />

                                                        </fieldset>
                                                        <fieldset className="second_page">
                                                            <h3 className="wp-block-heading mt-2" style={{ margin: 0, textAlign: "left" }}>
                                                                Let's Get You Moved </h3>
                                                            <div className="form-content">
                                                                <div className=" d-flex flex-column col-12 p-0 text-left">
                                                                    <label className="fw-bold my-1" for="">Moving Date</label>
                                                                    <div className="d-flex align-items-center input-form">
                                                                        <i
                                                                            className="fa fa-solid fa-calendar-days building calendar-icon"></i>
                                                                        <input type="date" id="moveDate" name="date" style={{ paddingLeft: "40px" }}
                                                                            data-flatpickr='{"minDate":"today", "dateFormat":"Y-m-d"}'
                                                                            className="form-control flatpickr-input "
                                                                            placeholder="Moving Date" aria-describedby="calendar" />
                                                                    </div>

                                                                </div>
                                                                <div className=" d-flex flex-column col-12 p-0 text-left">
                                                                    <label className="fw-bold my-1" for="">Move Size</label>
                                                                    <div className="d-flex align-items-center input-form">
                                                                        <i className="fa fa-solid fa-box building"></i>
                                                                        <select name="move_size" id="move_size"
                                                                            className="form-select  @error('move_size') is-invalid @enderror">
                                                                            <option selected value="{{ old('move_size') }}">
                                                                                nvcjgh
                                                                            </option>
                                                                            <option value="4 Bedroom Home">4 Bedroom Home</option>
                                                                            <option value="3 Bedroom Home">3 Bedroom Home</option>
                                                                            <option value="2 Bedroom Home">2 Bedroom Home</option>
                                                                            <option value="1 Bedroom Home">1 Bedroom Home</option>
                                                                            <option value="Apartment Move">Apartment Move</option>
                                                                            <option value="Residential Move">Residential Move
                                                                            </option>
                                                                            <option value="Studio Move">Studio Move</option>
                                                                            <option value="Office Move">Office Move</option>
                                                                            <option value="Commercial Move">Commercial Move</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <input type="button" name="previous"
                                                                className="previous action-button-previous" value="Back" />
                                                            <input type="button" name="next" className="next calculate-btn"
                                                                value="Next" />
                                                        </fieldset>
                                                        <fieldset className="second_page">
                                                            <h3 className="wp-block-heading mt-2" style={{ margin: 0, textAlign: "left" }}>
                                                                Let's Get You Moved </h3>
                                                            <div className="form-content">
                                                                <div className="d-flex gap-1">
                                                                    <div className=" d-flex flex-column p-0 text-left w-100">
                                                                        <label className="fw-bold my-1" for="">Name</label>
                                                                        <div className="d-flex align-items-center input-form">
                                                                            <i className="fa fa fa-solid fa-user building"></i>
                                                                            <input type="text" name="name" id="name"
                                                                                style={{ paddingLeft: "40px" }}
                                                                                className="form-control input-field @error('name') is-invalid @enderror"
                                                                                placeholder="Name" aria-describedby="user-name" />
                                                                        </div>
                                                                    </div>
                                                                    <div className=" d-flex flex-column  p-0 text-left w-100">
                                                                        <label className="fw-bold my-1" for="">Email</label>
                                                                        <div className="d-flex align-items-center input-form">
                                                                            <i className="fa fa-solid fa-envelope building"></i>
                                                                            <input type="email" id="email" name="email"
                                                                                style={{ paddingLeft: "40px" }}
                                                                                value="{{ old('email') }}"
                                                                                className="form-control input-field @error('email') is-invalid @enderror"
                                                                                placeholder="Email" aria-describedby="user-email" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className=" d-flex flex-column col-12 p-0 text-left">
                                                                    <label className="fw-bold my-1" for="">Phone Number</label>
                                                                    <div className="d-flex align-items-center input-form">
                                                                        <i className="fa fa-solid fa-phone building"></i>
                                                                        <input type="tel" id="phone_no" name="phone_no"
                                                                            value="{{ old('phone_no') }}"
                                                                            oninput="formatPhoneNumber(this)" maxlength="16"
                                                                            style={{ paddingLeft: "40px" }}
                                                                            className="form-control input-field"
                                                                            placeholder="Phone no" aria-describedby="phone-number" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <input type="button" name="previous"
                                                                className="previous action-button-previous" value="Back" />
                                                            <input type="button" name="next" className="next calculate-btn"
                                                                value="Submit" />
                                                        </fieldset>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 ps-sm-4">
                                            <div className="this_articles ps-0 p-3 space-top">
                                                <h2 className=""> In This Article: </h2>
                                                <ul className="list-unstyled m-0">
                                                    <li><span>1.</span><Link
                                                        to="#{{ str_replace('moving-companies', 'movers', $bestMoverPage->slug) }}"
                                                        className="scroll-link">fsgdfgd</Link>
                                                        <li>
                                                            <li><span>2.</span><Link to="#campare-long-distance"
                                                                className="scroll-link">Compare
                                                                Top sgfdfgh</Link>
                                                                <li>
                                                                    <li><span>3.</span><Link to="#top-recommendations" className="scroll-link">Our
                                                                        Top Recommendations</Link></li>
                                                                    <li><span>4.</span><Link to="#msform" className="scroll-link">Get Estimate</Link>
                                                                        <li>
                                                                            <li><span>5.</span><Link to="#faqs" className="scroll-link">FAQ's</Link>
                                                                                <li>
                                                                                </li>
                                                                            </li>
                                                                        </li>
                                                                    </li>
                                                                </li>
                                                            </li>
                                                        </li>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
