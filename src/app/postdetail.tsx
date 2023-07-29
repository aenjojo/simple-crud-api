import { type SetStateAction } from 'react';
import { type ResultBody } from 'src/libs/postHandler';
import { type Page, type GoTo } from './post';
import { Button } from 'src/components/Button';

type PostDetailProps = {
	currPost: number;
	posts: ResultBody[];
	setPosts: (value: SetStateAction<ResultBody[]>) => void;
	setPage: (value: SetStateAction<Page>) => void;
	setTempPost: (value: SetStateAction<ResultBody>) => void;
	setShowModal: (value: SetStateAction<boolean>) => void;
	setGoTo: (value: SetStateAction<GoTo>) => void;
};

export const PostDetail = ({ currPost, posts, setPosts, setPage, setTempPost, setShowModal, setGoTo }: PostDetailProps) => (
	<>
		<h2 className='w-full md:max-w-3xl m-auto text-center mt-10 px-4 capitalize'>
			{posts.find(post => post.id === currPost)?.title}
		</h2>
		<div className='w-full md:max-w-[49rem] mx-auto my-10 text-lg px-4'>
			<p>
				{posts.find(post => post.id === currPost)?.body}
			</p>
			<div className='flex flex-row justify-between mt-8'>
				<div>
					<Button
						label='Back to Menu'
						variant='secondary'
						onClick={() => setPage('menu')}
					/>
				</div>
				<div className='flex flex-row justify-end gap-2'>
					<Button
						label='Edit'
						variant='secondary'
						onClick={() => {
							setPage('edit');
							setTempPost({ ...posts.find(post => post.id === currPost)! });
						}}
					/>
					<Button
						label='Delete'
						variant='danger'
						onClick={() => {
							const index = posts.findIndex(post => post.id === currPost);

							setShowModal(true);
							setGoTo('menu');
							setPosts([
								...posts.slice(0, index),
								...posts.slice(index + 1),
							]);
						}}
					/>
				</div>
			</div>
		</div>
	</>
);