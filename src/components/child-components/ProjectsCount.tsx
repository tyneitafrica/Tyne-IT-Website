import React, { useEffect } from 'react';

const ProjectsCount: React.FC = () => {
  useEffect(() => {
    const statContainers = document.querySelectorAll<HTMLElement>('.stat-container');
    const hasCounted = Array(statContainers.length).fill(false);

    function countUp(element: HTMLElement, start: number, end: number, duration: number) {
      let current = start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / (end - start)));

      const timer = setInterval(() => {
        current += increment;
        element.textContent = current.toString();
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    }

    function isElementInViewport(el: HTMLElement): boolean {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function onScroll() {
      statContainers.forEach((div, i) => {
        if (isElementInViewport(div) && !hasCounted[i]) {
          hasCounted[i] = true;
          const projectCountElement = document.getElementById("projectCount");
          const clientsCountElement = document.getElementById("clientsCount");
          const awardsCountElement = document.getElementById("awardsCount");
          const partnersCountCountElement = document.getElementById("partnersCount");

          if (projectCountElement) countUp(projectCountElement, 0, 50, 2000);
          if (clientsCountElement) countUp(clientsCountElement, 0, 20, 2000);
          if (awardsCountElement) countUp(awardsCountElement, 0, 5, 2000);
          if (partnersCountCountElement) countUp(partnersCountCountElement, 0, 14, 2000);
        }
      });
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="projects" className="container my-5">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Stats</h2>
      </div>
      <div className="row gap-3 justify-content-center text-center">
        <div className="col-md-4 stat-container" data-aos="fade-up" data-aos-delay="400">
          <div className="count-container light-background">
            <p className="stat" id="projectCount">0</p>
          </div>
          <p>Projects Completed</p>
        </div>
        <div className="col-md-4 stat-container" data-aos="fade-up" data-aos-delay="400">
          <div className="count-container light-background">
            <p className="stat" id="clientsCount">0</p>
          </div>
          <p>Happy Clients</p>
        </div>
        <div className="col-md-4 stat-container" data-aos="fade-up" data-aos-delay="400">
          <div className="count-container light-background">
            <p className="stat" id="partnersCount">0</p>
          </div>
          <p> Trusted Partners</p> {/* New item */}
        </div>
        <div className="col-md-4 stat-container" data-aos="fade-up" data-aos-delay="400">
          <div className="count-container light-background">
            <p className="stat" id="awardsCount">0</p>
          </div>
          <p>Awards Won</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCount;
