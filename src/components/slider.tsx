// slider
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slider as SliderType } from 'typing';

interface Props {
	data: SliderType[];
}

export const Slider = ({ data }: Props) => {
	return (
		<>
			<h1 className='text-center text-3xl mb-10'>Гайды</h1>
			<Swiper className='w-full' slidesPerView={3} centeredSlides={true} spaceBetween={10} grabCursor={true} loop>
				{data.map((d, i) => (
					<SwiperSlide key={d.id}>
						<div className='text-center text-white text-lg rounded-xl group bg-black/10  hover:bg-black/40 transition-all hover:text-primary'>
							<img className='w-full h-auto rounded-xl ' src={d.src} alt={d.name} />
							<Link className='mt-4 transition-colors text-2xl' href={d.link}>
								{d.name}
							</Link>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
// BORYA GDE MEDIA SERVER (DeJavu)
