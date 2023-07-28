import React from 'react';

type ButtonProps = {
	label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ label, ...props }: ButtonProps) {
	return (
		<button
			className={`
				px-4 py-2 font-medium border rounded
				bg-emerald-500 text-slate-50 border-emerald-500 hover:bg-emerald-600
			`}
			{...props}
		>
			{label}
		</button>
	);
}