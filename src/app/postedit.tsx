import { type SetStateAction } from 'react';
import { type ResultBody } from 'src/libs/postHandler';
import { type Page, type GoTo } from './post';
import { Form } from 'src/components/Form';

type PostEditProps = {
	tempPost: ResultBody;
	setTempPost: (value: SetStateAction<ResultBody>) => void;
	posts: ResultBody[];
	setPosts: (value: SetStateAction<ResultBody[]>) => void;
	setPage: (value: SetStateAction<Page>) => void;
	setShowModal: (value: SetStateAction<boolean>) => void;
	setGoTo: (value: SetStateAction<GoTo>) => void;
};

export const PostEdit = ({ tempPost, setTempPost, posts, setPosts, setPage, setShowModal, setGoTo }: PostEditProps) => (
	<>
		<h2>
			Edit Post
		</h2>
		<div>
			<Form
				postData={tempPost}
				setPost={setTempPost}
				handleSubmit={() => {
					const newArray = posts.slice();
					const index = posts.findIndex(post => post.id === tempPost.id);
					
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
					setPage('post');
				}}
			/>
		</div>
	</>
);