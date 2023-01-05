import { IToken, IUser, IUserComposable } from "@/interfaces/user"
import jwtDecode from 'jwt-decode'

export function useUserComposable(): IUserComposable {

    const setToken = (userData: IToken): IUser => {
        const { token, refreshToken } = userData

        // Obtém os dados do jwt
        const user = jwtDecode<IUser>(token)

        user.token = token
        user.refreshToken = refreshToken

        // Insere o user no localStorage caso haja um token
        if (user.token) {
            localStorage.setItem('user', JSON.stringify(user))
        }

        return user
    }

    return { setToken }
}