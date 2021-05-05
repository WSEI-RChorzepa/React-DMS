export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostWithImage extends IPost {
  imageUrl: string;
  imageTitle: string;
}
