import { Comments } from './comment';
import { User } from './user';

export interface Theme {
  subscribers: string[];
  posts: Comments[];
  _id: string;
  themeName: string;
  userId: User;
  created_at: string;
  updatedAt: string;
  __v: number;
  imgUrl: string;
}
