export interface IDataItem {
    id: number;
}
// Adicionar dados da interface correta quando houver
export interface ICreditQueue {
    statusCode: number;
    data: IDataItem[];
    errors?: any;
    success: boolean;
}