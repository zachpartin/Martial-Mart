import Header from '../components/Header.js';
import Footer from '../components/Footer.js'

export default function Layout({children, handleLogout, currentUser}) {



  return (
    <div className="layout">
      <Header
        handleLogout={handleLogout}
        currentUser={currentUser}
      />
    { children } 
  <Footer />
    </div>
  )
 }