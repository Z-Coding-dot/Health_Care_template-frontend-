import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type AuthUser = { name: string; role: 'patient' | 'staff' };
type AuthState = { user: AuthUser | null; status: 'idle' | 'loading' | 'authenticated' | 'unauthenticated'; error: string | null };

const initialState: AuthState = { user: null, status: 'idle', error: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStarted: (state) => { state.status = 'loading'; state.error = null; },
    authSucceeded: (state, action: PayloadAction<AuthUser>) => { state.status = 'authenticated'; state.user = action.payload; state.error = null; },
    authFailed: (state, action: PayloadAction<string>) => { state.status = 'unauthenticated'; state.user = null; state.error = action.payload; },
    signedOut: (state) => { state.status = 'unauthenticated'; state.user = null; state.error = null; },
  },
});

export const { authStarted, authSucceeded, authFailed, signedOut } = authSlice.actions;
export default authSlice.reducer;
