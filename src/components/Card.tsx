import { Link } from './Link';

type CardProps = {
	title: string;
	content: string;
	author: string;
	postId: number;
};

export function Card({ title, author, content, postId }: CardProps) {
	return (
		<div className={`
			w-full md:w-80 lg:w-96 p-4 rounded-lg flex flex-col gap-2
			bg-slate-50 shadow-lg hover:bg-slate-100 hover:shadow-xl
		`}>
			<div>
				<h3 className='line-clamp-2 capitalize'>
					{title}
				</h3>
				<p className='text-sm text-slate-700'>
					By {author}
				</p>
			</div>
			<div>
				<p className='line-clamp-3'>
					{content}
				</p>
				<Link
					href={`/post/${postId}`}
					label='Read more'
				/>
			</div>
		</div>
	);
}