import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Parallax, Pagination, Navigation } from "swiper";
import imgage from '../../images/sher.jpg'
import imgageg from '../../images/sher1.jpg'

function swiper() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={60}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <Swiper
            slidesPerView={3}
            spaceBetween={60}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
            <SwiperSlide>“
                Very interactive, i am not getting bored, enjoying ;) Thanks!

                “</SwiperSlide>
        </Swiper>
            </Swiper>
        </>
    );
}

export default swiper