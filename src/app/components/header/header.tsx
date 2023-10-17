import Image from "next/image";
import ThemeSwitcher from "../themeBtn/themeButton";

import './header.scss'

export function Header(){
  return (
    <div className="header">
      <ThemeSwitcher/>
    <div>
      <h1>Hi, i´m Matheus! 👋</h1>
      <h2>Software Engineer</h2>
    </div>
    <Image
      src="/me.jpeg"
      alt="My photo"
      width={230}
      height={222}
      priority
    />
  </div>
  )
}