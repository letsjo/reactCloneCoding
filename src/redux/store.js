import {configureStore} from "@reduxjs/toolkit";

import basketReducer from "./reducers/basketReducer";
import itemsReducer from "./reducers/itemsReducer";
import commentReducer from "./reducers/commentReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
    reducer:{
        basketReducer,
        itemsReducer,
        commentReducer,
        userReducer,
    }
})

export default store;