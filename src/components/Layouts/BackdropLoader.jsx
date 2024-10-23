import { Backdrop } from "@mui/material/Backdrop";
import { CircularProgress } from "@mui/material";


const BackdropLoader = () => {
    return (
        <Backdrop
          sx={{color: '#fff', zIndex:1500}}
          open={true}
        >
            <CircularProgress color="Inherit" />
        </Backdrop>
    );
};

export default BackdropLoader