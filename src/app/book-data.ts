import { Book } from './book.model';

export const BOOKS: Book[] = [
    {
      id: 1,  
      title: '1984',
        author: 'George Orwell',
        price: 8.99,
        description: 'A dystopian social science fiction novel...',
        image: '/images/1984.jpg',
      },

  {
    id: 2,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 10.99,
    description: 'A novel set in the Jazz Age...',
    image: '/images/great-gatsby.jpg',
  },
  
  {
    id:3,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    price: 24.99,
    description: 'One of the greatest fantasy novels of all time...',
    image: '/images/lord-of-the-ring.jpg'
  }
];