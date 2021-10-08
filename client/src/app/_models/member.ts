import { IPhoto } from './photo';

export interface IMember {
  id: number;
  username: string;
  photoUrl: string;
  age: string;
  knownAs: string;
  created: Date;
  lastActive: Date;
  gender: string;
  introduction: string;
  interests: string;
  city: string;
  country: string;
  photos: IPhoto[];
}
