import { NewsArticle } from "@/models/NewsArticles"
import Link from "next/link";
import Image from 'next/image'
import { Card } from "react-bootstrap";
import placeHolderImage from '@/assets/images/placeholder.png';
import styles from '@/styles/NewsArticlesEntry.module.css';

interface NewsArticlesEntryProps {
    article: NewsArticle,
}

export const NewsArticlesEntry = ({ article: { title, description, url, urlToImage } }: NewsArticlesEntryProps) => {
    const validImageUrl = (urlToImage?.startsWith('http://') || urlToImage?.startsWith('https://')) ? urlToImage : undefined;
    return (
        <Card className="h-100">
            {/* <Card.Img src={validImageUrl} variant="top" /> */}
            <Image src={validImageUrl || placeHolderImage} width={500} height={200} alt="news article image" className={`card-img-top ${styles.image}`} />
            <Card.Body>
                <Card.Title>
                    <Link href={url}>
                        {title}
                    </Link>
                </Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}