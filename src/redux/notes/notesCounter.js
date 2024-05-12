import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  notes: [{ id: 1, text: "Link in bio for my Frontend Interview Prep Course" }],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const note = [...state.notes, { id: nanoid(), text: action.payload }];

      state.notes.push(note);
    },

    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;
