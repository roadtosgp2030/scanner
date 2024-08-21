import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Test from './screens/Test';

const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/test', element: <Test /> },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
