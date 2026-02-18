// src/features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subuser: null, // list of subusers
  selected: null, // currently selected subuser (impersonation)
};

const subuserSlice = createSlice({
  name: "subuser",
  initialState,
  reducers: {
    setSubUser: (state, action) => {
      state.subuser = action.payload;
      try {
        localStorage.setItem("subuser", JSON.stringify(action.payload));
      } catch (err) {
        // if quota exceeded, try to persist only ids
        try {
          const minimal = Array.isArray(action.payload)
            ? action.payload.map((s) => ({ subUserId: s.subUserId, name: s.name }))
            : { subUserId: action.payload?.subUserId, name: action.payload?.name };
          localStorage.setItem("subuser", JSON.stringify(minimal));
        } catch (e) {
          try {
            localStorage.removeItem("subuser");
          } catch (ignore) {}
        }
      }
      // If a subuser is currently selected, refresh the selected object
      if (state.selected) {
        const matched = Array.isArray(action.payload)
          ? action.payload.find((s) => String(s.subUserId) === String(state.selected.subUserId))
          : null;
        if (matched) {
          state.selected = matched;
          localStorage.setItem("selectedSubUser", JSON.stringify(matched));
        } else {
          // selected no longer exists in the updated list
          state.selected = null;
          localStorage.removeItem("selectedSubUser");
        }
      } else {
        // Try to hydrate selected from storage if present
        const storedSelected = localStorage.getItem("selectedSubUser");
        if (storedSelected && Array.isArray(action.payload)) {
          try {
            const parsed = JSON.parse(storedSelected);
            const matched = action.payload.find((s) => String(s.subUserId) === String(parsed.subUserId));
            if (matched) {
              state.selected = matched;
              localStorage.setItem("selectedSubUser", JSON.stringify(matched));
            }
          } catch (e) {
            // ignore parse errors
          }
        }
      }
    },
    // select a subuser to impersonate
    selectSubUser: (state, action) => {
      state.selected = action.payload;
      localStorage.setItem("selectedSubUser", JSON.stringify(action.payload));
    },
    clearSelectedSubUser: (state) => {
      state.selected = null;
      localStorage.removeItem("selectedSubUser");
    },

    updateSubUser: (state, action) => {
      // action.payload should be the updated subuser object { subUserId, ... }
      if (Array.isArray(state.subuser)) {
        state.subuser = state.subuser.map((s) =>
          String(s.subUserId) === String(action.payload.subUserId) ? { ...s, ...action.payload } : s
        );
      } else if (state.subuser && state.subuser.subUserId === action.payload.subUserId) {
        state.subuser = { ...state.subuser, ...action.payload };
      }
      // persist
      try {
        localStorage.setItem("subuser", JSON.stringify(state.subuser));
      } catch (err) {
        try {
          const minimal = Array.isArray(state.subuser)
            ? state.subuser.map((s) => ({ subUserId: s.subUserId, name: s.name }))
            : { subUserId: state.subuser?.subUserId, name: state.subuser?.name };
          localStorage.setItem("subuser", JSON.stringify(minimal));
        } catch (e) {
          try { localStorage.removeItem("subuser"); } catch (ignore) {}
        }
      }
      // if the updated subuser is currently selected, update selected too
      if (state.selected && String(state.selected.subUserId) === String(action.payload.subUserId)) {
        state.selected = { ...state.selected, ...action.payload };
        localStorage.setItem("selectedSubUser", JSON.stringify(state.selected));
      }
    },

    clearSubUser: (state) => {
      state.subuser = null;
      localStorage.removeItem("subuser");
    },

    loadSubUserFromStorage: (state) => {
      const storedSubUser = localStorage.getItem("subuser");
      if (storedSubUser) {
        state.subuser = JSON.parse(storedSubUser);
      }
      const storedSelected = localStorage.getItem("selectedSubUser");
      if (storedSelected) state.selected = JSON.parse(storedSelected);
    },
  },
});

export const {
  setSubUser,
  selectSubUser,
  clearSelectedSubUser,
  updateSubUser,
  clearSubUser,
  loadSubUserFromStorage,
} = subuserSlice.actions;

export default subuserSlice.reducer;
