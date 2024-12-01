export interface IBaseResponse<T> {
    data?: T
    errors: string[]
    hasErrors: boolean
    statusCode: number
}

