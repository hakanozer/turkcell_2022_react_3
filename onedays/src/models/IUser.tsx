export interface IUser {
    name: string,
    surname: string,
    age: number,
    status: boolean,
    email?: string,
    address?: IAddress
}

export interface IAddress {
    title: string,
    no: number,
    code: number
}