import { getArticleByID } from '@/services/get-articles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';
const Post = () => {
	const router = useRouter();
	const { postID } = router.query;
	const [title, setTitle] = useState('');
	const [status, setStatus] = useState('Pending');
	const [author, setAuthor] = useState(-1);
	const [tags, setTags] = useState<string[]>([]);
	const [categories, setCategories] = useState<string[]>([]);
	const [content, setContent] = useState<string>('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (typeof postID === 'string') {
			setLoading(true);
			getArticleByID(postID)
				.then((article) => {
					setTitle(article?.title?.rendered ?? 'Unknown title');
					setStatus(article?.status ?? 'Unknown status');
					setAuthor(article?.author);
					setTags([...(article?.tags ?? [])]);
					setCategories([...(article?.categories ?? [])]);
					setContent(article?.content?.rendered ?? 'Unknown content');
				})
				.finally(() => setLoading(false));
		}
	}, [postID]);
	return loading ? (
		<Spinner />
	) : (
		<div className='post'>
			<h1 className='post-header'>{title ?? 'Unknown Title'}</h1>
			<p>
				<strong>Status: </strong>
				{status}
			</p>
			<p>
				<strong>Author: </strong>
				{author}
			</p>
			<p>
				<strong>Tags: </strong>
				{tags.join(' | ')}
			</p>
			<p>
				<strong>Categories: </strong>
				{categories.join(' | ')}
			</p>
			<article
				dangerouslySetInnerHTML={{
					__html: content,
				}}
			></article>
		</div>
	);
};
export default Post;
