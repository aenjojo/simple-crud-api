import React from 'react';

type ButtonProps = {
	label: string;
	variant?: 'primary' | 'secondary' | 'danger';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ label, variant, ...props }: ButtonProps) {
	let buttonColor = '';
	
	switch(variant) {
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
		<button
			className={`px-4 py-2 font-medium border rounded ${buttonColor}`}
			{...props}
		>
			{label}
		</button>
	);
}