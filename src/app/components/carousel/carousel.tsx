'use client';
import React from 'react';
import { SectionTitle } from '../sectionTitle/sectionTitle';
import { projectList } from './dataProjects';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './carousel.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function ImageCarousel() {
  return (
    <div className="projects">
      <SectionTitle text="Projects" />
      <Swiper
       modules={[Navigation, Pagination, Autoplay]}
       spaceBetween={30}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       autoplay={{ delay: 5000 }}
      >
        {projectList.map((project) => (
          <SwiperSlide key={project.name}>
          <div className="carouselContainer">
            <a href={project.url} target="_blank">
              <div className="carousel-border">
                <img src={project.image} alt={project.name} />
              </div>
            </a>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
