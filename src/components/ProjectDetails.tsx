import projectImg from '/project1.jpg'
export const ProjectDetails = () => {
   return (
      <section className='section light-background' style={{ marginTop: '90px' }}>

         <div className="container section-title" data-aos="fade-up">
            <h2>Project Details</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-6" data-aos="fade-up">
                  <div className="project-details-image">
                     <img className='w-full' src={projectImg} alt="projects" />

                  </div>
               </div>
               <div className="col-lg-6 col-md-6" data-aos="fade-up">
                  <div className="project-details-image">
                     <img className='w-full' src={projectImg} alt="projects" />
                  </div>
               </div>
               <div className="col-lg-12 col-md-12">
                  <div className="projects-details-desc">
                     <h3 data-aos="fade-up">Competitor Analysis</h3>
                     <p data-aos="fade-up">Lorem ipsum dolor sit amet, conse cte tuer adipiscing elit, sed diam no nu m nibhie eui smod. Facil isis atve eros et accumsan etiu sto odi dignis sim qui blandit praesen lup ta de er. At molestiae appellantur pro. Vis wisi oportere per ic ula ad, ei latine prop riae na, mea cu purto debitis.

                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                     <div className="features-text" data-aos="fade-up">
                        <h4><i className="bi bi-check-circle"></i> Core Development</h4>
                        <p>No fake products and services. The customer is king, their lives and needs are the inspiration. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo</p>
                     </div>

                     <div className="features-text" data-aos="fade-up">
                        <h4><i className="bi bi-check-circle"></i> Define Your Choices</h4>
                        <p>No fake products and services. The customer is king, their lives and needs are the inspiration. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo.

                           Nost rud no eos, no impedit dissenti as mea, ea vide labor amus neglegentur vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise. Ad po exerci nusquam eos te. Cu altera expet enda qui, munere oblique theo phrastu ea vix. Ne nec modus civibus modera tius, sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu altera expetenda qui, munere oblique theophr astus ea vix modus civiu mod eratius.

                           On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every.</p>
                     </div>

                     <div className="project-details-info" data-aos="fade-up">
                        <div className="single-info-box">
                           <h4>Client</h4><span>James Anderson</span>
                        </div>
                        <div className="single-info-box">
                           <h4>Category</h4><span>Network, Marketing</span>
                        </div>
                        <div className="single-info-box">
                           <h4>Date</h4><span>February 28, 2020</span>
                        </div>
                        <div className="single-info-box">
                           <h4>Share</h4>
                           <ul className="social">
                              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                           </ul>
                        </div>
                        <div className="single-info-box">
                           <a className="default-btn" href="#">Live Preview <span></span></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>


   )
}
