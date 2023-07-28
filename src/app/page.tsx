import { getAllPosts } from 'src/libs/postHandler';
import { Card } from 'src/components/Card';

export const metadata = {
	title: 'Home',
};

export default async function HomePage() {
	const posts = await getAllPosts();

	return (
		<>
			<h2 className='text-center mt-10'>
				All Posts
			</h2>
			<div className='flex flex-row flex-wrap gap-4 w-full md:max-w-[43rem] lg:max-w-[51rem] mx-auto my-10 px-4'>
				{posts.map(post => (
					<Card
						key={post.id}
						postId={post.id}
						title={post.title}
						content={post.body}
					/>
				))}
			</div>
		</>
	);
}