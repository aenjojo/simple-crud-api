import Post from './post';

export const metadata = {
	title: 'My Blog',
};

export default async function HomePage() {
	return (
		<Post />
	);
}