import { ButtonLink } from './ButtonLink';

type ModalProps = {
	message: string;
	buttonLabel: string;
	closeHref: string;
}

export function Modal({ message, buttonLabel, closeHref }: ModalProps) {
	return (
		<div className='absolute m-0 p-0 top-0 left-0 w-screen h-screen bg-slate-700 bg-opacity-30 flex justify-center items-center'>
			<div className='fixed p-4 w-64 md:w-96 rounded-lg bg-slate-50 shadow-xl'>
				<div className='flex flex-col gap-2'>
					<h3>Success</h3>
					<p>{message}</p>
				</div>
				<div className='flex flex-row justify-end mt-4'>
					<ButtonLink
						label={buttonLabel}
						type='primary'
						href={closeHref}
					/>
				</div>
			</div>
		</div>
	);
}