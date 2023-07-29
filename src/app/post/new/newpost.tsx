'use client';

import { useState } from 'react';
import { Button } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { Modal } from 'src/components/Modal';
import { createPost, type ResultBody } from 'src/libs/postHandler';

export default function NewPost() {
	const [mode, setMode] = useState<'create' | 'read' | 'delete'>('create');
	const [showModal, setShowModal] = useState(false);
	const [post, setPost] = useState<ResultBody>({
		id: 101,
		title: '',
		body: '',
	});
	const [tempPost, setTempPost] = useState<ResultBody>({ ...post });

	const handleCreate = async () => {
		setPost({
			...post,
			title: tempPost.title,
			body: tempPost.body,
		});

		const result = await createPost({
			title: post.title,
			body: post.body,
		});

		setShowModal(result ? true : false);
	}

	const handleDelete = async () => {
		setPost({
			...post,
			title: '',
			body: '',
		});

		setMode('delete');
		setShowModal(true);
	}

	if (post.title === '' && mode === 'read') {
		return (
			<h2 className='w-full md:max-w-3xl m-auto text-center mt-10 px-4 capitalize'>
				Loading...
			</h2>
		);
	}

	return (
		<>
			{mode !== 'delete' ? (
				<>
					<h2 className='w-full md:max-w-3xl m-auto text-center mt-10 px-4 capitalize'>
						{mode === 'create' ? 'Create Post' : post.title}
					</h2>
					{mode === 'read' ? (
						<div className='w-full md:max-w-[49rem] mx-auto my-10 text-lg px-4'>
							<p>{post.body}</p>
							<div className='flex flex-row justify-end gap-2 mt-8'>
								<Button
									label='Edit'
									variant='secondary'
									onClick={() => setMode('create')}
								/>
								<Button
									label='Delete'
									variant='danger'
									onClick={handleDelete}
								/>
							</div>
						</div>
					) : mode === 'create' ? (
						<div>
							<Form
								postData={tempPost}
								setPost={setTempPost}
								handleSubmit={handleCreate}
								handleCancel={() => {
									setMode('read');
									setTempPost({ ...post });
								}}
							/>
						</div>
					) : false}
				</>
			) : false}
			{showModal ? (
				<Modal
					message={`The post data is ${mode === 'delete' ? 'deleted' : 'saved'}`}
					buttonLabel='Close'
					closeFunc={() => {
						setShowModal(false);
						setMode('read');
					}}
				/>
			) : false}
		</>
	);
}