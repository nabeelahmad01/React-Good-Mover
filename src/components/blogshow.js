import React from 'react'
import "./blogshow.css"
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Blogshow({ blogs }) {
    const { story } = useParams(); // Access the "story" parameter from the URL
    const blog = blogs.find((b) => b.story === story); // Find the specific blog

    if (!blog) {
        return <h1>Blog not found</h1>;
    }
    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        });
    };

    return (
        <>
            <section id="show_blog_banner">
                <div className="container post">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="show_blog_heading">
                                <h1 className="text-capitalize ">{blog.title}</h1>
                                <nav style={{ bsBreadcrumbDivider: '>', color: "#000" }} aria-label="breadcrumb">
                                    <ol className="breadcrumb" style={{ color: "#000" }} >
                                        <li className="breadcrumb-item text-dark"><Link to="/" style={{ color: "#000" }}>Home</Link></li>
                                        <li className="breadcrumb-item text-dark"><Link to="/blogs" style={{ color: "#000" }}>Blogs</Link></li>
                                        <li className="breadcrumb-item text-dark"><Link to="/blogs" style={{ color: "#000" }}>{blog.title}</Link></li>

                                    </ol>
                                </nav>

                                <div className="col-12 authors d-flex mb-2">
                                    <div className="row">
                                        <div className="  col-sm-4 col-5 ">
                                            <div className="wrritenby d-flex align-items-center me-2">
                                                <img src="https://mygoodmovers.com/users/profile_image/isaac-aiden.png"
                                                    className="rounded-circle writer-img me-2" alt={blog.author} />
                                                <div className="auth_detai d-flex flex-column ">
                                                    <Link to="/"
                                                        style={{ fontWeight: 700, color: "var(--secondary-color)", fontFamily: 'Plus Jakarta Sans' }}>Written
                                                        by: <br /><span>{blog.author}</span></Link>
                                                    <span className="writen_date"> Published Date: {formatDateTime(blog.blogtime)}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" col-sm-4 col-5 ">
                                            <div className="editedby d-flex align-items-center">
                                                <img src="https://mygoodmovers.com/users/profile_image/isaac-aiden.png"
                                                    className="rounded-circle writer-img me-2" alt="dfsgfds" />
                                                <div className="auth_detai d-flex flex-column ">
                                                    <Link to="{{ route('blogs.author', $post->updatedByUser->slug ?? $post->user->slug) }}"
                                                        style={{ fontWeight: 700, color: "var(--secondary-color)", fontFamily: 'Plus Jakarta Sans' }}>Edited
                                                        by:
                                                        <br /><span>{formatDateTime(blog.blogtime)}</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 col-2 d-flex justify-content-end align-items-end">
                                            <i className="fa-solid fa-eye eye_icon mb-1"></i><span
                                                className="view ms-2 mt-2">12</span>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className="show_blog_container">
                <div className="container post">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="row show_blog_cards">
                                <div className="col-12 mb-3">
                                    <div className="card border-0 rounded-0 w-100 h-100">
                                        <div className="card-header border-0 bg-transparent position-relative p-0 m-0">
                                            <img src={blog.blogimage} loading="eager"
                                                className="img-fluid show_blog_main_image" alt={blog.blogimage} />
                                        </div>
                                        <div className="cards-div">
                                            <div className="row mt-3">
                                                <div className="col-lg-4 ">
                                                    <Link to="{{ route('company.show',$postCompany->company->slug) }}" target="__blank">
                                                        <div className="companycard">
                                                            <div className="ad_tag">
                                                                <span>AD</span>
                                                            </div>
                                                            <div
                                                                className="companydetail d-flex flex-column align-items-center justify-content-center">
                                                                <div className="companyimgsize ">
                                                                    <img src="https://mygoodmovers.com/companies/logo/menards-moving-storage.JPG"
                                                                        className="ad_card_img"
                                                                        alt="menards-moving-storage" />
                                                                </div>
                                                                <hr />
                                                                <h4 className="company_head text-center mt-2">
                                                                    jkhljk
                                                                </h4>
                                                                <p className="m-0">
                                                                    <i className="far fa-star"
                                                                        style={{ fontSize: "1rem", color: "#a7a7a7" }}
                                                                        aria-hidden="true"></i>
                                                                    <i className="far fa-star"
                                                                        style={{ fontSize: "1rem", color: "#a7a7a7" }}
                                                                        aria-hidden="true"></i>
                                                                    <i className="far fa-star"
                                                                        style={{ fontSize: "1rem", color: "#a7a7a7" }}
                                                                        aria-hidden="true"></i>
                                                                    <i className="far fa-star"
                                                                        style={{ fontSize: "1rem", color: "#a7a7a7" }}
                                                                        aria-hidden="true"></i>
                                                                    <i className="far fa-star"
                                                                        style={{ fontSize: "1rem", color: "#a7a7a7" }}
                                                                        aria-hidden="true"></i>
                                                                    <span
                                                                        className="rating_number">5/5</span>
                                                                </p>
                                                                <ul className="list-unstyled card-li text-start">
                                                                    <li className="d-flex align-items-baseline"><img
                                                                        src="https://mygoodmovers.com/assets/image/check-mark.png"
                                                                        className="me-1 tick" alt="check-mark" />lorem ipsum eit,</li>
                                                                    <li className="d-flex align-items-baseline"><img
                                                                        src="https://mygoodmovers.com/assets/image/check-mark.png"
                                                                        className="me-1 tick" alt="check-mark" />lorem ipsum eit,</li>
                                                                    <li className="d-flex align-items-baseline"><img
                                                                        src="https://mygoodmovers.com/assets/image/check-mark.png"
                                                                        className="me-1 tick" alt="check-mark" />lorem ipsum eit,</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card-body px-0">
                                            <div id="table-of-contents">


                                            </div>
                                            <div className="card-text m-0 mt-4 " id="content">{blog.description}</div>

                                        </div>
                                        <div className="row mb-4" id="faq">
                                            <div className="col-12">
                                                <h2 className="fs-2 mb-3" id="page">Frequently Asked Questions (FAQs)</h2>
                                            </div>
                                            <div className="col-12">
                                                <div className="accordion" id="accordionExample">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header">
                                                            <button className="accordion-button collapsed" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#collapse1"
                                                                aria-expanded="false"
                                                                aria-controls="collapse1">fhgjgfhjghj dgfhfhgfg gfdhfghfg
                                                            </button>
                                                        </h2>
                                                        <div id="collapse1"
                                                            className="accordion-collapse collapse"
                                                            data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <p>
                                                                    fghfgjhgfjgfhcj fghfhgjfhj fghfhjfhgjc gfdxh
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <div className="col-12">
                                    <div className="share_links text-end pt-4">
                                        <nav
                                            className="d-flex justify-content-sm-end justify-content-sm-center flex-wrap align-items-center">
                                            <span className=" mb-2 mb-sm-0 me-sm-3 text-start text-uppercase">Share:</span>
                                            <div>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex flex-wrap w-100 justify-content-between align-items-center">
                                <Link className="py-2 fs-3 fw-bolder" style={{ color: "#1e75bb" }}
                                    to="{{ route('blogs.show', ['category_slug' => $post->getPreviousAttribute()->postCategory->slug, 'post_slug' => $post->getPreviousAttribute()->slug]) }}">
                                    <i className="fa-solid fa-chevron-left me-2"></i><span>PREVIOUS</span>
                                </Link>

                                <div className="{{ $post->getPreviousAttribute() && $post->getNextAttribute() ? 'vr' : '' }}"></div>

                                <Link className="py-2 fs-3 fw-bolder" style={{ color: "#1e75bb" }}
                                    to="{{ route('blogs.show', ['category_slug' => $post->getNextAttribute()->postCategory->slug, 'post_slug' => $post->getNextAttribute()->slug]) }}">
                                    <span>NEXT</span><i className="fa-solid fa-chevron-right ms-2"></i>
                                </Link>

                            </div>
                            <div className="row mt-5 ">
                                <div className="col-12">
                                    <div className="pagination_container">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="blog_search_bar ">
                                            <form action="{{ route('blogs.post.search') }}" method="get">
                                                <div className="input-group">
                                                    <input type="search" className="form-control" name="search" placeholder="Blog search..." />
                                                    <span className="input-group-text border-0">
                                                        <button type="submit" className="bg-transparent border-0"
                                                            aria-label="search button"><i
                                                                className="fa-solid text-white fa-magnifying-glass"></i></button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-3 mb-3">
                                        <div className="blog_side_category ">
                                            <h3>Categories</h3>
                                            <ul className="list-unstyled p-0 m-0">
                                                <li><Link to="{{ route('blogs.cat.show', $cat->slug) }}"><i
                                                    className="fa-solid fa-chevron-right "></i>hgfbncvh</Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2">
                                        <div className="blog_side_recent_posts">
                                            <h3>Recent Posts</h3>
                                            <Link
                                                to="{{ route('blogs.show', ['category_slug' => $record->postCategory->slug, 'post_slug' => $record->slug]) }}">
                                                <div className="card border-0 mt-4 bg-transparent mb-3">
                                                    <div className="row">
                                                        <div className="col-sm-4 col-12 mb-sm-0 mb-3">
                                                            <div className="card-img ">
                                                                <img src="https://mygoodmovers.com/posts/image/what-can-you-fit-in-a-10x10-storage-unit.jpg" className="img-fluid"
                                                                    alt="{{ $record->img_alt }}" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-8 col-12">
                                                            <div className="card-body p-0">
                                                                <h4 className="card-title text-dark m-0">dgfdgh
                                                                </h4>
                                                                <p className="m-0">
                                                                    dghfrghdfg
                                                                    <span
                                                                        className="fw-bold text-dark">dhgfdghfjhfhjfhjhf</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
