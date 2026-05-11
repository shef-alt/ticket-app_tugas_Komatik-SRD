import { create } from "zustand";

export const useTicket = create((set) => ({
  tickets: [],
  selectedTicket: null,
  loading: true,
  query: "",

  setTickets: (data) =>
    set({
      tickets: data,
    }),

  setSelectedTicket: (ticket) =>
    set({
      selectedTicket: ticket,
    }),

  setLoading: (state) =>
    set({
      loading: state,
    }),

  setQuery: (data) => 
    set({
      query: data,
    }),
}));
