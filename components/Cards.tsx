import Card from './Card';
import { IArticle } from '../interfaces/Article';
import { ICardProps } from '../interfaces/Card';
import { useEffect, useRef, useState } from 'react';
import { getArticles } from '@/services/get-articles';
import Spinner from './Spinner';

const transformResponse = (response: IArticle): ICardProps => ({
	imageUrl: response.jetpack_featured_media_url ?? '/image.webp',
	date: response.date ?? new Date(),
	title: response?.title?.rendered ?? 'Unknown title',
	excerpt: response?.excerpt?.rendered ?? '<p>Unknown excerpt</p>',
	cta: response?.id?.toString() ?? crypto.randomUUID(),
	creator: response?.authors?.length ? `${response.authors[0]}` : 'Unknown',
});

const Articles = () => {
	const [articles, setArticles] = useState<ICardProps[]>([]);
	const [loading, setLoading] = useState(false);
	const ref = useRef(null); // could be used to show paginated results

	useEffect(() => {
		setLoading(true);
		getArticles()
			.then((articles) => {
				const allResults: ICardProps[] = [];
				articles.forEach((article) => {
					if (article.id) allResults.push(transformResponse(article));
				});
				setArticles([...allResults]);
			})
			.finally(() => setLoading(false));
	}, []);

	return loading ? (
		<Spinner />
	) : (
		<div
			className='grid'
			ref={ref}
		>
			{articles.map((article) => (
				<Card
					key={article.cta}
					{...article}
				/>
			))}
		</div>
	);
};
export default Articles;
