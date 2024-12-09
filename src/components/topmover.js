import React from 'react'
import "./topmover.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Topmover() {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <>
            <section className="pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto col-12">
                            <p className="mb-1"><strong className="text-decoration-underline">Last Updated:</strong> 04/04/2024</p>
                            <h1>Top Movers Rating, Reviews, Pricing and More 2024</h1>
                            <nav aria-label="breadcrumb" className="mb-3">
                                <ol className="breadcrumb m-0">
                                    <li className="breadcrumb-item">< Link to="#">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Top Mover Page</li>
                                </ol>
                            </nav>
                            <p>
                                Have you ever tried finding a good moving company and felt lost in a sea of options?
                            </p>
                            <p>
                                You may become confused about which company to choose.
                            </p>
                            <p>
                                Well, fear not! My Good Mover has got your back with its latest release: "Top Movers Rating,
                                Reviews, Pricing, and More 2024."
                            </p>
                            <div className={`more_content ${isExpanded ? 'show' : ''}`} >
                                <p>
                                    This has made the search for exceptional moving companies remarkably simplified.
                                    These movers are finalized after proper analysis and consultation.
                                </p>
                                <p>
                                    We carefully evaluate movers listed on our platform every six months.
                                    We dig deep into their performance, reviews, ratings, and other factors and give them a moving
                                    score.
                                </p>
                                <p>
                                    And guess what?
                                </p>
                                <p>
                                    After this, we put together a list of the cream movers at the top.
                                </p>
                                <p>
                                    This assessment allows users to identify reputable moving service providers in one place.
                                </p>
                                <p>
                                    If you are looking for movers with consistent excellence or companies that have seriously upped
                                    their game, we have made your hassle a breeze.
                                </p>
                                <p>
                                    It is like having your own personal moving consultant, which helps you make smart decisions.
                                </p>
                            </div>
                            <div id="topReadMore" onClick={toggleContent}>
                                <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`} id="arrowIcon"></i>
                                <span className="readText">{isExpanded ? 'Read Less' : 'Read More'}</span>
                            </div>
                        </div>
                        <div className="col-10 m-auto mt-3 d-lg-block d-none ">
                            <div className="row row_modal-1">
                                <div className="col-12  col-md-3 col-lg-3 my-2 d-flex flex-column justify-content-center">
                                    <h3 className="fs-4 mb-0 multi-step-heading text-start">
                                        Free Instant Quote
                                    </h3>
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
                                            className=" ziptosearch form-control"
                                            placeholder="City Name or Zip To" id="zip_to_home" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center mt-0">
                                    <label for="zip_to_home" className="discount">Save up to 20% on moving costs</label>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#modalForm">Next</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 mx-auto col-12">
                            <hr />
                            <div className="row ">
                                <div className="col-md-8 col-12 mx-auto text-center">
                                    <h3 className="fs-4"><img src="http://localhost:8000/assets/image/guard_batch.webp"
                                        className="trust_guard_img me-1" alt="guard_batch" />Why Trust My Good Movers </h3>
                                    <p className="m-0">
                                        At My Good Movers, we prioritize impartiality in our ratings. We follow strict rules for how
                                        we decide on ratings. We offer full disclosure of our methodology to ensure transparency and
                                        fairness in our evaluations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="company_cards">
                <div className="container">

                    <div className="row">
                        <div className="col-xl-9 col-12 mx-auto">
                            <hr />
                            <div className="row">
                                <div className="col-12 text-center mb-5">
                                    <h2 className="fs-2">Top Rated Moving Companies</h2>
                                    <p className="fw-semibold top_rated_company_description">
                                        After conducting a thorough analysis, we chose our top-rated movers by comparing pricing,
                                        services, reputations, reviews and other major benefits. These moving companies help you
                                        find the services you need at a price you can afford
                                    </p>
                                </div>
                                <div className="col-lg-6 col-12 mb-4">
                                    < Link to="{{ route('company.show', $topMoverCompany->company->slug) }}">
                                        <div className="card  position-relative">
                                            <div className="card-body p-0">
                                                <div className="row d-flex align-items-center">
                                                    <div className="col-sm-3 col-12 d-flex justify-content-center mb-sm-0 mb-3">
                                                        <div className="company_card_logo">
                                                            <img src="https://mygoodmovers.com/companies/logo/safeway-moving-inc.webp"
                                                                className="img-fluid"
                                                                alt="top-logo" loading="lazy" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-9 col-12">
                                                        <div
                                                            className="company_info position-relative ps-2 text-sm-start text-center">
                                                            <h4 className="mb-0 text-dark">
                                                                jnljnkl </h4>
                                                            <p className="m-0">
                                                                <i className="far fa-star"
                                                                    style={{ fontSize: "1.2rem", color: "#a7a7a7" }}
                                                                    aria-hidden="true"></i>
                                                                <i className="far fa-star"
                                                                    style={{ fontSize: "1.2rem", color: "#a7a7a7" }}
                                                                    aria-hidden="true"></i>
                                                                <i className="far fa-star"
                                                                    style={{ fontSize: "1.2rem", color: "#a7a7a7" }}
                                                                    aria-hidden="true"></i>
                                                                <i className="far fa-star"
                                                                    style={{ fontSize: "1.2rem", color: "#a7a7a7" }}
                                                                    aria-hidden="true"></i>
                                                                <i className="far fa-star"
                                                                    style={{ fontSize: "1.2rem", color: "#a7a7a7" }}
                                                                    aria-hidden="true"></i>
                                                                <span
                                                                    className="fw-bold text-dark">5/5</span>
                                                            </p>
                                                            <span className="total_reviews mt-1 d-block">hjkljhl
                                                                Reviews</span>
                                                            <div className="verify_img ">
                                                                <img src="https://mygoodmovers.com/assets/image/verified.svg"
                                                                    alt="verified" width="16" loading="lazy" />
                                                                <span className="fw-semibold">Verified By MGM</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto col-12">
                            <div className="find_top_movers px-4 py-5 ">
                                <h2 className="fs-2">Process of Finding Out the Top Movers
                                </h2>
                                <p>
                                    Here's a breakdown of how we determine the top movers for you.
                                </p>
                                <ul className="list-unstyled process">
                                    <li>
                                        <strong className="mb-1 fs-5">Data Collection:</strong>
                                        We begin with collecting data of movers found in our listings.<p>This includes information
                                            on each mover's performance metrics, customer reviews, ratings, pricing structures, and
                                            other relevant factors.
                                        </p>

                                    </li>
                                    <li>
                                        <strong className="mb-1 fs-5">Analysis:</strong>
                                        After the information is accumulated, we dissect how well each mover has acted over the
                                        previous six months.<p>Our assessment covers customer satisfaction, service quality and
                                            consistency with the requirement of being on time from the very beginning until reaching
                                            its destination.
                                        </p>
                                    </li>
                                    <li>
                                        <strong className="mb-1 fs-5">Comparison:</strong>
                                        We compare the performance of each and every mover based on the data that we have just
                                        collected & analyzed.<p>We look for trends and patterns, as well as outliers to determine
                                            players that have either have consistently performed at a high level or shown
                                            significant improvement.

                                        </p>
                                    </li>
                                    <li>
                                        <strong className="mb-1 fs-5">Rating and Ranking:</strong>
                                        We assign ratings to each mover and rank them according to this analysis.<p>Top-performing
                                            movers are identified by their highest ratings and best reviews.


                                        </p>
                                    </li>
                                    <li>
                                        <strong className="mb-1 fs-5">Compilation of Top Movers List:</strong>
                                        Lastly, we put together a list of the top movers, to be shown as best performing companies
                                        for each user..
                                    </li>

                                </ul>
                                <p>This list acts as a valuable resource for people looking for reliable and
                                    reputable moving services.
                                </p>
                                <p>
                                    It allows them to make informed decisions confidently.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="quote_section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto col-12">
                            <div className="company_quote">
                                <p className="m-0">
                                    If you want to be in the list of the “Top movers”. All you need to do is become a part of My
                                    Good Movers and < Link to="https://mygoodmovers.com/add-listing"
                                        className="fw-bold text-decoration-underline">claim your business</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="company_description py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto col-12">
                            <h3 className="fs-2">Purpose of My Good Movers</h3>
                            <p>
                                My Good Movers is not your average moving directory; it's your ultimate relocation companion.
                            </p>
                            <p>
                                So, what is It?
                            </p>
                            <p>
                                Just picture this: you are getting ready for a move, and you cannot find a moving company that meets
                                your requirements. The last thing you want is to end up with a sketchy moving company.
                            </p>
                            <p>
                                To eliminate all your moving worries, click on < Link to="https://mygoodmovers.com/"
                                    className="fw-bold text-decoration-underline">My Good Movers</Link>.
                            </p>
                            <p>
                                Our primary purpose is to smoothen the search for top-rated moving companies.
                            </p>
                            <p>
                                It provides users essential information such as reviews, ratings, pricing, and service offerings.
                            </p>
                            <p>
                                Whether you are in need of movers in your city, state, or along a particular route, MGM is your all
                                in one destination.
                            </p>
                            <h3 className="fs-2">Become a Certified Mover and Broker
                            </h3>
                            <p>
                                Gaining certification from My Good Movers doesn't just earn you a shiny new title, its your
                                professional edge.
                            </p>
                            <p>
                                When you become an MGM certified mover it's a testament to your rising recognition as a valuable
                                business professional in the moving industry.
                            </p>
                            <p>
                                Certified movers have many repeat clients, as they are trusted in providing the most professional
                                and reliable service.
                            </p>
                            <p>
                                < Link to="/"
                                    className="fw-bold text-decoration-underline">Become a certified mover</Link> on My Good Movers today.
                            </p>
                            <p>
                                As you are now aware, the competitive moving industry is indeed a tough place and being a certified
                                broker on My Good Movers is your only way of getting ahead.
                            </p>
                            <p>
                                As a certified agent, your reputation and credibility increase and these in turn give you the edge
                                over others.
                            </p>
                            <p>
                                My Good Movers' Certified brokers get the proper visibility, they would receive high priority over
                                promotions and more exposure to potential clients.
                            </p>
                            <p>
                                Don't wait any longer; seize the opportunity now and < Link
                                    to="{{ asset('assets/image/MGM-Trusted-Brokers-Badge.webp') }}"
                                    className="fw-bold text-decoration-underline">become a certified broker</Link> on My Good Movers!
                            </p>
                            <div className="d-flex justify-content-center">
                                <img src="http://localhost:8000/assets/image/MGM-Trusted-Movers-Badge.webp" alt="tursted_mover"
                                    className="img-fluid" />
                                <img src="http://localhost:8000/assets/image/MGM-Trusted-Brokers-Badge.webp" alt="broker_certified_logo"
                                    className="img-fluid" />
                            </div>
                            <h3 className="fs-2">Advertising Plans</h3>
                            <p>
                                You know, promoting your company on My Good Movers has become smoother and more impactful than ever
                                before.
                            </p>
                            <p>
                                Now, you can showcase your company on various pages of our website, such as city pages, state pages,
                                routes pages, and even your competitor’s profile.
                            </p>
                            <p>
                                We offer simple and efficient advertising plans designed to help you attract more customers to your
                                business.
                            </p>
                            <p>
                                Don't miss out and < Link to="https://mygoodmovers.com/advertising"
                                    className="fw-bold text-decoration-underline">advertise with My Good Movers</Link> today.
                            </p>
                            <h3 className="fs-2">Moving Services</h3>
                            <p>
                                Several moving companies offer dozens of moving services, and it can be overwhelming to find movers
                                who are only related to your moving requirements.
                            </p>
                            <p>
                                That's why we have categorized movers based on every moving service.
                            </p>
                            <p>
                                It doesn’t matter, if you are in need of residential moving, commercial relocation, specialized
                                services, or even international moving assistance, you will find movers offering every imaginable
                                service here.
                            </p>
                        </div>
                        <div className="col-xl-9 mx-auto col-12 mb-3">
                            <div className="accordion" id="companyAccordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            <h4 className="fs-5">Find movers offering every Imaginable service:</h4>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse "
                                        data-bs-parent="#companyAccordion">
                                        <div className="accordion-body">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-6 mb-3">
                                                    < Link to="https://mygoodmovers.com/local-movers">Local Move Experts</Link>
                                                </div>
                                                <div className="col-lg-4 col-sm-6 mb-3">
                                                    < Link to="https://mygoodmovers.com/long-distance-movers">Long-Distance
                                                        Movers</Link>
                                                </div>
                                                <div className="col-lg-4 col-sm-6 mb-3">
                                                    < Link to="https://mygoodmovers.com/international-movers">International
                                                        Movers</Link>
                                                </div>
                                                <div className="col-lg-4 col-sm-6 mb-3">
                                                    < Link to="https://mygoodmovers.com/vehicle-transport">Vehicle Transport
                                                        Movers</Link>
                                                </div>
                                                <div className="col-lg-4 col-sm-6 mb-3">
                                                    < Link to="https://mygoodmovers.com/office-moving">Office Move Specialists</Link>
                                                </div>
                                                <div className="col-lg-4 col-sm-6 mb-3">
                                                    < Link to="https://mygoodmovers.com/professional-moving-assistance">Professional
                                                        Moving Assistance</Link>
                                                </div>
                                                <div className="col-lg-4 col-sm-6 mb-3">
                                                    < Link to="https://mygoodmovers.com/self-service-movers">Self-Service Movers</Link>
                                                </div>
                                                <div className="col-lg-4 col-sm-6 mb-3">
                                                    < Link to="https://mygoodmovers.com/storage-facilities">Storage Facilities</Link>
                                                </div>
                                                <div className="col-lg-4 col-sm-6 mb-3">
                                                    < Link to="https://mygoodmovers.com/small-movers">Small Moves</Link>
                                                </div>
                                                <div className="col-lg-4 col-sm-6 mb-3">
                                                    < Link to="https://mygoodmovers.com/special-move-experts">Special Move
                                                        Experts</Link>
                                                </div>
                                                <div className="col-lg-4 col-sm-6 mb-3">
                                                    < Link to="https://mygoodmovers.com/truck-rentals">Truck Rentals</Link>
                                                </div>
                                                <div className="col-lg-4 col-sm-6 mb-3">
                                                    < Link to="https://mygoodmovers.com/moving-supplies">Moving Supplies</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 mx-auto col-12 mt-3">
                            <h3>Locate Movers in Your State, City, and Designated Routes
                            </h3>
                            <p>
                                Finding the right movers for your relocation just got easier.
                            </p>
                            <p>
                                We allow you to effortlessly locate movers in your state, city, and designated routes.
                            </p>
                            <p>
                                It gives you access to diverse moving services according to your needs.
                            </p>
                            <p>
                                With our user-friendly interface, you can quickly find movers in your area or route.
                            </p>
                            <p>
                                It makes the moving process smoother and more convenient than ever before.
                            </p>
                            <p>
                                Don't waste time searching endlessly and find the perfect moving company here.
                            </p>
                            <ul className="state_list">
                                <li>< Link to="{{ route('moversPage') }}">Movers by State</Link></li>
                                <li>< Link to="{{ route('cityMoversPage') }}">Movers by City</Link></li>
                                <li>< Link to="{{ route('route.page') }}">Movers by Route</Link></li>
                            </ul>
                            <h3 className="fs-2">My Good Movers Blogs: A Moving Guide and Tips Hub
                            </h3>
                            <p>
                                Blogs are the most reliable option to get information and ideas on certain topics.
                            </p>
                            <p>
                                Our blog section is your go-to guide and tips hub for all moving-related queries.
                            </p>
                            <p>
                                From packing hacks to moving strategies, we have covered with expert advice and insights to make
                                your move as smooth as possible.
                            </p>
                            <p className="mb-1">
                                Doesn’t matter if you are a first-time mover or a seasoned pro, you can explore < Link
                                    to="https://mygoodmovers.com/blogs" className="fw-bold text-decoration-underline">our blogs</Link>
                                and
                                empower yourself with the knowledge you need for a successful relocation!
                            </p>
                            <h3 className="fs-2">Resource Pages: Get the Best Moving Companies for Every Move Type
                            </h3>
                            <p>
                                People always struggle to find reliable movers for their upcoming relocations that are related to
                                their move type.
                            </p>
                            <p>
                                In our Resource Pages, you will find a curated selection of the best moving companies that are
                                designed to suit every type of move.
                            </p>
                            <p>
                                So, if you are moving locally or internationally or need specialized services, our Resource Pages
                                provide the answer to your moving worries.
                            </p>
                        </div>
                        <div className="col-xl-9 mx-auto col-12">
                            <div className="accordion" id="companyAccordion2">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <h4 className="fs-5">You can find all the best movers in the USA, such as:
                                            </h4>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse "
                                        data-bs-parent="#companyAccordion2">
                                        <div className="accordion-body">
                                            <div className="row">
                                                <div className="col-md-6 col-12 mb-3">
                                                    < Link to="https://mygoodmovers.com/best-moving-companies-in-usa">Best Moving
                                                        Companies</Link>
                                                </div>
                                                <div className="col-md-6 col-12 mb-3">
                                                    < Link
                                                        to="{{ route('best.mover.page', $bestMoverPage->slug) }}">kljopjk</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 mx-auto col-12">
                            <h4 className="fs-2 my-4">Frequently Asked Questions</h4>
                            <div className="accordion" id="faqAccordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faqOne" aria-expanded="false" aria-controls="faqOne">
                                            <h5>What factors should I consider when choosing a moving company?</h5>
                                        </button>
                                    </h2>
                                    <div id="faqOne" className="accordion-collapse collapse " data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p className="m-0">
                                                When choosing a moving company, it is integral to consider variables such as
                                                reputation, licensing and insurance, experience,
                                                services offered, pricing transparency, and customer reviews.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faqTwo" aria-expanded="false" aria-controls="faqTwo">
                                            <h5>How far in advance should I book a moving company?</h5>
                                        </button>
                                    </h2>
                                    <div id="faqTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p className="m-0">It's recommended to book a moving company as soon as you know your
                                                moving date, especially during peak moving seasons. Aim
                                                to secure a mover at least 4-8 weeks in advance.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faqThree" aria-expanded="false" aria-controls="faqThree">
                                            <h5>What type of insurance coverage do moving companies provide?</h5>
                                        </button>
                                    </h2>
                                    <div id="faqThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p className="m-0">
                                                Most moving companies offer basic liability coverage, which typically covers a
                                                portion of the value of your belongings based on
                                                their weight.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faqFour" aria-expanded="false" aria-controls="faqFour">
                                            <h5>Do moving companies provide packing services?</h5>
                                        </button>
                                    </h2>
                                    <div id="faqFour" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p className="m-0">
                                                Many moving companies offer packing services as part of their offerings. These
                                                services can range from full packing to partial
                                                packing or specialized packing for fragile items.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#faqFive" aria-expanded="false" aria-controls="faqFive">
                                            <h5>How can I prepare for the arrival of the moving crew?</h5>
                                        </button>
                                    </h2>
                                    <div id="faqFive" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body">
                                            <p className="m-0">
                                                To prepare for the moving crew's arrival, ensure that all belongings are properly
                                                packed and labeled. Clear pathways for easy access
                                                to your items, and communicate specific instructions to the movers in advance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
