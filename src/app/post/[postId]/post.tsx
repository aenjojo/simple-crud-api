'use client';

import { useState, useEffect } from 'react';
import { Button } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { Modal } from 'src/components/Modal';
import { getPost, updatePost, deletePost, type ResultBody } from 'src/libs/postHandler';

export type PostParams = {
	params: {
		postId: number;
	};
}

export default function Post({ params: { postId } }: PostParams) {
	const [mode, setMode] = useState<'read' | 'update' | 'delete'>('read');
	const [showModal, setShowModal] = useState(false);
	const [post, setPost] = useState<ResultBody>({
		id: postId ?? 1,
		title: '',
		body: '',
	});
	const [tempPost, setTempPost] = useState<ResultBody>({ ...post });

	useEffect(() => {
		getPost(postId).then(data => {
			setPost({ ...data });
			setTempPost({ ...data });
		});
	}, []);

	const handleUpdate = async () => {
		setPost({
			...post,
			title: tempPost.title,
			body: tempPost.body,
		});

		const result = await updatePost(post.id, {
			title: post.title,
			body: post.body,
		});

		setShowModal(result ? true : false);
	}

	const handleDelete = async () => {
		await deletePost(postId);

		setPost({
			...post,
			title: '',
			body: '',
		});

		setMode('delete');
		setShowModal(true);
	}

	if (post.title === '' && mode !== 'delete') {
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
						{mode === 'update' ? 'Edit Post' : post.title}
					</h2>
					{mode === 'read' ? (
						<div className='w-full md:max-w-[49rem] mx-auto my-10 text-lg px-4'>
							<p>{post.body}</p>
							<div className='flex flex-row justify-end gap-2 mt-8'>
								<Button
									label='Edit'
									variant='secondary'
									onClick={() => setMode('update')}
								/>
								<Button
									label='Delete'
									variant='danger'
									onClick={handleDelete}
								/>
							</div>
						</div>
					) : mode === 'update' ? (
						<div>
							<Form
								postData={tempPost}
								setPost={setTempPost}
								handleSubmit={handleUpdate}
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