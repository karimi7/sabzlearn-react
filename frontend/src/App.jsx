import routes from './routes';
import { useRoutes } from 'react-router';

import './App.css';

export default function App() {
    const router = useRoutes(routes);
    return <div>{router}</div>;
}
