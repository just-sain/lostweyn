import { Slider } from '@/components/slider';
import { GetStaticProps } from 'next';
import { Slider as SliderType } from 'typing';

interface Props {
	slider: SliderType[];
}

const Home = ({ slider }: Props) => {
	return (
		<>
			<div className='bg-welcome-image z-0' />

			<section className='max-w-lg py-20 max-xl:px-6 z-10 absolute top-1/2 left-1/2 -translate-x-1/2'>
				<div className='flex justify-center items-center gap-4'>
					<div className='text-gray-300 uppercase text-sm'>MINECRAFT</div>
					<div className='w-2 h-2 bg-gray-300' />
					<div className='text-gray-300 uppercase text-sm'>КОМАНДА</div>
					<div className='w-2 h-2 bg-gray-300' />
					<div className='text-gray-300 uppercase text-sm'>ВЫЖИВАНИЯ</div>
				</div>
				<h1 className='mt-4 text-white text-center text-7xl'> Майнкрафт сервер</h1>
				<div className='mt-12 grid grid-cols-3 gap-4'>
					<div className='min-w-[120px] py-4 px-6 rounded-xl border border-primary shadow-lg shadow-primary'>
						<b className='text-base font-light text-gray-400'>Онлайн</b>
						<p className='mt-2 flex justify-start items-center gap-2 text-white font-medium'>100 тысяч +</p>
					</div>
					<div className='min-w-[120px] py-4 px-6 rounded-xl border border-primary shadow-lg shadow-primary'>
						<b className='text-base font-light text-gray-400'>Версия</b>
						<p className='mt-2 flex justify-start items-center gap-2 text-white font-medium'>1.17.1v</p>
					</div>
					<div className='min-w-[120px] py-4 px-6 rounded-xl border border-primary shadow-lg shadow-primary'>
						<b className='text-base font-light text-gray-400'>Статус</b>
						<p className='mt-2 flex justify-start items-center gap-2 text-white font-medium'>Активно</p>
					</div>
				</div>
			</section>

			<div className='pt-[900px] relative'>
				<section className='w-[80%] px-6 my-12 mx-auto flex justify-around items-stretch gap-12 rounded-3xl  bg-secondary text-white max-w-screen-xl py-12 max-xl:px-6'>
					<div className='drop-shadow-md shadow-white text-lg font-bold'>
						<div className='text-white text-5xl font-extrabold'>100 +</div>
						Модов
					</div>
					<div className='indent-4 text-lg font-medium'>
						<h2 className='indent-0 text-2xl font-bold'>Наши моды: </h2>
						<p>mode 1, mode 2, mode 3, mode 3...</p>
					</div>
				</section>

				<section className='mt-44 w-full h-screen relative'>
					<div className='bg-info-image z-0' />
					<div className='relative max-w-screen-xl py-12 max-xl:px-6 mx-auto'>
						<Slider data={slider} />
					</div>
				</section>
			</div>
		</>
	);
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
	// mock data
	const slider: SliderType[] = [
		{
			id: 0,
			name: 'gvjvkhjiouh',
			src: '/bg-1.jpg',
			link: '/',
		},
		{
			id: 1,
			name: 'string',
			src: '/bg-2.jpg',
			link: '/',
		},
		{
			id: 2,
			name: 'string',
			src: '/bg-3.jpg',
			link: '/',
		},
		{
			id: 3,
			name: 'string',
			src: '/bg-4.jpg',
			link: '/',
		},
		{
			id: 4,
			name: 'string',
			src: '/bg-5.jpg',
			link: '/',
		},
		{
			id: 5,
			name: 'string',
			src: '/bg-6.jpg',
			link: '/',
		},
		{
			id: 6,
			name: 'string',
			src: '/bg-7.jpg',
			link: '/',
		},

		{
			id: 7,
			name: 'string',
			src: '/bg-8.jpg',
			link: '/',
		},

		{
			id: 8,
			name: 'string',
			src: '/bg-9.jpg',
			link: '/',
		},
	];

	return {
		props: {
			slider,
		},
		revalidate: 15,
	};
};
