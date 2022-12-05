import { createSlice } from "@reduxjs/toolkit";

const PartnerSlice = createSlice({
  name: "Partner",
  initialState: {
    data: [
      {
        name: "Bulat Peters",
        age: 26,
        levelMin: 1,
        levelMax: 9,
        profilePhoto: true,
        gametype: ["Single", "Partner", "Score System"],
        sex: "male",
        courtType: ["My Court", "Someone’s Court"],
      },
      {
        name: "Suzan Parker",
        age: 28,
        levelMin: 1,
        levelMax: 9,
        profilePhoto: false,
        gametype: ["Partner", "Score System"],
        sex: "female",
        courtType: ["Someone’s Court"],
      },
      {
        name: "Hana Riva",
        age: 32,
        levelMin: 2,
        levelMax: 10,
        profilePhoto: true,
        gametype: ["Single", "No Score System"],
        sex: "male",
        courtType: ["My Court", "Someone’s Court", "50/50"],
      },
      {
        name: "Bulat Peters",
        age: 16,
        levelMin: 3,
        levelMax: 9,
        profilePhoto: true,
        gametype: ["Single", "Partner", "Score System"],
        sex: "male",
        courtType: ["Someone’s Court", "50/50"],
      },
      {
        name: "Suzan Parker",
        age: 36,
        levelMin: 1,
        levelMax: 6,
        profilePhoto: false,
        gametype: ["Single", "Partner", "Score System"],
        sex: "female",
        courtType: ["My Court", "50/50"],
      },
      {
        name: "Hana Riva",
        age: 56,
        levelMin: 6,
        levelMax: 10,
        profilePhoto: true,
        gametype: ["Partner", "Score System"],
        sex: "male",
        courtType: ["50/50"],
      },
      {
        name: "Bulat Peters",
        age: 23,
        levelMin: 4,
        levelMax: 9,
        profilePhoto: true,
        gametype: ["Single", "Partner", "No Score System"],
        sex: "female",
        courtType: ["My Court"],
      },
      {
        name: "Suzan Parker",
        age: 26,
        levelMin: 5,
        levelMax: 8,
        profilePhoto: false,
        gametype: ["Single", "Score System"],
        sex: "male",
        courtType: ["My Court", "Someone’s Court", "50/50"],
      },
      {
        name: "Hana Riva",
        age: 27,
        levelMin: 4,
        levelMax: 9,
        profilePhoto: true,
        gametype: ["Single", "Partner", "Score System"],
        sex: "female",
        courtType: ["Someone’s Court", "50/50"],
      },
      {
        name: "Bulat Peters",
        age: 22,
        levelMin: 4,
        levelMax: 6,
        profilePhoto: false,
        gametype: ["Single", "Partner"],
        sex: "male",
        courtType: ["My Court", "50/50"],
      },
      {
        name: "Suzan Parker",
        age: 20,
        levelMin: 1,
        levelMax: 9,
        profilePhoto: true,
        gametype: ["Single", "Score System"],
        sex: "male",
        courtType: ["My Court"],
      },
      {
        name: "Hana Riva",
        age: 29,
        levelMin: 4,
        levelMax: 6,
        profilePhoto: false,
        gametype: ["Single", "Partner", "No Score System"],
        sex: "female",
        courtType: ["My Court"],
      },
      {
        name: "Bulat Peters",
        age: 34,
        levelMin: 4,
        levelMax: 6,
        profilePhoto: true,
        gametype: ["Single", "Partner", "No Score System"],
        sex: "male",
        courtType: ["50/50"],
      },
      {
        name: "Suzan Parker",
        age: 24,
        levelMin: 1,
        levelMax: 9,
        profilePhoto: true,
        gametype: ["Partner", "Score System"],
        sex: "male",
        courtType: ["My Court", "Someone’s Court", "50/50"],
      },
      {
        name: "Hana Riva",
        age: 43,
        levelMin: 1,
        levelMax: 9,
        profilePhoto: false,
        gametype: ["Single", "Partner", "No Score System"],
        sex: "female",
        courtType: ["My Court", "Someone’s Court", "50/50"],
      },
      {
        name: "Bulat Peters",
        age: 45,
        levelMin: 4,
        levelMax: 9,
        profilePhoto: true,
        gametype: ["Single", "Partner", "No Score System"],
        sex: "male",
        courtType: ["My Court", "50/50"],
      },
      {
        name: "Suzan Parker",
        age: 36,
        levelMin: 4,
        levelMax: 6,
        profilePhoto: true,
        gametype: ["Single", "Partner", "Score System"],
        sex: "female",
        courtType: ["My Court", "Someone’s Court", "50/50"],
      },
      {
        name: "Hana Riva",
        age: 46,
        levelMin: 4,
        levelMax: 9,
        profilePhoto: false,
        gametype: ["Single", "Partner", "Score System"],
        sex: "female",
        courtType: ["My Court", "50/50"],
      },
      {
        name: "Bulat Peters",
        age: 21,
        levelMin: 1,
        levelMax: 6,
        profilePhoto: true,
        gametype: ["Single", "No Score System"],
        sex: "male",
        courtType: ["50/50"],
      },
    ],
    loading: false,
    error: "",
  },
  reducers: {
    addPartner: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});
export const PartnerReducer = PartnerSlice.reducer;