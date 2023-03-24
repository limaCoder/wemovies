export interface MovieModel {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

export interface MovieProps {
  movie: MovieModel;
}

export interface MovieState {
  id: string;
  image: string;
  title: string;
  price: number;
}
