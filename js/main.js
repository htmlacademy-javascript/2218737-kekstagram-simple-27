import {getPhotos} from './photos.js';
import {render} from './render.js';

const photos = getPhotos();
render(photos);
