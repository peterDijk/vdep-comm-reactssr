import HomeContainer from './components/HomeContainer'
import ReadMoreContainer from './components/ReadMoreContainer'
import NotFound from './components/NotFound';

export default [
  {
    path: "/",
    component: HomeContainer,
    exact: true
  },
  {
    path: "/more/:slug",
    component: ReadMoreContainer,
    exact: true
  },
  {
    component: HomeContainer
  }
]