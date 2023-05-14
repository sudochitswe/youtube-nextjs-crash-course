import Head from 'next/head'
import { Inter } from 'next/font/google'
import { GetServerSideProps } from 'next'
import { NewsArticle, NewsResponse } from '@/models/NewsArticles'
import { NewsArticlesGrid } from '@/components/NewsArticlesGrid'
const inter = Inter({ subsets: ['latin'] })

interface BreakIngNewsPageProps {
  newsArticles: NewsArticle[],
}

export const getServerSideProps: GetServerSideProps<BreakIngNewsPageProps> = async () => {
  console.log('api key is', process.env.NEWS_API_KEY);
  //59f067f0bb334984ad1c90a24d24b8af
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`);
  const newsResponse: NewsResponse = await response.json();
  return {
    props: {
      newsArticles: newsResponse.articles ?? []
    }
  }
}

export default function BreakIngNewsPage({ newsArticles }: BreakIngNewsPageProps) {
  return (
    <>
      <Head>
        <title key="title" >Breaking News - NextJS News App</title>
      </Head>
      <main>
        <h1>Breaking News</h1>
        <NewsArticlesGrid articles={newsArticles}></NewsArticlesGrid>
      </main>
    </>
  )
}
