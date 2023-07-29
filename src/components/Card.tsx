import { Button } from './Button';

type CardProps = {
	title: string;
	content: string;
	setPost(): void;
};

export function Card({ title, content, setPost }: CardProps) {
	return (
		<div className={`
			w-full md:w-80 lg:w-96 p-4 rounded-lg flex flex-col gap-2
			bg-slate-50 shadow-lg hover:bg-slate-100 hover:shadow-xl
		`}>
			<h3 className='line-clamp-2 capitalize'>
				{title}
			</h3>
			<div>
				<p className='line-clamp-3'>
					{content}
				</p>
				<Button
					label='Read more'
					mode='link'
					onClick={setPost}
				/>
			</div>
		</div>
	);
}