import NextLink from 'next/link';

type LinkProps = {
	href: string;
	label: string;
};

export function Link({ href, label }: LinkProps) {
	return (
		<NextLink
			href={href}
			className='text-blue-600 hover:underline decoration-2'
		>
			{label}
		</NextLink>
	);
}