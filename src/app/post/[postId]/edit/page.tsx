import { getPost } from 'src/libs/postHandler';
import { Form } from 'src/components/Form';
import { type PostParams } from '../page';

export const metadata = {
	title: 'Edit post',
};

export default async function EditPostPage({ params: { postId } }: PostParams) {
	const post = await getPost(postId);

	return (
		<>
			<h2 className='text-center mt-10'>
				Edit Post
			</h2>
			<div>
				<Form
					postData={post}
					type='update'
					buttonLabel='Back to post'
					closeHref={`/post/${postId}`}
				/>
			</div>
		</>
	);
}