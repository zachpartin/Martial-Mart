import Picture from '../assets/Homepagepic.png'
import './Homepage.css';

const Homepage = () => {

  return (
    <div className="homepage">
      <img src={Picture} alt="Kick"/>
      <h2>Buy and sell your martial arts gear</h2>
    </div>
  )
}

export default Homepage;