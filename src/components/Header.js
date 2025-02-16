import Logo from '../assets/icon.png';
export const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="Taskmate logo" />
            <span>Taskmate</span>
        </div>
        <div className="themeSelector">
          <span className="light "></span>
          <span className="medium activeTheme"></span>
          <span className="dark"></span>
          <span className="gone"></span>
          <span className="gTwo"></span>
          <span className="gThree"></span>
        </div>
    </header>
  )
}
