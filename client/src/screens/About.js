import './About.css';
import Picture from '../assets/Muaythai.png';

const About = () => {


  return (
  <div className="aboutPage">
      <h1 className="aboutTitle">About</h1>
      <img src={Picture} />
      <p>Hi, my name's Zach (The gross, sweaty dude second from the right), and I've been training Muay Thai for nearly two years now. I believe training a martial art is one of the best things a person can do for themselves in terms of both physical and mental health. However, as someone who began my journey into fighting as a broke college student and continued it as a habitually broke adult, I also realize that between the costs of classes, gym memberships, and equipment, it is not exactly the most affordable hobby. Which is why I made this website!</p>
      <p>There is very little that hardcore martial artists love than buying even more gear. If you find yourself with equipment that you aren't using anymore, sell it here and get yourself some money for it while giving someone else the opportunity to save money on gear that they need.</p>
      <p>-Zach Partin <br /> Github: https://github.com/zachpartin</p>
  </div>
  )
}

export default About;