import Index from './Pages/Index/Index.jsx';
import CourseInfo from './Pages/CourseInfo/CourseInfo.jsx';
import Category from './Pages/Category/Category.jsx';
import ArticleInfo from './Pages/ArticleInfo/ArticleInfo.jsx';
import Courses from './Pages/Courses/Courses.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';

const routes = [
    { path: '/', element: <Index /> },
    { path: '/course-info/:courseName', element: <CourseInfo /> },
    { path: '/category-info/:categoryName', element: <Category /> },
    { path: '/article-info/:articleName', element: <ArticleInfo /> },
    { path: '/article-info', element: <ArticleInfo /> },
    { path: '/courses', element: <Courses /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
];

export default routes;