import './NavigationBar.css'
export const NavigationBar = ({
  selectedSection,
  setSelectedSection
}) => {
  const sections = ['About', 'Experience', 'Projects', 'Contact']

  const handleElementClick = (el) => {
    setSelectedSection(el)
  }

  const changeBackground = (e) => {
    e.target.style.color = '#5a5a5a';
    e.target.style.background = '#E85A4F'
    e.target.style.border = '2px solid #E85A4Fs'
    e.target.style.boxShadow = '0.5rem 0.5rem #5a5a5a'
    setSelectedSection(e.target.innerHTML)
  }

  const revertBackground = (e) => {
    e.target.style.color = '#5a5a5a';
    e.target.style.border = '2px solid #5a5a5a'
    e.target.style.boxShadow = ''
    e.target.style.background = '#EAE7DC'
  }

  return (
    <div className="navigationSection">
      { sections.map((el) => (
        <button className="navigationTab"
          // onMouseOver={(e) => changeBackground(e)}
          // onMouseOut={(e) => revertBackground(e)}
          onFocus={(e) => changeBackground(e)}
          onBlur={(e) => revertBackground(e)}
          onClick={() => handleElementClick(el)}
        >
          {el}
        </button>
      ))}
    </div>
  )
}