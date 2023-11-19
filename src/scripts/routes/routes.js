import Home from '../views/pages/Home'
import Detail from '../views/pages/detail'
import Like from '../views/pages/like'

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorit': Like,
  '/detail/:id': Detail
}

export default routes
