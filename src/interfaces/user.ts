export interface ISignIn {
    login: string
    password: string
}

export interface IUser {
    name: string;
    lastName: string;
    phoneNumber: string;
    jti: string;
    email: string;
    loginUser: string;
    country: string;
    permissions: string[];
    exp: number;
    token: string;
    refreshToken: string;
}

export interface IToken {
    accessToken?: any;
    refreshToken: string;
    token: string;
    authenticated: boolean;
    expiration: Date;
    created: string;
    token_type: string;
}

export interface IUserComposable {
    setToken(userData: IToken): IUser
}