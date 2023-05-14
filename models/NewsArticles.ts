export interface NewsArticle {

    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage?: string,
    publisheAt: string,
    content: string,
}

export interface NewsResponse {
    articles:NewsArticle[],


}