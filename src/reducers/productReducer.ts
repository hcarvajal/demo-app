import { ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    ALL_PRODUCTS_REQUEST
 } from "../constants/productConstant";

 export const productsReducer = (state: { loading?: boolean; products: any[];error?:string} = {products: [] }, {type,payload} : {type:string; payload: any}) => {
    switch(type) {
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: [],
            };
        case ALL_PRODUCT_FAIL:
            return {
                loading:false,
                error:payload,
            };
        default:
            return state;
        
    }
 }

