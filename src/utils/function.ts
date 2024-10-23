export const fromatDate = (dt:any) => {
    return new Date(dt).toUTCString().substring(0,16);
}