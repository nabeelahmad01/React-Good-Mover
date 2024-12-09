import React from 'react'
import "./categoryshowpage.css"
import { Link } from 'react-router-dom';

export default function Categoryshowpage({ blogs }) {
    return (
        <>
            <section id="category_blog_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-capitalize text-white">Moving Guide</h1>
                        </div>
                        <div className="col-12 mt-2">
                            <nav style={{ bsBreadcrumbDivider: '>' }} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/blogs">Blogs</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">moving guide</Link></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className="category_blog_post_container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="row category_cards ">
                                {blogs.map((blog) => (
                                    <Link to={`/Blogshow/${blog.story}`} className='text-decoration-none' key={blog.id}>
                                        <div className="card mb-3 border-0 " key={blog.id}>
                                            <div className="row">
                                                <div className="col-md-4 col-12 position-relative">
                                                    <img src={blog.blogimage} className="main_blog_img"
                                                        alt={blog.title} />
                                                </div>
                                                <div className="col-md-8 col-12">
                                                    <div className="card-body py-md-0 ps-md-3 px-0">
                                                        <h2 className="card-title m-0">{blog.title}</h2>
                                                        <div className="wrritenby d-flex align-items-center me-2">
                                                            <img src="https://mygoodmovers.com/users/profile_image/isaac-aiden.png"
                                                                className="rounded-circle writer-img me-2" alt={blog.author} />
                                                            <div className="auth_detai d-flex flex-column ">
                                                                <div
                                                                    style={{ fontWeight: 700, color: "var(--secondary-color)", fontFamily: 'Plus Jakarta Sans' }}>
                                                                    Written
                                                                    by:<span><br />{blog.author}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="publish_by_date">published By: {blog.blogtime}
                                                        </span>
                                                        <p className="card-text m-0 mt-sm-2 mt-2">
                                                            sgfgdgh sfgdh gdfhdgdtyh dtyhrdt tyy rturytu dtyrdytf.... <strong>Read More</strong>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </Link>
                                ))}


                            </div>

                            <div className="row mt-3 ">
                                <div className="col-12">
                                    <div className="pagination_container">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li>1</li>
                                                <li>2</li>
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
                                                    <input type="search" className="form-control " name="search" placeholder="Blog search..." />
                                                    <span className="input-group-text border-0">
                                                        <button type="submit" className="bg-transparent border-0"
                                                            aria-label="search button"><i
                                                                className="fa-solid text-white fa-magnifying-glass"></i></button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <div className="blog_side_category ">
                                            <h3>Categories</h3>
                                            <ul className="list-unstyled p-0 m-0 mt-4">
                                                <li>
                                                    <Link to="{{ route('blogs.cat.show', $cat->slug) }}"><i
                                                        className="fa-solid fa-chevron-right "></i>dfdg</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <div className="blog_side_recent_posts">
                                            <h3>Popular Blogs</h3>
                                            <Link
                                                to="{{ route('blogs.show', ['category_slug' => $record->postCategory->slug, 'post_slug' => $record->slug]) }}">
                                                <div className="card border-0 mt-4 bg-transparent mb-3">
                                                    <div className="row">
                                                        <div className="col-sm-4 col-12 mb-sm-0 mb-3">
                                                            <div className="card-img ">
                                                                <img src="https://mygoodmovers.com/posts/image/moving-trends-in-2024.jpg" className="img-fluid"
                                                                    alt="dfsfgdf" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-8 col-12">
                                                            <div className="card-body p-0">
                                                                <h4 className="card-title text-dark m-0">dfgd
                                                                </h4>
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
            </section>
        </>
    )
}
