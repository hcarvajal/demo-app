import { useState,useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getProducts } from "../actions/productAction";
import {useSnackbar} from 'notistack';
import MetaData from "./Layouts/MetaData";
import BackdropLoader from "./Layouts/BackdropLoader";
import { Dispatch } from "redux";




const Products = () => {

  
    const dispatch: any = useDispatch();
    const {enqueueSnackbar } = useSnackbar();

   const {products} : {products:any[];}  = useSelector((state: any) => state.products);

    console.log(products);

    useEffect(() => {
      dispatch(getProducts());
    },[dispatch,enqueueSnackbar]);

    const columns = [
        {
          field: "title",
          headerName: "Title",
          minWidth: 300,
          flex: 0.5,
        },
        {
          field: "description",
          headerName: "Description",
          minWidth: 500,
          flex: 1,
        },
        {
          field: "url",
          headerName: "Image",
          minWidth: 400,
          flex: 1,
          renderCell: (params: any) => {
            return (
                <div className="flex items-center gap-2">
                   <div className="w-10 h-10 rounded-full">
                      <img draggable="false" src={params.row.url} alt={params.row.title} className="w-full h-full rounded-full object-cover" />
                   </div>
                </div>
            )
          }
        },
        
    ];


    const rows:any[] = [];

        products && products.forEach((item) => {
        rows.unshift({
          title: item.title,
          description: item.description,
          url: item.url,  
        });
    })

    return (
      <>
        <MetaData title="All Products" />

          <div className="flex justify-between items-center">
                <h1 className="text-lg font-medium uppercase">products</h1>
            </div>
            <div className="bg-white rounded-xl shadow-lg w-full" style={{ height: 470 }}>

                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: {
                          pageSize: 5,
                        },
                      },
                    }}
                    pageSizeOptions={[5]}
                    sx={{
                        boxShadow: 0,
                        border: 0,
                    }}
                />

            </div>
        

      </>
    );

  


};

export default Products;
