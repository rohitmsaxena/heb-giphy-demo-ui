import {GiphyImage} from './giphy-image';
import {GiphyVideo} from './giphy-video';

export interface Giphy {
  type: string;
  id: string;
  url: string;
  // slug: string;
  // bitly_gif_url: string;
  // bitly_url: string;
  embed_url: string;
  // username: string;
  // title: string;
  // rating: string;
  image: {
    downsized_large: GiphyImage,
    original: GiphyImage,
    original_mp4: GiphyVideo
  };
}
