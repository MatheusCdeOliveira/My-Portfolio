import { Experience } from './components/experience/experience';
import { Header } from './components/header/header';
import { IconEmail } from './components/icons/iconEmail';
import { Info } from './components/info/info';
import SocialBtns from './components/social-btns/social-btns';
import './styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <Experience/>
       <Info/>
        <div className="buttons">
          <div className="social-icons">
            <SocialBtns/>
          </div>
          <a className='contact-btn' href='mailto:matheuswe2010@hotmail.com'>
            CONTACT ME
          <IconEmail/>
          </a>
        </div>
    </main>
  );
}
