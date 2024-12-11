import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

export const Partners = () => {
  const imageSources = [
    "/clients/Cargo.png",
    "/clients/itracom.png",
    // "/clients/Mekatronic.png", // Ensure this image exists
    "/clients/Moreton.png",
    "/clients/fomi.png",
  ];

  return (
    <section id="clients" className="clients section light-background">
      <Container data-aos="zoom-in">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Partners</h2>
        </div>
        <Marquee speed={50}>
          {imageSources.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt={`partner-logo-${index}`} // Alt text for accessibility
              className="partner-logo img-fluid"
              style={{
                height: "auto",
                width: "150px", // Adjust as needed
                margin: "0 70px",
                objectFit: "contain", 
              }}
            />
          ))}
        </Marquee>
      </Container>
    </section>
  );
};
