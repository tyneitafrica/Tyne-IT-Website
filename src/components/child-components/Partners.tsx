import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

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
        <Swiper
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView="auto"
          freeMode={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >

          {imageSources.map(imageSrc => {
              return <SwiperSlide>

              <img src={imageSrc} className="img-fluid" width={200} alt="" />
            </SwiperSlide>
          })}

        </Swiper>
      </Container>
    </section>
  );
};
