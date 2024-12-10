import React from 'react'
import './homepage.css';
import { Link } from 'react-router-dom';
import Blogshow from './blogshow';

export default function Homepage({ blogs, popularBlogs, moverinState }) {
    return (
        <>
            <section className="py-3">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-5 col-12">
                            <div className="banner_info text-center">
                                <div className="heading">
                                    <h1>Choose the Best Movers In Your Area</h1>
                                    <p>Need a hand with your move? We connect you with reliable movers across the USA, making it
                                        easy to find the perfect fit for your unique needs. Just search, compare, and choose the
                                        movers who’ll make your move a breeze!</p>
                                    <section id="company_logo">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12 d-flex justify-content-start flex-wrap">
                                                    <img src="https://mygoodmovers.com/assets/image/companyLogo.webp"
                                                        alt="b-c-forbes-business-grey-logo-17" loading="lazy" />
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="col-10 m-auto mt-3 d-lg-block d-none px-5">
                                <div className="row row_modal">
                                    <div className="col-12  my-2 justify-content-center">
                                        <h2 className="fs-4 mb-0 multi-step-heading text-start">Free Instant Quote</h2>
                                        <small>Fields marked with an * are required</small>
                                    </div>
                                    <div className="col-12">
                                        <label for="zip_from_home">City you are moving from*</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fa fa-building"></i></span>
                                            <input type="text" name="zip_from" id="zip_from_home" maxlength="5"
                                                className="zipfromsearch form-control " placeholder="City Name or Zip From" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label for="zip_to_home">City you are moving to*</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fa fa-building"></i></span>
                                            <input type="text" name="zip_to" maxlength="5"
                                                className="ziptosearch form-control"
                                                placeholder="City Name or Zip To" id="zip_to_home" />
                                        </div>
                                    </div>
                                    <div className="col-12 justify-content-center mt-2">
                                        <label for="zip_to_home" className="discount">Save up to 20% on moving costs</label><br />
                                        <button type="button" data-bs-toggle="modal" data-bs-target="#modalForm">Free
                                            Estimate</button>
                                        <p className="mb-0 secure"><img src="https://mygoodmovers.com/assets/image/unlock.svg" width="14px"
                                            className="mb-1 me-1" />Your information
                                            is 100% Secure</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className=" movers_review mt-4">
                <div className="container">
                    <div className="row review_cards">
                        <div className="col-lg-9 col-12">
                            <div className="heading mb-3 text-sm-start text-center">
                                <h2> Here The Latest Movers Reviews</h2>
                            </div>
                            <div className="row">
                                <div className="col-12 col-lg-12 mb-2 latest_movers_cards">
                                    {blogs.slice(0, 4).reverse().map((blog) => (
                                        <Link to={`/Blogshow/${blog.story}`} className='text-decoration-none' key={blog.id}>
                                            <div key={blog.id} className="card  mb-3" >
                                                <div className="card-header">
                                                    <div className="row">
                                                        <div className="col-md-12 col-12 header_part">
                                                            <div className="row">
                                                                <div
                                                                    className="col-sm-3 col-12 d-flex align-items-center justify-content-center">
                                                                    <div className="header_logo d-flex justify-content-center">
                                                                        <img src={blog.companylogo}
                                                                            alt={blog.title} loading="lazy" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-9 col-12 ">
                                                                    <div className="header_info mb-0">
                                                                        <h3 className="card-title mt-2">{blog.companyname}
                                                                            <img src="https://mygoodmovers.com/assets/image/verified.svg"
                                                                                alt="verified" width="20" loading="lazy" />
                                                                        </h3>
                                                                        <span className="totol_reviews">{blog.review}
                                                                            Reviews</span>
                                                                        <ul className="list-unstyled d-flex ">
                                                                            <li><i className="far fa-star" aria-hidden="true"></i>
                                                                            </li>
                                                                            <li><i className="far fa-star" aria-hidden="true"></i>
                                                                            </li>
                                                                            <li><i className="far fa-star" aria-hidden="true"></i>
                                                                            </li>
                                                                            <li><i className="far fa-star" aria-hidden="true"></i>
                                                                            </li>
                                                                            <li><i className="far fa-star" aria-hidden="true"></i>
                                                                            </li>
                                                                            <li><span>4/5</span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="row g-0">
                                                                        <div className="col-12">
                                                                            <div className="card-body">
                                                                                <div className="row">
                                                                                    <div className="col-md-12 col-12 mt-2">
                                                                                        <div
                                                                                            className="user_title mb-1 d-flex align-items-center">
                                                                                            <i
                                                                                                className="fa-solid fa-circle-user me-2"></i>
                                                                                            <h4 className='mt-0'>{blog.author}</h4>
                                                                                        </div>
                                                                                        <p className="description mb-0">
                                                                                            {blog.description}
                                                                                            <span
                                                                                                className="fw-bold text-dark">warwetrttsw</span>
                                                                                        </p>
                                                                                    </div>
                                                                                    <div
                                                                                        className="col-md-3 d-md-block d-none mb-1 col-12">
                                                                                        <div className="quotation_img">
                                                                                            <img src="https://mygoodmovers.com/assets/image/quotation.png"
                                                                                                width="100" height="70"
                                                                                                alt="quotation" loading="lazy" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-12 ">
                                                                                        <div
                                                                                            className="row d-flex align-items-center mt-1">
                                                                                            <div className="col-sm-5 col-12">
                                                                                                <div
                                                                                                    className="move_cost d-flex align-items-center">
                                                                                                    <span>
                                                                                                        Move Cost:{blog.cost}
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="col-sm-7 col-12 d-flex justify-content-sm-end">
                                                                                                <div className="review_refrence">
                                                                                                    <span
                                                                                                        className="company_based">company
                                                                                                        based in {blog.state}</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 px-3">
                            <aside>
                                <div className="aside_searchbar">
                                    <Link to="tel:(239) 799-6077" data-bs-toggle="modal">

                                        <div className="row mt-4" id="contact">
                                            <div className="col-12 company_number py-2"
                                                style={{ borderRadius: "7px", boxShadow: "1px 1px 13px #1e75bbb0" }}>
                                                <span className="company_number_title">Call Us for a Free Estimate</span>
                                                <div
                                                    className="d-flex justify-content-lg-start justify-content-center  my-2 align-items-center">
                                                    <i className="fs-4 fa-solid fa-phone me-2" style={{ color: "rgb(30 117 187)" }}></i>
                                                    <span className="fs-4" style={{ color: "rgb(30 117 187)", fontWeight: 900 }}>(239)
                                                        799-6077</span>
                                                </div>
                                                <span className="fw-semibold text-danger">Available 24/7</span>
                                            </div>
                                        </div>
                                    </Link>

                                    <h3 className="mt-3">Find the Best Movers</h3>
                                    <form action="{{ route('company.company-search') }}" method="get">
                                        <div className="input-group mt-3">
                                            <input type="search" className="form-control companySearch" name="search" placeholder="Search Your Mover" />
                                            <span className="input-group-text">
                                                <button type="submit" aria-label="search button"><i
                                                    className="fa-solid fa-magnifying-glass"></i></button>
                                            </span>
                                        </div>
                                    </form>
                                    <div className="country_movers mt-4">
                                        <h3>Top 5 States By Movers</h3>
                                        <ul className="list-unstyled">
                                            <li><Link to="https://mygoodmovers.com/state/florida">Movers in Florida</Link></li>
                                            <li><Link to="https://mygoodmovers.com/state/california">Movers in California</Link></li>
                                            <li><Link to="https://mygoodmovers.com/state/new-york">Movers in New York</Link></li>
                                            <li><Link to="https://mygoodmovers.com/state/new-jersey">Movers in New Jersey</Link></li>
                                            <li><Link to="https://mygoodmovers.com/state/illinois">Movers in Illinois</Link></li>
                                            <h3 className="mt-3">Top 5 Cities By Movers</h3>
                                            <ul className="list-unstyled">
                                                <li><Link to="https://mygoodmovers.com/city/miami">Movers in Miami, FL</Link></li>
                                                <li><Link to="https://mygoodmovers.com/city/los-angeles">Movers in Los Angeles,
                                                    CA</Link>
                                                </li>
                                                <li><Link to="https://mygoodmovers.com/city/chicago">Movers in Chicago, IL</Link></li>
                                                <li><Link to="https://mygoodmovers.com/city/san-diego">Movers in San Diego,C AL</Link>
                                                </li>
                                                <li><Link to="https://mygoodmovers.com/city/new-york">Movers in New York, NY</Link>
                                                </li>
                                            </ul>
                                        </ul>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-12">
                                        <h4 className="side_blog_heading"
                                            style={{ fontFamily: 'Albert Sans', fontWeight: 600, fontSize: "22px" }}>Moving Blogs
                                        </h4>
                                    </div>
                                    <div className="col-12 mt-0">
                                        <div className="blog_side_recent_posts">
                                            {popularBlogs.slice(0, 4).reverse().map((popular) => (
                                                <Link to={`/blogshow/${popular.slug}`}>
                                                    <div className="card border-0 bg-transparent">
                                                        <div className="row">
                                                            <div className="col-sm-12 col-12 mb-sm-0 mb-3">
                                                                <div className="card-img ">
                                                                    <img src={popular.image} className="img-fluid"
                                                                        alt={popular.title} />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-12">
                                                                <div className="card-body p-0">
                                                                    <h4 className="card-title text-dark mt-1">{popular.title}
                                                                    </h4>
                                                                    <p className="m-0 mt-1">
                                                                        {popular.body}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why_use_section">
                <div className="container mt-3 mb-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-7 col-12">
                            <div className="why_use_info">
                                <h3>Moving Reviews and Ratings</h3>
                                <p>Transparent moving reviews and ratings play a crucial role in helping people make an informed
                                    decision who are seeking the best movers in their area. My Good Movers has established as a
                                    trustworthy platform dedicated to offering transparent and unbiased comprehensive reviews and
                                    ratings.</p>
                                <p>When it comes to making move easier, selecting the right moving company can make a huge
                                    difference. We understand all the moving hassle and ensure every consumer have access to the
                                    genuine feedback shared by others. You can also share the review of a moving company that you
                                    have used on our platform and read what others think of that moving company. Our moving reviews
                                    are your reliable source to make your relocation experience smoother and easier.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12">
                            <div className="why_img">
                                <img src="https://mygoodmovers.com/assets/image/Moving-Reviews-&-Rating.webp" alt="Moving-Reviews-&-Rating"
                                    loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-4">
                <div className="container">
                    <div className="row  top_states_cards d-flex justify-content-center">
                        <div className="col-12 text-center mb-4">
                            <h2 className="top_states_heading">Find the Best Moving Companies By Top States</h2>
                        </div>

                        {moverinState.map((statemovers) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-6 mt-4">
                                <Link to={`${statemovers.statename}`} className="text-black">
                                    <div className="top_moving_states_card ">
                                        <h3><strong className="strong">{statemovers.moversnumber}</strong>
                                            Movers in <br />{statemovers.statename}</h3>
                                    </div>
                                </Link>

                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5"><Link to="https://mygoodmovers.com/movers" className="more_location">SEE MORE
                        LOCATIONS</Link></div>
                </div>
            </section>


            <section className="py-4 mt-3 mb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center service_heading">
                            <h3>Find Movers in One Roof</h3>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "30px" }}>
                        <div className="col-lg-3 col-sm-6">
                            <Link to="{{ route('local.movers') }}">
                                <div className="services-small-item ">
                                    <span className="services-title">Local Move Experts</span>
                                    <p>We are the best platform to find certified local move experts in your area. We connect you
                                        with
                                        professionals who know your neighborhood and make your local move smooth. </p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Link to="{{ route('long.dis.movers') }}">
                                <div className="services-small-item">
                                    <span className="services-title">Long-Distance Movers</span>
                                    <p>If you are planning to move to another city or state, we are your one-stop shop for
                                        discovering
                                        the best long-distance moving experts in your area who will make your move a breeze. </p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Link to="{{ route('internationalMovers') }}">
                                <div className="services-small-item">
                                    <span className="services-title">International Movers</span>
                                    <p>We are your trusted source for finding the best international movers near your area. With us,
                                        you
                                        can discover top movers who specialize in solving the complexities of overseas relocations,
                                        ensuring a smooth transition. </p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Link to="{{ route('vehicleTransport') }}">
                                <div className="services-small-item">
                                    <span className="services-title">Vehicle <br />Transport</span>
                                    <p>Shipping your vehicle is the most hectic task, but we connect you with professionals who
                                        specialize in safely and efficiently transporting your vehicles to your desired destination.
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <Link to="{{ route('officeCommercial') }}">
                                <div className="services-small-item">
                                    <span className="services-title">Office Move Specialists</span>
                                    <p>We are your go-to platform for locating expert moving specialists in your area. We help you
                                        finalize professional movers who understand the unique challenges of relocating businesses.
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Link to="{{ route('MoveAssistance') }}">
                                <div className="services-small-item">
                                    <span className="services-title">Professional Moving Assistance</span>
                                    <p>If you are looking for professional moving assistance, we provide you with transparent
                                        insights
                                        from skilled professionals who will make your move a hassle-free experience.</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Link to="{{ route('selfService') }}">
                                <div className="services-small-item">
                                    <span className="services-title">Self-Service Movers</span>
                                    <p>Pack by yourself and save your moving expenses. We link you with reliable self-service movers
                                        in
                                        your area who provide the flexibility and control you desire for your move.</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Link to="{{ route('storageFacilites') }}">
                                <div className="services-small-item">
                                    <span className="services-title">Storage Facilities</span>
                                    <p>Keep your valuable assets safe and secure with proper storage facilities. We connect you with
                                        the
                                        most reputable storage providers in your area, ensuring your belongings are safe and
                                        accessible
                                        whenever you need them. </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <Link to="{{ route('smallMoves') }}">
                                <div className="services-small-item">
                                    <span className="services-title">Small Moves</span>
                                    <p>If you are considering moving to the next door or a new space nearby. We are your reliable
                                        source
                                        for finding the right professionals in your area. They specialize in handling smaller
                                        relocations with ease. </p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Link to="{{ route('moveExpert') }}">
                                <div className="services-small-item">
                                    <span className="services-title">Special Move Experts</span>
                                    <p>Moving special items is a daunting endeavor. That’s why we help you find the best special
                                        move
                                        experts who excel in handling special items like musical instruments and antique pieces. .
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Link to="{{ route('truckRentals') }}">
                                <div className="services-small-item">
                                    <span className="services-title">Truck Rentals</span>
                                    <p>Performing a DIY move and renting a moving truck is an essential aspect. We provide a wide
                                        range
                                        of trusted truck rental providers in your area to fulfill your moving needs and demands.
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <Link to="{{ route('movingSupplies') }}">
                                <div className="services-small-item">
                                    <span className="services-title">Moving Supplies</span>
                                    <p>My Good Movers is your go-to option to make your relocation easier and stress-free. We
                                        connect
                                        you with reputable moving suppliers in your area, providing high-end boxes and packing
                                        materials. </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="write_review">
                <div className="container write_review_card px-3">
                    <div className="row ">
                        <div className="col-12">
                            <div className="card mb-3 ">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src="https://mygoodmovers.com/assets/image/land-review.webp" className="img-fluid "
                                            width="315" height="241" alt="land-review" loading="lazy" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body new_review_story_css px-sm-5 px-2">
                                            <h2 className="card-title">Write a Review. Share your story.</h2>
                                            <p className="card-text text-justify">
                                                By composing a review for your moving company, you can express your perspective on
                                                the company's overall performance during your household relocation. Your feedback
                                                can serve as a valuable resource for individuals intending to relocate, aiding them
                                                in avoiding scam movers.

                                            </p>
                                            <Link to="{{ route('write-review') }}" className="anchor_btn">
                                                Give a Review
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-4 city_to_city_route mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 city_to_city_route_head">
                            <h2> Explore Movers in Top City-to-City Routes </h2>
                            <p>Here are some of the most popular long-distance moving routes that moving companies cover. For
                                further details on average moving expenses and consumer reviews for interstate movers operating in
                                these routes.</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <ul>
                                <li><Link to="https://mygoodmovers.com/routes/austin-to-houston-movers">Austin to Houston movers</Link>
                                </li>
                                <li><Link to="https://mygoodmovers.com/routes/tampa-to-miami-movers">Tampa to Miami movers</Link></li>
                                <li><Link to="https://mygoodmovers.com/routes/jacksonville-to-orlando-movers">Jacksonville to
                                    Orlando movers</Link></li>
                                <li><Link to="https://mygoodmovers.com/routes/philadelphia-to-new-york-movers">Philadelphia to New
                                    York movers</Link></li>
                                <li><Link to="https://mygoodmovers.com/routes/chicago-to-boston-movers">Chicago to Boston movers</Link>
                                </li>
                                <li><Link to="https://mygoodmovers.com/routes/san-jose-to-seattle-movers">San Jose to Seattle
                                    movers</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <ul>
                                <li><Link to="https://mygoodmovers.com/routes/indianapolis-to-chicago-movers">Indianapolis to
                                    Chicago movers</Link></li>
                                <li><Link to="https://mygoodmovers.com/routes/philadelphia-to-boston-movers">Philadelphia to Boston
                                    movers</Link></li>
                                <li><Link to="https://mygoodmovers.com/routes/san-jose-to-san-diego-movers">San Jose to San Diego
                                    movers</Link></li>
                                <li><Link to="https://mygoodmovers.com/routes/san-francisco-to-sacramento-movers">San Francisco to
                                    Sacramento movers</Link></li>
                                <li><Link to="https://mygoodmovers.com/routes/denver-to-boston-movers">Denver to Boston movers</Link>
                                </li>
                                <li><Link to="https://mygoodmovers.com/routes/san-jose-to-sacramento-movers">San Jose to Sacramento
                                    movers</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                            <ul>
                                <li><Link to="https://mygoodmovers.com/routes/san-diego-to-phoenix-movers">San Diego to Phoenix
                                    movers</Link></li>
                                <li><Link to="https://mygoodmovers.com/routes/san-jose-to-los-angeles-movers">San Jose to Los
                                    Angeles movers</Link></li>
                                <li><Link to="https://mygoodmovers.com/routes/philadelphia-to-new-york-movers">Philadelphia to New
                                    York movers</Link></li>
                                <li><Link to="https://mygoodmovers.com/routes/denver-to-houston-movers">Denver to Houston movers</Link>
                                </li>
                                <li><Link to="https://mygoodmovers.com/routes/jacksonville-to-tampa-movers">Jacksonville to Tampa
                                    movers</Link></li>
                                <li><Link to="https://mygoodmovers.com/routes/jacksonville-to-atlanta-movers">Jacksonville to
                                    Atlanta movers</Link></li>
                            </ul>
                        </div>
                        <div className="text-center mt-5"><Link to="https://mygoodmovers.com/routes" className="more_location">SEE MORE
                            ROUTES</Link></div>
                    </div>
                </div>
            </section>
            <section className="py-4 why_use_section mt-5">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-7 col-12 my-3">
                            <div className="why_use_info justify-content-center">
                                <h3 className="mb-3">Ensuring the Reliability of Our Data
                                </h3>
                                <p>My Good Movers the providing reliable and trustworthy information about moving companies is
                                    embedded in accurate and transparent review process. We carefully gather feedback from authentic
                                    customers who have experienced the services of these moving companies. We then verify the
                                    authenticity of each review to ensure that only reliable and unbiased reviews are included in
                                    our database.</p>
                                <p>Furthermore, our dedication to data reliability extends to the timeliness of our reviews. We keep
                                    our database updated to reflect the most current and relevant information about moving
                                    companies. This ensures that prospective customers can make informed decisions based on the
                                    latest feedback and performance of these companies.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12 mb-sm-0 mb-4">
                            <div className="why_img ">
                                <img src="https://mygoodmovers.com/assets/image/Data-Relaible.webp" alt="Data-Relaible" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog_section mb-5">
                <div className="container">
                    <div className="row blog_cards">
                        <div className="col-12 mb-3">
                            <h3 className="text-capitalize">latest blogs</h3>
                        </div>
                        <div className="col-12">
                            <div className="swiper-container" id="latestBlog" style={{ overflow: "hidden" }}>
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <Link
                                            to="{{ route('blogs.show', ['category_slug' => $blog->postCategory->slug, 'post_slug' => $blog->slug]) }}">
                                            <div className="card p-3">
                                                <div className="card_img d-flex justify-content-center mb-2">
                                                    <img src="{{ URL::to($blog->image) }}" className="rounded" alt="blog image"
                                                        loading="lazy" />
                                                </div>
                                                <div className="card-body p-0">
                                                    <span className="publish_by_date">Published:dfbggdb</span>
                                                    <h4 className="fs-5 card-title mt-1">dgfdgh</h4>
                                                    <p className="m-0 card-text">
                                                        dgdghdg fgdgdhdg fxgdfgdf sdfgdfgg szgfdsfdgdsf sgdsfgdfg sdgfvfsdgfg sdgfsfgfsg
                                                        <span className="fw-semibold text-capitalize">read more</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
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
