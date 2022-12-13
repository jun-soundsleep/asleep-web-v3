import { createContext } from 'react';
import { NewsListType } from '../../type/news';

export const NewsContext = createContext<NewsListType[]>([]);
