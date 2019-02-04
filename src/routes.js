import HomeContainer from './components/HomeContainer'
import ReadMoreContainer from './components/ReadMoreContainer'
import SeminarDetailsContainer from './components/SeminarDetailsContainer'
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
    path: "/seminar/:title/:id",
    component: SeminarDetailsContainer,
  },
  {
    component: NotFound
  }
]