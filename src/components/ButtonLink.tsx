import NextLink from 'next/link';

type ButtonLinkProps = {
	href: string;
	label: string;
	type?: 'primary' | 'secondary' | 'danger';
};

export function ButtonLink({ href, label, type = 'primary' }: ButtonLinkProps) {
	let buttonColor = '';
	
	switch(type) {
		case 'primary':
			buttonColor = 'bg-emerald-500 text-slate-50 border-emerald-500 hover:bg-emerald-600';
			break;
		case 'secondary':
			buttonColor = 'bg-transparent border-transparent text-slate-700 hover:bg-slate-200';
			break;
		case 'danger':
			buttonColor = 'bg-transparent border-transparent text-red-600 hover:bg-red-200';
			break;
	}

	return (
		<NextLink
			href={href}
			className={`px-4 py-2 font-medium border rounded ${buttonColor}`}
		>
			{label}
		</NextLink>
	);
}