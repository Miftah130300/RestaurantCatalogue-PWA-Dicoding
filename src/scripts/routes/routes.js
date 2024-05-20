import Home from '../views/pages/Home'
import Favorit from '../views/pages/favorit'
import Detail from '../views/pages/detail'

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorit': Favorit,
  '/detail/:id': Detail
}

export default routes
