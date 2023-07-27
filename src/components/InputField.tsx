import React from 'react';

type InputFieldProps = {
	label: string;
	name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function InputField({ label, name, ...props }: InputFieldProps) {
	return (
		<div className='flex flex-col gap-1'>
			<label
				htmlFor={name}
				className='font-medium text-lg'
			>
				{label}
			</label>
			<input
				name={name}
				type='text'
				className='px-2 py-1 border border-slate-400 rounded outline-blue-600'
				{...props}
			/>
		</div>
	);
}