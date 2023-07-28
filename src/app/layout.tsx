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
				<header className='bg-emerald-400'>
					<div className='container m-auto py-2 px-4 flex justify-between'>
						<h1>
							<Link href='/'>My Blog</Link>
						</h1>
						<ButtonLink
							label='New post'
							href='/new-post'
						/>
					</div>
				</header>
				<main>
					<div className='w-full lg:max-w-4xl m-auto'>
						{children}
					</div>
				</main>
				<footer>
					<div className='container m-auto pt-4 pb-10'>
						<p className='text-center'>© Josua Fernando 2023</p>
					</div>
				</footer>
			</body>
		</html>
	);
}