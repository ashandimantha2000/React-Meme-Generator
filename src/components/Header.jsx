import TrollFace from '../assets/images/Troll Face.png'

function Header() {
  return (
    <header className='header'>
        <img src={TrollFace} alt="icon" className='header-image'/>
        <h2 className='header-title'>Meme Generator</h2>
        <h4 className='header-subtitle'>Image Manipulator</h4>
    </header>
  )
}

export default Header