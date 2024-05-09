export const urlApi = (InProd: boolean = false) => {
    return InProd ? 'https://test' : 'https://localhost:7048/';
};
