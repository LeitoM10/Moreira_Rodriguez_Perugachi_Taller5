import { create } from "zustand";

const useStorePedido = create((set) => ({
  cantidad: 0,
  precio: 2.5,

  agregar: () =>
    set((estado) => ({
      cantidad: estado.cantidad + 1,
    })),

  quitar: () =>
    set((estado) => ({
      cantidad: Math.max(0, estado.cantidad - 1),
    })),

  vaciar: () => set({ cantidad: 0 }),
}));

export default useStorePedido;