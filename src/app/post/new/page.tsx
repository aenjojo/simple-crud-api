import NewPost from './newpost';

export const metadata = {
	title: 'Post',
};

export default async function NewPostPage() {
	return (
		<>
			<NewPost />
		</>
	);
}