import React, { SetStateAction } from 'react';
import { InputField } from './InputField';
import { TextArea } from './TextArea';
import { Button } from './Button';
import { type ResultBody } from 'src/libs/postHandler';

type FormProps = {
	postData: ResultBody;
	setPost: (value: SetStateAction<ResultBody>) => void;
	handleSubmit(): void;
	handleCancel(): void;
}

export function Form({ postData, setPost, handleCancel, handleSubmit }: FormProps) {
	return (
		<form className='w-full flex flex-col gap-4 p-4'>
			<InputField
				label='Title'
				name='title'
				value={postData.title}
				onChange={(e) => setPost({
					...postData,
					title: e.target.value,
				})}
			/>
			<TextArea
				label='Content'
				name='content'
				value={postData.body}
				onChange={(e) => setPost({
					...postData,
					body: e.target.value,
				})}
			/>
			<div className='flex flex-row justify-end gap-2'>
				<Button
					label='Cancel'
					type='button'
					variant='secondary'
					onClick={handleCancel}
				/>
				<Button
					label='Save'
					type='button'
					variant='primary'
					onClick={handleSubmit}
				/>
			</div>
		</form>
	);
}