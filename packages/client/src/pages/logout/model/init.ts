import { sample } from 'effector'
import { logout } from 'pages/logout/model/model'
import { logoutFx } from 'pages/logout/model/effects'

sample({ clock: logout, target: logoutFx })
