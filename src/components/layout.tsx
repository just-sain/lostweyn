import { ReactNode } from 'react';
// components
import { Footer } from './footer';
import { Header } from './header';

// props
interface ILayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
	return (
		<div className='w-full h-full z-0 bg-black text-white'>
			<Header />
			<main className='w-full'>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
