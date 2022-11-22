import {getPhotos} from './photos.js';
import {render} from './render.js';
import './forms.js';
import './scale.js';
import './effects.js';

const photos = getPhotos();
render(photos);
