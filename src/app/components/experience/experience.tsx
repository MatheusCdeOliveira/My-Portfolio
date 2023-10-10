import Image from 'next/image';
import { SectionTitle } from '../sectionTitle/sectionTitle';
import './experience.scss';

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>
        Over 1500 hours of training covering web development fundamentals,
        front-end, back-end, computer science, software engineering, agile
        methodologies, and behavioral skills.
      </p>
      <div className="skills">
        <SectionTitle text="Skills"/>
        <div className='logos'>
          <Image src="/js.png"
          alt="Javascript logo"
          width={50}
          height={50}
          priority
          />
        </div>
        <div className='logos'>
          <Image
            src="/react.png"
            alt="React logo"
            width={50}
            height={50}
            priority
          />
          </div>
          <div className='logos'>
            <Image
              src="/ts.png"
              alt="Typescript logo"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className='logos'>
            <Image
              src="/css3.png"
              alt="css logo"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className='logos'>
            <Image
              src="/nodeJS.png"
              alt="Nodejs logo"
              width={48}
              height={48}
              priority
            />
          </div>
          <div className='logos'>
            <Image
              src="/html.png"
              alt="Html logo"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className='logos'>
            <Image
              src="/mysqll.png"
              alt="NodeJs logo"
              width={50}
              height={50}
              priority
            />
          </div>
          <div className='logos'>
            <Image
              src="/pythonn.png"
              alt="python logo"
              width={50}
              height={50}
              priority
            />
          </div>
        </div>
      </div>
  );
}
