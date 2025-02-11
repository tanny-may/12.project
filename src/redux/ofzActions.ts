/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppDispatch } from "./store";
import { fetchOFZStart, fetchOFZSuccess, fetchOFZFailure } from "./ofzSlice";
import { downloadOFZ } from "../domain/downloadOFZ";

export const fetchOFZ = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchOFZStart()); // Устанавливаем флаг загрузки
    const data = await downloadOFZ(); // Загружаем данные
    dispatch(fetchOFZSuccess(data)); // Записываем их в хранилище
  } catch (error) {
    dispatch(fetchOFZFailure("Ошибка загрузки данных"));
  }
};