import {createLoader} from './api.js';
import {render} from './render.js';
import './forms.js';
import './scale.js';
import './effects.js';

createLoader(alert).then((photos) => render(photos));

