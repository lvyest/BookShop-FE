export interface Book {
    id: number;
    title: string,
    img: 7,
    category_id: 0,
    form: string;
    isbn: string;
    summary: string;
    detail: string;
    author: string;
    pages: number;
    contents: string;
    price: number;
    likes: number;
    pubDate: string;
}

export interface BookDetail extends Book {
    categoryName: string;
    liked: boolean;
}