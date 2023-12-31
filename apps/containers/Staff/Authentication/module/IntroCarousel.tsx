import { Carousel, ConfigProvider, Image } from "antd";

import logo from "public/logo.png";
import classes from "./../styles/IntroCarousel.module.css";

import carouselImg1 from "public/image/carousel-1.svg";
import carouselImg2 from "public/image/carousel-2.svg";
import carouselImg3 from "public/image/carousel-3.svg";
import carouselImg4 from "public/image/carousel-4.svg";

const IntroCarousel = () => {
    return (
        <div className={classes.intro}>
            <div className={classes.logo}>
                <Image src={logo.src} height={32} preview={false} />
                <h1 className={classes.title}>Registry</h1>
            </div>
            <ConfigProvider
                theme={{ token: { colorBgContainer: "var(--color-black)" } }}
            >
                <Carousel autoplay>
                    <div>
                        <Image
                            src={carouselImg1.src}
                            preview={false}
                            className={classes.img}
                        />
                        <h2 className={classes.subtitle}>
                            Đảm bảo phương tiện di chuyển an toàn hơn
                        </h2>
                    </div>
                    <div>
                        <Image
                            src={carouselImg2.src}
                            preview={false}
                            className={classes.img}
                        />
                        <h2 className={classes.subtitle}>
                            Giải quyết đăng kiểm nhanh chóng và uy tín
                        </h2>
                    </div>
                    <div>
                        <Image
                            src={carouselImg3.src}
                            preview={false}
                            className={classes.img}
                        />
                        <h2 className={classes.subtitle}>
                            Thống kê trở nên dễ dàng hơn bao giờ hết
                        </h2>
                    </div>
                    <div>
                        <Image
                            src={carouselImg4.src}
                            preview={false}
                            className={classes.img}
                        />
                        <h2 className={classes.subtitle}>
                            Theo dõi thông tin đăng kiểm trên toàn quốc
                        </h2>
                    </div>
                </Carousel>
            </ConfigProvider>
        </div>
    );
};

export default IntroCarousel;
