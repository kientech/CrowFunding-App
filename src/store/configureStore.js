import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {},
  middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
});

// sagaMiddleware.run(rootSaga);
