import Image from "next/image";

export interface CreditProps {
	img: string;
	username: string;
	url: string;
}

export default function Credit({ img, username, url }: CreditProps) {
	return (
		<div className='flex items-center flex-start gap-2 border border-gray-800 p-2 rounded hover:scale-105 hover:cursor-pointer transition'>
			<Image src={img} alt={username} className='object-fill rounded-full' width={30} height={30} />
			<div>
				<a href={url} target='_blank' rel='noreferrer' className='font-bold'>
					@{username}
				</a>
			</div>
		</div>
	);
}
