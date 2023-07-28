'use client';

import React, { useState } from 'react';
import { InputField } from './InputField';
import { TextArea } from './TextArea';
import { Button } from './Button';
import { createPost, updatePost, type ResultBody } from 'src/libs/postHandler';
import { Modal } from './Modal';

type FormProps = {
	postData?: ResultBody;
	buttonLabel: string;
	closeHref: string;
	type: 'create' | 'update';
}

export function Form({ postData, closeHref, buttonLabel, type }: FormProps) {
	const [title, setTitle] = useState(postData?.title ?? '');
	const [content, setContent] = useState(postData?.body ?? '');
	const [isShow, setIsShow] = useState(false);

	const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

	const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent(event.target.value);
	};

	const handleSubmit = async () => {
		let result;

		switch(type) {
			case 'create':
				result = await createPost({
					title: title,
					body: content,
				});
				break;
			case 'update':
				result = await updatePost(postData!.id, {
					title: title,
					body: content,
				});
				break;
		}

		if (Boolean(result)) {
			setIsShow(true);
		}
	}

	return (
		<>
			<form className='w-full flex flex-col gap-4 p-4'>
				<InputField
					label='Title'
					name='title'
					value={title}
					onChange={handleTitleChange}
				/>
				<TextArea
					label='Content'
					name='content'
					value={content}
					onChange={handleContentChange}
				/>
				<div className='flex justify-end'>
					<Button
						label='Save'
						type='button'
						onClick={handleSubmit}
					/>
				</div>
			</form>
			{isShow ? (
				<Modal
					message='The post data is saved'
					buttonLabel={buttonLabel}
					closeHref={closeHref}
				/>
			) : false}
		</>
	);
}