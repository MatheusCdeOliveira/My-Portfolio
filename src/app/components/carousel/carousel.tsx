'use client';
import { Carousel } from 'react-responsive-carousel';
import { SectionTitle } from '../sectionTitle/sectionTitle';
import { projectList } from './dataProjects';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './carousel.scss';

export function ImageCarousel() {
  return (
    <div className="projects">
      <SectionTitle text="Projects" />
      <Carousel
        showThumbs={false}
        autoPlay
        showStatus={false}
        infiniteLoop={true}
        interval={6000}
      >
        {projectList.map((project) => (
          <div className="cards" key={project.name}>
            <a href={project.url} target="_blank">
              <div className="carousel-border">
                <img src={project.image} alt={project.name} />
              </div>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
