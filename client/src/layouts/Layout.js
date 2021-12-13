import Header from '../components/Header.js';
import Footer from '../components/Footer.js'

export default function Layout(props) {



  return (
    <div>
    <Header />
    { props.children } 
  <Footer />
    </div>
  )
 }