'use client';

import { useState, useEffect } from 'react';
import { getAllPosts, type ResultBody } from 'src/libs/postHandler';
import { Button } from 'src/components/Button';
import { Modal } from 'src/components/Modal';
import { PostList } from './postlist';
import { PostDetail } from './postdetail';
import { PostEdit } from './postedit';
import { PostCreate } from './postcreate';

export type Page = 'menu' | 'post' | 'edit' | 'new';
export type GoTo = 'post' | 'menu';

export const EMPTY_POST = {
	id: 0,
	title: '',
	body: '',
};

export default function Post() {
	const [posts, setPosts] = useState<ResultBody[]>([]);
	const [tempPost, setTempPost] = useState<ResultBody>({ ...EMPTY_POST });
	const [currPost, setCurrPost] = useState(0);
	const [page, setPage] = useState<Page>('menu');
	const [showModal, setShowModal] = useState(false);
	const [goTo, setGoTo] = useState<GoTo>('post');

	useEffect(() => {
		getAllPosts().then(postsData => {
			const newData = postsData.map(postData => ({
				id: postData.id,
				title: postData.title,
				body: postData.body,
			}));

			return setPosts([ ...newData ]);
		});
	}, []);

	return (
		<>
			<header className='bg-emerald-400'>
				<div className='container m-auto py-2 px-4 flex justify-between'>
					<h1>My Blog</h1>
					<Button
						label='New post'
						variant='primary'
						onClick={() => {
							setPage('new');
							setTempPost({
								...EMPTY_POST,
								id: posts[posts.length - 1].id + 1,
							});
						}}
					/>
				</div>
			</header>
			<main>
				<div className='w-full lg:max-w-4xl m-auto'>
					{page === 'menu' ? <PostList posts={posts} setCurrPost={setCurrPost} setPage={setPage} /> : false}
					{page === 'post' ? <PostDetail currPost={currPost} posts={posts} setPosts={setPosts} setPage={setPage} setTempPost={setTempPost} setShowModal={setShowModal} setGoTo={setGoTo} /> : false}
					{page === 'edit' ? <PostEdit tempPost={tempPost} setTempPost={setTempPost} posts={posts} setPosts={setPosts} setPage={setPage} setShowModal={setShowModal} setGoTo={setGoTo} /> : false}
					{page === 'new' ? <PostCreate tempPost={tempPost} setTempPost={setTempPost} posts={posts} setPosts={setPosts} setPage={setPage} setShowModal={setShowModal} setGoTo={setGoTo} /> : false}
				</div>
				{showModal ? (
					<Modal
						message={`The post data is ${goTo === 'post' ? 'saved' : 'deleted'}`}
						buttonLabel={`Back to ${goTo === 'post' ? 'Post' : 'Menu'}`}
						closeFunc={() => {
							setShowModal(false);

							if (goTo === 'post') {
								setCurrPost(tempPost.id);
								setPage('post');
							}
							if (goTo === 'menu') {
								setPage('menu');
							}
						}}
					/>
				) : false}
			</main>
			<footer>
				<div className='container m-auto pt-4 pb-10'>
					<p className='text-center'>© Josua Fernando 2023</p>
				</div>
			</footer>
		</>
	);
}
