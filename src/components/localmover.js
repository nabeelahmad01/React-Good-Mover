import React from 'react'
import "./localmover.css"
import { Link } from 'react-router-dom';

export default function Localmover() {
    return (
        <>
            <section className="mover_distance_section">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-12">
                            <div className="banner_info ">
                                <div className="heading ">
                                    <h1>Local Movers in USA</h1>
                                    <p>
                                        Moving made easy with our local movers! Our team provides efficient, reliable service to
                                        ensure a stress-free relocation experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="banner_img d-flex justify-content-lg-end justify-content-center">
                                <img src="{{ asset('assets/image/banner_localMover.webp') }}" width="100%" height="100%"
                                    alt="banner_localMover" loading="lazy" />
                            </div>
                        </div>
                        <div className="col-10 m-auto mt-3 d-lg-block d-none ">
                            <div className="row row_modal">
                                <div className="col-12  col-md-3 col-lg-3 my-2 d-flex flex-column justify-content-center">
                                    <h2 className="fs-4 mb-0 multi-step-heading text-start">
                                        Free Instant Quote
                                    </h2>
                                    <small>Fields marked with an * are required</small>
                                </div>
                                <div className="col-12 col-md-3 col-lg-3 ">
                                    <label for="zip_from_home">City you are moving from*</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fa fa-building"></i></span>
                                        <input type="text" name="zip_from" id="zip_from_home" maxlength="5"
                                            className="zipfromsearch form-control " placeholder="City Name or Zip From" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-3 col-lg-3 ">
                                    <label for="zip_to_home">City you are moving to*</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fa fa-building"></i></span>
                                        <input type="text" name="zip_to" maxlength="5"
                                            className=" ziptosearch form-control "
                                            placeholder="City Name or Zip To" id="zip_to_home" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center mt-0">
                                    <label for="zip_to_home" className="discount">Save up to 20% on moving costs</label>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#modalForm">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="type_movers_card" className="">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="local_subheading">Found a hjfjgfhj Local Movers in USA</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-10 mx-auto col-12 distance_upper_content mt-2 text-center">
                            <p>
                                Local moving companies offer moving services, usually between two areas within a 50-mile radius.
                            </p>
                            <p className="mb-2">
                                For intrastate moving in the USA, It is always the best option to hire the best local movers.
                            </p>
                            <p>
                                Moving between areas or from town to town, local movers have it all covered.
                            </p>
                            <p>
                                It doesn’t matter if it is the initial planning stages to your new home, the best local moving
                                companies can assist you at every turn.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-2 d-flex justify-content-center">
                        <div className="col-lg-5 col-12 mb-4">
                            <Link to="{{ route('company.show', $company->slug) }}">
                                <div className="card">
                                    <div className="card-header d-flex align-items-center  flex-sm-nowrap flex-wrap">
                                        <div className="search_company_logo d-flex  m-sm-0">
                                            <img src="https://mygoodmovers.com/companies/logo/safeway-moving-inc.webp" className="rounded" width="100" height="100"
                                                alt="logo" loading="lazy" />
                                        </div>
                                        <div className="search_company_heading ms-sm-4 ms-0 ">
                                            <h3 className="card-title">hkjlhjl</h3>
                                            <ul className="list-unstyled m-0 p-0 d-flex stars">
                                                <li><i className="far fa-star" style={{ fontSize: "1.2rem", color: "#a7a7a7" }}
                                                    aria-hidden="true"></i></li>
                                                <li><i className="far fa-star" style={{ fontSize: "1.2rem", color: "#a7a7a7" }}
                                                    aria-hidden="true"></i></li>
                                                <li><i className="far fa-star" style={{ fontSize: "1.2rem", color: "#a7a7a7" }}
                                                    aria-hidden="true"></i></li>
                                                <li><i className="far fa-star" style={{ fontSize: "1.2rem", color: "#a7a7a7" }}
                                                    aria-hidden="true"></i></li>
                                                <li><i className="far fa-star" style={{ fontSize: "1.2rem", color: "#a7a7a7" }}
                                                    aria-hidden="true"></i></li>
                                                <li><span className="rating_number">4/5</span></li>
                                            </ul>
                                            <span className="total_rating mt-2 d-block">789 Reviews</span>
                                            <div className="verified_img d-flex align-items-center mt-1">
                                                <img src="https://mygoodmovers.com/assets/image/verified.svg" alt="sdfssd"
                                                    width="14px" loading="lazy" />
                                                <span className="fw-semibold ms-1">Verified By MGM</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="card text-center comp-not-fount-txt py-4 my-3">
                            <Link style={{ fontSize: "1.4em" }} to="{{ route('register.company') }}">You want to create
                                account ?</Link>
                        </div>
                    </div>
                    <div className="row mt-3 distance_lower_content">
                        <div className="col-xl-10 mx-auto col-12">
                            <h3>How to Choose the Best Local Moving Company?
                            </h3>
                            <p>
                                Finding the best movers is always a challenging task.
                            </p>
                            <p>
                                But to make your local move relaxing, it is essential to select the best and most efficient local
                                movers that meet your requirements.
                            </p>
                            <p>
                                Here are some factors you should consider before choosing the best local moving company:
                            </p>
                            <ol className="mb-0 list-unstyled">
                                <li>
                                    <div className="listing ">
                                        <span className="listing_heading">Create a budget: </span>
                                        <span className="list_description">
                                            Set a proper budget for your local move.
                                        </span>
                                        <p className="mb-0">
                                            It will allow you to make a strong decision in selecting a moving company.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="listing">
                                        <span className="listing_heading">Experience: </span>
                                        <span className="list_description">
                                            Choose a moving company that has been operating local moves for several years.
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="listing">
                                        <span className="listing_heading">Insurance and license: </span>
                                        <span className="list_description">
                                            Always check the movers you hire are licensed and insured with FMCSA.
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="listing">
                                        <span className="listing_heading">Customer reviews: </span>
                                        <span className="list_description">
                                            If you want to ease your efforts in choosing the best local movers, assess their reviews
                                            and ratings.
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="listing">
                                        <span className="listing_heading">Evaluate Quotes: </span>
                                        <span className="list_description">
                                            Gather quotes from several companies and conduct a thorough comparison of their pricing
                                            structures.
                                        </span>
                                    </div>
                                </li>
                            </ol>
                            <section className="pt-3 offer_service">
                                <div className="row">
                                    <div className="col-12 text-center service_heading">
                                        <h3>Offering Services</h3>

                                    </div>
                                </div>
                                <div className="row" style={{ marginTop: "30px" }}>
                                    <div className="col-lg-4 col-sm-6">
                                        <Link to="{{ route('local.movers') }}">
                                            <div className="services-small-item ">
                                                <span className="services-title">Local Move Experts</span>
                                                <p>We are the best platform to find certified local move experts in your area. We
                                                    connect you
                                                    with
                                                    professionals who know your neighborhood and make your local move smooth. </p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <Link to="{{ route('long.dis.movers') }}">
                                            <div className="services-small-item">
                                                <span className="services-title">Long-Distance Movers</span>
                                                <p>If you are planning to move to another city or state, we are your one-stop shop
                                                    for
                                                    discovering
                                                    the best long-distance moving experts in your area who will make your move a
                                                    breeze. </p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <Link to="{{ route('internationalMovers') }}">
                                            <div className="services-small-item">
                                                <span className="services-title">International Movers</span>
                                                <p>We are your trusted source for finding the best international movers near your
                                                    area. With us,
                                                    you
                                                    can discover top movers who specialize in solving the complexities of overseas
                                                    relocations,
                                                    ensuring a smooth transition. </p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <Link to="{{ route('vehicleTransport') }}">
                                            <div className="services-small-item">
                                                <span className="services-title">Vehicle <br />Transport</span>
                                                <p>Shipping your vehicle is the most hectic task, but we connect you with
                                                    professionals who
                                                    specialize in safely and efficiently transporting your vehicles to your desired
                                                    destination.
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <Link to="{{ route('officeCommercial') }}">
                                            <div className="services-small-item">
                                                <span className="services-title">Office Move Specialists</span>
                                                <p>We are your go-to platform for locating expert moving specialists in your area.
                                                    We help you
                                                    finalize professional movers who understand the unique challenges of relocating
                                                    businesses.
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <Link to="{{ route('MoveAssistance') }}">
                                            <div className="services-small-item">
                                                <span className="services-title">Professional Moving Assistance</span>
                                                <p>If you are looking for professional moving assistance, we provide you with
                                                    transparent
                                                    insights
                                                    from skilled professionals who will make your move a hassle-free experience.</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <Link to="{{ route('selfService') }}">
                                            <div className="services-small-item">
                                                <span className="services-title">Self-Service Movers</span>
                                                <p>Pack by yourself and save your moving expenses. We link you with reliable
                                                    self-service movers
                                                    in
                                                    your area who provide the flexibility and control you desire for your move.</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <Link to="{{ route('storageFacilites') }}">
                                            <div className="services-small-item">
                                                <span className="services-title">Storage Facilities</span>
                                                <p>Keep your valuable assets safe and secure with proper storage facilities. We
                                                    connect you with
                                                    the
                                                    most reputable storage providers in your area, ensuring your belongings are safe
                                                    and
                                                    accessible
                                                    whenever you need them. </p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <Link to="{{ route('smallMoves') }}">
                                            <div className="services-small-item">
                                                <span className="services-title">Small Moves</span>
                                                <p>If you are considering moving to the next door or a new space nearby. We are your
                                                    reliable
                                                    source
                                                    for finding the right professionals in your area. They specialize in handling
                                                    smaller
                                                    relocations with ease. </p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <Link to="{{ route('moveExpert') }}">
                                            <div className="services-small-item">
                                                <span className="services-title">Special Move Experts</span>
                                                <p>Moving special items is a daunting endeavor. That’s why we help you find the best
                                                    special
                                                    move
                                                    experts who excel in handling special items like musical instruments and antique
                                                    pieces. .
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <Link to="{{ route('truckRentals') }}">
                                            <div className="services-small-item">
                                                <span className="services-title">Truck Rentals</span>
                                                <p>Performing a DIY move and renting a moving truck is an essential aspect. We
                                                    provide a wide
                                                    range
                                                    of trusted truck rental providers in your area to fulfill your moving needs and
                                                    demands.
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <Link to="{{ route('movingSupplies') }}">
                                            <div className="services-small-item">
                                                <span className="services-title">Moving Supplies</span>
                                                <p>My Good Movers is your go-to option to make your relocation easier and
                                                    stress-free. We
                                                    connect
                                                    you with reputable moving suppliers in your area, providing high-end boxes and
                                                    packing
                                                    materials. </p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                            <h3>Average Local Movers Cost</h3>
                            <p>
                                The cost of hiring local movers depends on several variables, such as the distance of the move, the
                                size, and the services required.
                            </p>
                            <p>
                                On average, the local movers charge around an average of $20 and $45 per hour per mover.
                            </p>
                            <p>
                                A 2-bedroom apartment move within a 50-mile radius costs around $300 to $600.
                            </p>
                            <p>
                                This average cost is derived from customer reviews available on My Good Movers and can vary from the
                                actual cost provided by the company directly.
                            </p>
                            <p>
                                That’s why it is recommended to obtain multiple quotes from different local moving companies to get
                                an accurate estimate.
                            </p>
                            <h3>Factors Affecting Average Local Moving Cost
                            </h3>
                            <p>
                                Remember to take these variables into account before making any final decision.
                            </p>
                            <ol className="mb-0 ">
                                <li>
                                    <div className="listing ">
                                        <span className="listing_heading">Distance: </span>
                                        <span className="list_description">
                                            Local movers often take less time, but by increasing distance, the cost will also
                                            increase.
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="listing">
                                        <span className="listing_heading">Weight: </span>
                                        <span className="list_description">
                                            The movers calculate the cost based on the items being moved. Heavier items take time to
                                            pack and ship and thus can affect cost too.
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="listing">
                                        <span className="listing_heading">Additional Services: </span>
                                        <span className="list_description">
                                            If you need extra services like furniture disassembly, unpacking, or packing, the movers
                                            will charge extra.
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="listing">
                                        <span className="listing_heading">Storage Facility: </span>
                                        <span className="list_description">
                                            Sometimes, you may need a storage facility to accommodate extra items. So, renting
                                            storage facilities can increase your total cost.
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="listing">
                                        <span className="listing_heading">Season: </span>
                                        <span className="list_description">
                                            Planning your move in peak season will cost more than the off-season.
                                        </span>
                                    </div>
                                </li>
                            </ol>
                            <h3>Benefits of Hiring Local Movers</h3>
                            <p>
                                Hiring professional local movers can be a costly choice sometimes, but the benefits are well worth
                                the expense.
                            </p>
                            <ol className="mb-0 ">
                                <li>
                                    <div className="listing ">
                                        <span className="listing_heading">Customized services: </span>
                                        <span className="list_description">
                                            Local Movers provide diverse moving services customized to your needs.
                                        </span>
                                        <p>
                                            They not only gives you peace of mind but also makes your move smooth.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="listing">
                                        <span className="listing_heading">Time-saving: </span>
                                        <span className="list_description">
                                            Professional local movers have extensive knowledge of the area.
                                        </span>
                                        <p>
                                            They choose the best routes and materials to save you time and effort.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="listing">
                                        <span className="listing_heading">Cost-efficiency: </span>
                                        <span className="list_description">
                                            While there is a cost associated with hiring movers, their efficiency can save you money
                                            in the long run by avoiding potential damage.
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="listing">
                                        <span className="listing_heading">Safety and Insurance: </span>
                                        <span className="list_description">
                                            Reputable local movers often cover your possessions.
                                        </span>
                                        <p>
                                            They offer insurance in case of unforeseen accidents or mishaps during the move.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="listing">
                                        <span className="listing_heading">Professional Employees: </span>
                                        <span className="list_description">
                                            Local Moving companies operate in a well-organized and systematic manner.
                                        </span>
                                        <p>
                                            They are fully equipped with tools that make relocation easy.
                                        </p>
                                        <p>
                                            So, you don’t have to even raise a finger.
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
