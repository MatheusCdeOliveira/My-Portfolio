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
      width={325}
      height={277}
      priority
    />
  </div>
  )
}