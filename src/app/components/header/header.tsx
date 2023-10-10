import Image from "next/image";
import './header.scss'

export function Header(){
  return (
    <div className="header">
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