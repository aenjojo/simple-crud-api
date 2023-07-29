import React from 'react';

type ButtonProps = {
	label: string;
	variant?: 'primary' | 'secondary' | 'danger';
	mode?: 'button' | 'link';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ label, variant, mode, ...props }: ButtonProps) {
	let buttonColor = '';
	let buttonStyle = '';
	
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
		default:
			buttonColor = '';
			break;
	}

	switch(mode) {
		case 'link':
			buttonStyle = 'text-blue-600 hover:underline decoration-2';
			break;
		case 'button':
		default:
			buttonStyle = 'px-4 py-2 font-medium border rounded';
			break;
	}

	return (
		<button
			className={`${buttonStyle} ${buttonColor}`}
			{...props}
		>
			{label}
		</button>
	);
}