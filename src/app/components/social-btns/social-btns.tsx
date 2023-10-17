import { useTheme } from "next-themes";
import { IconGithub, IconLinkedin, IconLinkedinDark, IconGithubDark } from "../icons/icons";
import { useEffect, useState } from "react";
import './social-btns.scss'

export default function SocialBtns() {
  
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="social">
      <a target="_blank" href="https://www.linkedin.com/in/matheus-campos-de-oliveira-118168240/">
        {resolvedTheme === 'dark' ? <IconLinkedin/> : <IconLinkedinDark/>}
      </a>
      <a target="_blank" href="https://github.com/MatheusCdeOliveira">
      {resolvedTheme === 'dark' ? <IconGithub/> : <IconGithubDark/>}
      </a>
    </div>
  )
}