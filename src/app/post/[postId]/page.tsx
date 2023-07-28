import { ButtonLink } from 'src/components/ButtonLink';
import { getPost } from 'src/libs/postHandler';

export type PostParams = {
	params: {
		postId: number;
	};
}

export const metadata = {
	title: 'Post detail',
};

export default async function PostPage({ params: { postId } }: PostParams) {
	const post = await getPost(postId);

	return (
		<>
			<h2 className='w-full md:max-w-3xl m-auto text-center mt-10 px-4 capitalize'>
				{post.title}
			</h2>
			<div className='w-full md:max-w-[49rem] mx-auto my-10 text-lg px-4'>
				<p>{post.body}</p>
				<div className='flex flex-row justify-end gap-2 mt-8'>
					<ButtonLink
						href={`/post/${postId}/edit`}
						label='Edit'
						type='secondary'
					/>
					<ButtonLink
						href={`/post/${postId}/delete`}
						label='Delete'
						type='danger'
					/>
				</div>
			</div>
		</>
	);
}