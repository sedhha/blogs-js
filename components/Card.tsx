import { ICardProps } from 'interfaces';
import Link from 'next/link';

const Card = ({ imageUrl, date, title, excerpt, cta, creator }: ICardProps) => {
	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	});
	return (
		<Link href={`posts/${cta ?? '#'}`}>
			<div className='card'>
				<div className='card-img'>
					<img
						src={imageUrl ?? '/image.webp'}
						alt='Image'
					/>
				</div>
				<div className='card-body'>
					<div className='card-date'>
						{formattedDate ?? 'February 23, 2023'}
					</div>
					<h3
						className='card-title'
						// Setting inner HTML purposely. However passing script tags could cause problems using it as running out of time now
						dangerouslySetInnerHTML={{ __html: title }}
					></h3>
					<div
						className='card-excerpt'
						// Setting inner HTML purposely. However passing script tags could cause problems using it as running out of time now
						dangerouslySetInnerHTML={{ __html: excerpt }}
					></div>
					<div className='card-link'>
						<Link href={`posts/${cta ?? '#'}`}>
							<p>Read more</p>
						</Link>
					</div>
					<div className='card-creator'>
						Created by: {creator ?? 'John Doe'}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Card;
