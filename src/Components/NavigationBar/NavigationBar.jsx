import './NavigationBar.css'
import { useEffect } from 'react'

export const NavigationBar = ({
  selectedSection,
  setSelectedSection
}) => {
  const sections = ['About', 'Experience', 'Projects', 'Contact']

  const handleElementClick = (el) => {
    setSelectedSection(el)
  }

  const changeBackground = (event) => {
    setSelectedSection((prevSelection) => {
      const el = document.getElementById(prevSelection)
      revertBackground(el)
      return event.target.innerHTML
    }
    )
  }

  const revertBackground = (el) => {
    el.style.color = '#5a5a5a';
    el.style.border = '2px solid #5a5a5a'
    el.style.boxShadow = ''
    el.style.background = '#EAE7DC'
  }

  useEffect(() => {
    const e = document.getElementById(selectedSection)
    e.style.color = '#5a5a5a';
    e.style.background = '#E85A4F'
    e.style.border = '2px solid #E85A4Fs'
    e.style.boxShadow = '0.5rem 0.5rem #5a5a5a'
  }, [selectedSection])

  return (
    <div className="navigationSection">
      { sections.map((el) => (
        <button className="navigationTab"
          id={el}
          onFocus={(e) => changeBackground(e)}
          onClick={() => handleElementClick(el)}
        >
          {el}
        </button>
      ))}
    </div>
  )
}