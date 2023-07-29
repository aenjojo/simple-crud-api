import { type SetStateAction } from 'react';
import { type ResultBody } from 'src/libs/postHandler';
import { type Page } from './post';
import { Card } from 'src/components/Card';

type PostListProps = {
	posts: ResultBody[];
	setCurrPost: (value: SetStateAction<number>) => void;
	setPage: (value: SetStateAction<Page>) => void;
};

export const PostList = ({ posts, setCurrPost, setPage }: PostListProps) => (
	<>
		<h2 className='text-center mt-10'>
			All Posts
		</h2>
		<div className='flex flex-row flex-wrap gap-4 w-full md:max-w-[43rem] lg:max-w-[51rem] mx-auto my-10 px-4'>
			{posts.map(post => (
				<Card
					key={post.id}
					title={post.title}
					content={post.body}
					setPost={() => {
						setCurrPost(post.id);
						setPage('post');
					}}
				/>
			))}
		</div>
	</>
);