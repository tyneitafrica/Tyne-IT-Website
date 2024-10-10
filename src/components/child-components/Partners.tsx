import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
export const Partners = () => {
  const imageSources = [
    "/clients/Cargo.png",
    "/clients/itracom.png",
    "/clients/Mekatronic.png",
    "/clients/Moreton.png",
    "/clients/fomi.png",
  ];
  return (
    <section id="clients" className="clients section light-background">
      <Container data-aos="zoom-in">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Partners</h2>
        </div>
        <Marquee>
          {imageSources.map((imageSrc) => {
            return (
              <img
                src={imageSrc}
                className="img-fluid"
                style={{ width: "200px", margin: "0 20px" }}
                alt=""
              />
            );
          })}
        </Marquee>
      </Container>
    </section>
  );
};
