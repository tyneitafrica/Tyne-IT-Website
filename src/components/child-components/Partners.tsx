import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
export const Partners = () => {
  const imageSources = ["../../../clients/client-1.png",
    "../../../clients/client-2.png",
    "../../../clients/client-3.png",
    "../../../clients/client-4.png",
    "../../../clients/client-5.png",
    "../../../clients/client-6.png",
    "../../../clients/client-7.png",
    "../../../clients/client-8.png"]
  return (
    <section id="clients" className="clients section light-background">
      <Container data-aos="zoom-in">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Partners</h2>
      </div>
        <Marquee>

          {imageSources.map(imageSrc => {
              return <img src={imageSrc} className="img-fluid" style={{width:'200px', margin:"0 20px"}} alt="" />

          })}

        </Marquee>
      </Container>
    </section>
  );
};
