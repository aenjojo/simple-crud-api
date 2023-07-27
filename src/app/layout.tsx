import '../styles/main.css';

type RootLayoutProps = {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en'>
			<body
				className='font-sans bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50'
			>
				{children}
			</body>
		</html>
	);
}