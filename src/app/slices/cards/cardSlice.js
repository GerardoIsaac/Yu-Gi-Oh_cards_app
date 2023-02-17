import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Creamos una acción asíncrona que obtiene datos de una API
export const fetchCards = createAsyncThunk('fetchCards', async () => {
  const response = await fetch(
    'https://db.ygoprodeck.com/api/v7/cardinfo.php/?num=500&offset=0'
  );
  return response.json();
});

// Creamos un "slice" del "store" para manejar el estado de las cartas
export const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  // Definimos como se manejan las acciones
  extraReducers: builder => {
    builder.addCase(fetchCards.pending, (state, action) => {
      // El estado se encuentra cargando mientras recibe los datos de la API
      state.isLoading = true;
    });
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      // El estado deja de cargar y almacena los datos obtenidos
      state.isLoading = false;
      state.data = action.payload.data;
    });
    builder.addCase(fetchCards.rejected, (state, action) => {
      // Recibimos un error cuando la petición de los datos es rechazada
      console.log('Error', action.payload);
      state.isError = true;
    });
  },
});

// Exportamos el "reducer" del "slice" para usarlo en el "store"
export default cardSlice.reducer;
