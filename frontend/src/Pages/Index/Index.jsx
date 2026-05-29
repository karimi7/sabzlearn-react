import AboutUs from '../../Components/AboutUs/AboutUs.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import Header from '../../Components/Header/Header.jsx';
import LastArticles from '../../Components/LastArticles/LastArticles.jsx';
import LastCourses from '../../Components/LastCourses/LastCourses.jsx';
import PopularCourses from '../../Components/PopularCourses/PopularCourses.jsx';
import PresellCourses from '../../Components/PresellCourses/PresellCourses.jsx';

import './Index.css';

export default function Index() {
    return (
        <>
            <Header />
            <LastCourses />
            <AboutUs />
            <PopularCourses />
            <PresellCourses />
            <LastArticles />
            <Footer />
        </>
    );
}
