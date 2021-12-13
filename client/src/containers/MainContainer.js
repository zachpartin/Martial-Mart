import { Route, Switch } from 'react-router-dom'
import Homepage from '../screens/Homepage.js'
import Products from '../screens/Products.js'


const MainContainer = () => {


  return (
    <div>
      <Switch>
        <Route path='/'>
          <Homepage />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
      </Switch>
    </div>
  )
}

export default MainContainer;