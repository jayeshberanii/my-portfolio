import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import EXT1 from '../../../public/ext1.png';
import EXT2 from '../../../public/ext2.png';
import EXT3 from '../../../public/ext3.png';
import EXT4 from '../../../public/ext4.png';
import EXT5 from '../../../public/ext5.png';
import EXT6 from '../../../public/ext6.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const PreviewSlider = () => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="centered-slide-carousel"
      >
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            <Image layout='fill' src={EXT1} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            {/* <span className="text-3xl font-semibold text-indigo-600">Slide 2</span>
             */}
             <Image layout='fill' src={EXT2} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            {/* <span className="text-3xl font-semibold text-indigo-600">Slide 3</span> */}
            <Image layout='fill' src={EXT3} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            {/* <span className="text-3xl font-semibold text-indigo-600">Slide 4</span> */}
            <Image layout='fill' src={EXT4} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            {/* <span className="text-3xl font-semibold text-indigo-600">Slide 5</span> */}
            <Image layout='fill' src={EXT5} alt="image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
            {/* <span className="text-3xl font-semibold text-indigo-600">Slide 6</span> */}
            <Image layout='fill' src={EXT6} alt="image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PreviewSlider;
