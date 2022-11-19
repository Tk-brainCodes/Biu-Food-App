import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signupUser } from "./userAction";

export interface IValidateTypes {
  name: string;
  email: string;
  matNumber: string;
  password: string;
  confirmPassword?: string;
}

interface InitialStateType {
  userData: IValidateTypes[] | null;
  loading: Boolean;
  userToken: any;
  error: null | Boolean;
  success: Boolean;
}

const initialState: InitialStateType = {
  userData: null,
  loading: false,
  userToken: null,
  error: null,
  success: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userData: (state, action: PayloadAction<InitialStateType["userData"]>) => {
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.fulfilled, (state, action) => {
      //set dummy token from backend
      const setToken = localStorage.setItem(
        "token",
        action.payload.token.auth_token
      );
      //   state.token = setToken
      state.loading = false;
      state.success = true;
      state.userData = action.payload;
    });

    builder.addCase(signupUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

// Action creators are generated for each case reducer function
export const { userData } = userSlice.actions;
export default userSlice.reducer;
