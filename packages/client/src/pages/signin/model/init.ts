import { sample } from 'effector';
import { signin } from 'pages/signin/model/model';
import { signinFx } from 'pages/signin/model/effects';
import { getUser } from 'processes/layout/model/model';
import { logout, logoutFx } from 'pages/logout/model';

sample({ clock: signin, target: signinFx });
