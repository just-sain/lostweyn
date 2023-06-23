// components
import Image from 'next/image';
import Link from 'next/link';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FaNewspaper, FaServer } from 'react-icons/fa';
import { GiRuleBook } from 'react-icons/gi';
import { IoMdSchool } from 'react-icons/io';
import { IoStatsChart } from 'react-icons/io5';

const menuData = [
	{
		Icon: IoMdSchool,
		link: '/guides',
		name: 'гайды',
	},
	{
		Icon: FaServer,
		link: '/servers',
		name: 'сервера',
	},
	{
		Icon: GiRuleBook,
		link: '/rule',
		name: 'правила',
	},
	{
		Icon: IoStatsChart,
		link: '/info',
		name: 'информация',
	},
	{
		Icon: FaNewspaper,
		link: '/news',
		name: 'новости',
	},
];

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Header = ({ className, ...props }: Props) => {
	return (
		<header className={`w-full p-4 z-50 fixed top-0 left-0 ${className}`} {...props}>
			<div className='max-w-screen-lg lg:px-4 h-full mx-auto px-8 py-2 flex justify-between items-center gap-4 backdrop-blur-sm rounded-3xl bg-white/10'>
				<div className='flex items-center gap-4'>
					<Link href='/' className='flex justify-start items-center gap-4 text-xl'>
						<Image src='/logo.png' alt='lostweyn' width={50} height={50} />
						Lostweyn
					</Link>
				</div>

				<menu className='flex items-center gap-4 justify-end'>
					{menuData.map(m => (
						<li className='transition-all relative z-20 order-[0] top-8 rounded-lg hover:top-12 px-4 py-2'>
							<Link href={m.link}>
								<m.Icon className='mx-auto text-3xl' />
								<span className='block text-center'>{m.name}</span>
							</Link>
						</li>
					))}
				</menu>

				<div className='flex items-center gap-4 justify-end'>
					<Link className='py-2 px-4 bg-white rounded-md text-black text-base' href='/download'>
						присоединиться
					</Link>
				</div>
			</div>
		</header>
	);
};
