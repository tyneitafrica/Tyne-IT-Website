import projectImg from "/project1.jpg"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
export const Portfolio = () => {
    const projects = [
        {
            title: "Web Development Project",
            category: "Web Development"
        },
        {
            title: "Mobile App Development Project",
            category: "Mobile App Development"
        },
        {
            title: "Data Science Project",
            category: "Data Science"
        },
        {
            title: "Machine Learning Project",
            category: "Machine Learning"
        },
        {
            title: "Artificial Intelligence Project",
            category: "Artificial Intelligence"
        },
        {
            title: "Game Development Project",
            category: "Game Development"
        },
    ]
    return (
        <>
            <section id="portfolio" className="portfolio section light-background" style={{ marginTop: '90px' }}>
                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Portfolio</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                {/* End Section Title */}
                <div className="container">

                    <div className="row">
                        {projects.map((project, i) => {
                            return <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                                <div className="single-projects-box">
                                    <img className="w-100 h-auto" src={projectImg} alt="Digital Marketing Image" />
                                    <div className="projects-content">
                                        <h3><Link to={`/portfolio/${project.title.split(" ").join("")}`}>{project.title}</Link></h3>
                                        <span className="category">{project.category}</span>
                                    </div>
                                    <div className="plus-icon">
                                        <Link className="popup-btn" to={`/portfolio/${project.title.split(" ").join("")}`}>
                                            <span></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>

            </section>
            <Outlet />
        </>
    )
}
