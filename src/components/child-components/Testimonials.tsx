import React from 'react';
import 'swiper/css';
import Swiper from 'swiper/bundle';
import Img1 from "/testimonials-1.jpg"
import Img2 from "/testimonials-2.jpg"
import Img3 from "/testimonials-3.jpg"
import Img4 from "/testimonials-4.jpg"
import Img5 from "/testimonials-5.jpg"



const Testimonials = () => {
  React.useEffect(() => {
    new Swiper('.swiper', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    <section id="testimonials" className="testimonials section ">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Here's what our clients say about us</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper init-swiper">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={Img1} className="testimonial-img" alt="Saul Goodman" />
                <h3>Saul Goodman</h3>
                <h4>Small Business Owner</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  "Tyne IT completely transformed my business. Their web solutions are top-notch, and their customer support is always there when I need them."
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={Img2} className="testimonial-img" alt="Susan Njeri" />
                <h3>Sara Wilson</h3>
                <h4>Marketing Manager</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  "The team at Tyne IT Consulting exceeded our expectations. They delivered a user-friendly platform that boosted our online presence significantly."
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={Img3} className="testimonial-img" alt="Michael Mwangi" />
                <h3>Jena Karlis</h3>
                <h4>Entrepreneur</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  "Tyne IT has been a game-changer for my startup. Their innovative solutions and expert advice helped us scale rapidly."
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={Img4} className="testimonial-img" alt="Alice Ndungu" />
                <h3>Kerry Larson</h3>
                <h4>Freelancer</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  "The website Tyne IT developed for me is clean, professional, and exactly what I needed to attract new clients. Highly recommend their services!"
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={Img5} className="testimonial-img" alt="Peter Kamau" />
                <h3>Peter Notion</h3>
                <h4>Corporate Client</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  "Our experience with Tyne IT has been outstanding. Their attention to detail and commitment to delivering high-quality work is truly commendable."
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
