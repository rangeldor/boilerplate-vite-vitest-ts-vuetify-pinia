import { IErrorMessage } from "@/interfaces/api"

interface IApiComposable {
    errorMessage: IErrorMessage   
}

export function useApi(): IApiComposable {
 
    const errorMessage = {
        400: 'Erro na requisição',
        204: 'Erro na requisição',
        401: 'Não autorizado',
        403: 'Erro na requisição',
        404: 'Erro na requisição',
        422: 'Erro na requisição',
        500: 'Erro no servidor'
    }    

    return { errorMessage }
}