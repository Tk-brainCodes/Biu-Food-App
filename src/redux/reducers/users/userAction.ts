import { createAsyncThunk } from "@reduxjs/toolkit";
import { IValidateTypes } from "./userSlice";
import setAuthToken from "../../../utils/authToken";
import setBaseUrl from "../../../utils/baseUrl";

interface Error {
  response: any;
  name: string;
  message: string;
  stack?: string;
  status?: number;
  code?: number;
}


//Signup User
export const signupUser = createAsyncThunk(
  "user/register",
  async (
    { name, email, matNumber, password, confirmPassword }: IValidateTypes,
    thunkAPI
  ) => {
    const config = {
      headers: {
        Accept: "application/json", 
        "Content-Type": "application/json",
      },
    };

    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
    }

    //dummy endpoint link
    const url = "/register";

    try {
      const response = await setBaseUrl.post(
        url,
        { name, email, matNumber, password, confirmPassword },
        config
      );

      let data = await response.data;
      console.log(data);

      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        //return data
        return {
          ...data,
          name: name,
          email: email,
          matNumber: matNumber,
          password: password,
        };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.log("Error", (error as Error).response.data);
      return thunkAPI.rejectWithValue((error as Error).response.data);
    }
  }
);

//Login User
export const loginUser = createAsyncThunk(
  "users/login",
  async ({ email, matNumber, password }: IValidateTypes, thunkAPI) => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
    }

    const url = "/login";

    try {
      const response = await setBaseUrl.post(
        url,
        { email, matNumber, password },
        config
      );

      let data = await response.data;
      console.log(data);

      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        return {
          ...data,
          email: email,
          matNumber: matNumber,
          password: password,
        };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      console.log("Error", (error as Error).response.data);
      return thunkAPI.rejectWithValue((error as Error).response.data);
    }
  }
);
