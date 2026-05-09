import CourseBox from '../CourseBox/CourseBox';
import SectionHeader from '../SectionHeader/SectionHeader';

import './LastCourses.css';

export default function LastCourses() {
    return (
        <>
            <div className="courses">
                <div className="container">
                    <SectionHeader
                        title="جدیدترین دوره ها"
                        desc="سکوی پرتاپ شما به سمت موفقیت"
                        btnTitle="تمامی دوره ها"
                        btnHref="courses"
                    />

                    <div className="courses-content">
                        <div className="container">
                            <div className="row">
                                <CourseBox
                                    src="images/courses/jango.png"
                                    title="دوره پروژه محور متخصص جنگو"
                                    teacher="رضا دولتی"
                                />
                                <CourseBox
                                    src="images/courses/freelancer.png"
                                    title="دوره پروژه های فریلنسری"
                                    teacher="قدیر یلمه"
                                />
                                <CourseBox
                                    src="images/courses/js_project.png"
                                    title="پروژه های تخصصی با جاوااسکریپت"
                                    teacher="محمدامین سعیدی راد"
                                />
                                <CourseBox
                                    src="images/courses/nodejs.png"
                                    title="API نویسی با nodejs"
                                    teacher="محمدامین سعیدی راد"
                                />
                                <CourseBox
                                    src="images/courses/python.png"
                                    title="مصورسازی داده با پایتون"
                                    teacher="رضا دولتی"
                                />
                                <CourseBox
                                    src="images/courses/youtuber.png"
                                    title="دوره یوتیوبر تخصصی"
                                    teacher="حمیدرضا عبادی"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
