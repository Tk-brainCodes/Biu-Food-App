import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signupUser, loginUser } from "./userAction";

export interface IValidateTypes {
  name?: string;
  email: string;
  matNumber?: string;
  password?: string;
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
  userToken: "",
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
    //signup builder case
    builder.addCase(signupUser.fulfilled, (state, action) => {
      //set dummy token from backend
      const setToken = localStorage.setItem(
        "userToken",
        action.payload.token.auth_token
      );
      //   state.token = setToken
      state.loading = false;
      state.success = true;
      state.userData = action.payload;
      console.log({ payloadSignupFulfilled: action.payload });
    });

    builder.addCase(signupUser.pending, (state, action) => {
      state.loading = true;
      console.log({ payloadSignupPending: action.payload });
    });

    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      console.log({ payloadSignupRejected: action.payload });
    });

    //login builder case
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.error = false;
      state.success = true;
      state.loading = false;
      console.log({ payloadLoginFulfilled: action.payload });
    });

    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
      console.log({ payloadLoginPending: action.payload });
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
      state.success = false;
      console.log({ payloadLoginRejected: action.payload });
    });
  },
});

// Action creators are generated for each case reducer function
export const { userData } = userSlice.actions;
export default userSlice.reducer;
