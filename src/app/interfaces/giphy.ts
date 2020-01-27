import {GiphyImage} from './giphy-image';
import {GiphyVideo} from './giphy-video';

export interface Giphy {
  type: string;
  id: string;
  url: string;
  embed_url: string;
  image: {
    downsized_large: GiphyImage,
    original: GiphyImage,
    original_mp4: GiphyVideo
  };
}
