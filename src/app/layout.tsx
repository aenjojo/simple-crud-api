import Link from 'next/link';
import '../styles/main.css';
import { ButtonLink } from 'src/components/ButtonLink';

type RootLayoutProps = {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en'>
			<body
				className='font-sans bg-slate-50 text-slate-950'
			>
				{children}
			</body>
		</html>
	);
}