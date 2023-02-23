import axios from '@/services/axios';
import { IArticle, IDetailedArticle } from '@/interfaces/Article';

const getArticles = async () =>
	axios
		.get('/posts', {
			params: {
				per_page: 60,
				context: 'embed',
			},
			timeout: 15000,
		})
		.then((res) => res.data as IArticle[]);

const getArticleByID = async (id: string) =>
	axios
		.get('/posts/' + id, {
			timeout: 15000,
		})
		.then((res) => res.data as IDetailedArticle);

export { getArticles, getArticleByID };
