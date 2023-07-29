import { type SetStateAction } from 'react';
import { type ResultBody } from 'src/libs/postHandler';
import { type Page, type GoTo } from './post';
import { Form } from 'src/components/Form';

type PostCreateProps = {
	tempPost: ResultBody;
	setTempPost: (value: SetStateAction<ResultBody>) => void;
	posts: ResultBody[];
	setPosts: (value: SetStateAction<ResultBody[]>) => void;
	setPage: (value: SetStateAction<Page>) => void;
	setShowModal: (value: SetStateAction<boolean>) => void;
	setGoTo: (value: SetStateAction<GoTo>) => void;
};

export const PostCreate = ({ tempPost, setTempPost, posts, setPosts, setPage, setShowModal, setGoTo }: PostCreateProps) => (
	<>
		<h2>
			Create Post
		</h2>
		<div>
			<Form
				postData={tempPost}
				setPost={setTempPost}
				handleSubmit={() => {
					const newArray = posts.slice();
					const index = posts.length;
					
					newArray[index] = {
						id: tempPost.id,
						title: tempPost.title,
						body: tempPost.body,
					};
					
					setShowModal(true);
					setGoTo('post');
					setPosts([ ...newArray ]);
				}}
				handleCancel={() => {
					setPage('menu');
				}}
			/>
		</div>
	</>
);