import { createAction, props } from '@ngrx/store';
import { Usuario } from '../models/usuario.model';

export const SetUser = createAction(
    '[Auth] SetUser',
     props<{ user: Usuario}>()
);

export const usSetUser = createAction('[Auth] usSetUser');