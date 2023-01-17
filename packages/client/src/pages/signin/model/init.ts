import { sample } from 'effector';
import { signin } from 'pages/signin/model/model';
import { signinFx } from 'pages/signin/model/effects';

sample({ clock: signin, target: signinFx });
