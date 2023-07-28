import { Form } from 'src/components/Form';

export const metadata = {
	title: 'Create post',
};

export default async function NewPostPage() {
	return (
		<>
			<h2 className='text-center mt-10'>
				New Post
			</h2>
			<div>
				<Form
					type='create'
					buttonLabel='Back to home'
					closeHref='/'
				/>
			</div>
		</>
	);
}