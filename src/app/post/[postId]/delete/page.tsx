import { Modal } from 'src/components/Modal';
import { deletePost } from 'src/libs/postHandler';
import PostPage, { type PostParams } from '../page';

export const metadata = {
	title: 'Delete post',
};

export default async function DeletePostPage({ params: { postId } }: PostParams) {
	const result = await deletePost(postId);

	return (
		<>
			<PostPage params={{ postId: postId }} />
			{JSON.stringify(result) === '{}' ? (
				<Modal
					message='The post data is deleted'
					buttonLabel='Back to home'
					closeHref='/'
				/>
			) : false}
		</>
	);
}