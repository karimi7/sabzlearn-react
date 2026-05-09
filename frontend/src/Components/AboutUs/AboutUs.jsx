import AboutUsBox from '../AboutUsBox/AboutUsBox';
import SectionHeader from '../SectionHeader/SectionHeader';

import './AboutUs.css';

export default function AboutUs() {
    return (
        <div className="about-us">
            <div className="container">
                <SectionHeader
                    title="ما چه کمکی بهتون میکنیم؟"
                    desc="از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست"
                />

                <div className="container">
                    <div className="row">
                        <AboutUsBox
                            title="دوره های اختصاصی"
                            desc="با پشتیبانی و کیفیت بالا ارائه میده !"
                            icon="far fa-copyright about-us__icon"
                        />
                        <AboutUsBox
                            title="اجازه تدریس"
                            desc="به هر مدرسی اجازه تدریس رو نمیده. چون کیفیت براش مهمه!"
                            icon="far fa-copyright about-us__icon"
                        />
                        <AboutUsBox
                            title="دوره پولی و رایگان"
                            desc="به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و آپدیت دوره ارائه بده."
                            icon="far fa-copyright about-us__icon"
                        />
                        <AboutUsBox
                            title="اهمیت به کاربر"
                            desc="اولویت اول و آخر آکادمی اهمیت به کاربرها و رفع نیازهای آموزشی اونهاست."
                            icon="far fa-copyright about-us__icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
