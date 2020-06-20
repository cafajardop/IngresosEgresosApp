import { createReducer, on } from '@ngrx/store';
import { SetUser, usSetUser } from './auth.actions';
import { Usuario } from '../models/usuario.model';

export interface State {
    user: Usuario; 
}

export const initialState: State = {
   user: null,
}

const _appReducer = createReducer(initialState,

    on(SetUser, (state, { user }) => ({ ...state, user: { ...user }})),
    on(usSetUser, state => ({ ...state, user: null })),
);

export function appReducer(state, action) {
    return _appReducer(state, action);
}