import Post, { PostParams } from './post';

export const metadata = {
	title: 'Post',
};

export default async function PostPage({ params: { postId } }: PostParams) {
	return (
		<>
			<Post params={{ postId: postId }} />
		</>
	);
}