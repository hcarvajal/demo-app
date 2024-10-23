import axios from "axios";
import { ALL_PRODUCTS_REQUEST, ALL_PRODUCT_FAIL,ALL_PRODUCT_SUCCESS } from "../constants/productConstant";

export const getProducts = () => async (dispatch:any) => {
    try{
       dispatch({type: ALL_PRODUCTS_REQUEST});

       let url = 'https://fakerapi.it/api/v1/images?_width=380';

       const data:any = await axios.get(url);

       dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
       });

      

    }catch (error: any) {
       dispatch ({
         type: ALL_PRODUCT_FAIL,
         payload: error.response.data.message,
       });
    }
}

