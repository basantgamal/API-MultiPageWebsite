import Movies from './components/Movies';
import Movie from './components/Movie';

let routes = [
    {
        path: '/',
        component: Movies
    },
    {
        path: '/movie',
        component: Movie
    }
];

export default routes;