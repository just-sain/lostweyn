import { DetailedHTMLProps, HTMLAttributes } from 'react';

// footer
interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Footer = ({ className, ...props }: Props) => {
	return (
		<footer className={`w-full mt-72 h-96 bg-card ${className}}`} {...props}>
			footer any text
		</footer>
	);
};
