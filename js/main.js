import {createLoader} from './api.js';
import {render} from './render.js';
import {showErrorMessage} from './messages.js';
import './forms.js';
import './scale.js';
import './effects.js';


createLoader(() => showErrorMessage('Ошибка загрузки! Попробуйте еще раз')).then((photos) => render(photos));

