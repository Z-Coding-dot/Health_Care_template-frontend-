import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type Toast = { id: string; message: string; tone: 'success' | 'error' | 'info' };
type UIState = { mobileMenuOpen: boolean; toasts: Toast[] };
const initialState: UIState = { mobileMenuOpen: false, toasts: [] };

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => { state.mobileMenuOpen = action.payload; },
    addToast: (state, action: PayloadAction<Omit<Toast, 'id'>>) => { state.toasts.push({ ...action.payload, id: `${Date.now()}-${state.toasts.length}` }); },
    removeToast: (state, action: PayloadAction<string>) => { state.toasts = state.toasts.filter((toast) => toast.id !== action.payload); },
  },
});

export const { setMobileMenuOpen, addToast, removeToast } = uiSlice.actions;
export default uiSlice.reducer;
