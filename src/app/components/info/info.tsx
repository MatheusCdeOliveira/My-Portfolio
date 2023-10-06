import { SectionTitle } from '../sectionTitle/sectionTitle'
import './info.scss'

export function Info(){

  return (
    <div className="infos">
          <SectionTitle text="Language"/>
          <div className="languages-info">
            <span>🇺🇸 EN - Basic</span>
            <span>🇧🇷 PT-BR - Native Speaker</span>
          </div>
          <SectionTitle text="Education"/>
          <div className="education-info">
            <span>🎓</span>
            <span>Trybe programming school</span>
          </div>
        </div>
  )
}