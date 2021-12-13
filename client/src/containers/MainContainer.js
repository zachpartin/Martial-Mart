import { Route, Switch } from 'react-router-dom'
import Homepage from '../screens/Homepage.js'


const MainContainer = () => {




  return (
    <div>
      <Switch>
        <Route path='/'>
          <Homepage />
        </Route>
      </Switch>
    </div>
  )
}

export default MainContainer;