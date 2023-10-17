'use client';
import React from 'react';
import { ImageCarousel } from './components/carousel/carousel';
import { Experience } from './components/experience/experience';
import { Header } from './components/header/header';
import { IconEmail } from './components/icons/icons';
import { Info } from './components/infoSection/info';
import SocialBtns from './components/social-btns/social-btns';

import './styles/home.scss';

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <Info />
      <div className="buttons">
        <div className="social-icons">
          <SocialBtns />
        </div>
        <a className="contact-btn" href="mailto:matheuswe2010@hotmail.com">
          CONTACT ME
          <IconEmail />
        </a>
      </div>
      <ImageCarousel />
    </main>
  );
}
