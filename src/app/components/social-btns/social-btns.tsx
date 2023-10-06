import { IconGithub } from "../icons/iconGithub";
import { IconLinkedin } from "../icons/iconLinkedin";
import './social-btns.scss'

export default function SocialBtns() {
  return (
    <div className="social">
      <a target="_blank" href="https://www.linkedin.com/in/matheus-campos-de-oliveira-118168240/">
        <IconLinkedin/>
      </a>
      <a target="_blank" href="https://github.com/MatheusCdeOliveira">
        <IconGithub/>
      </a>
    </div>
  )
}