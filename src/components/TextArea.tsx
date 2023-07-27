import React from 'react';

type TextAreaProps = {
	label: string;
	name: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({ label, name, ...props }: TextAreaProps) {
	return (
		<div className='flex flex-col gap-1'>
			<label
				htmlFor={name}
				className='font-medium text-lg'
			>
				{label}
			</label>
			<textarea
				name={name}
				className='h-28 px-2 py-1 border border-slate-400 rounded outline-blue-600'
				{...props}
			></textarea>
		</div>
	);
}