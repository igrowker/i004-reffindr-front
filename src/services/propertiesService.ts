import { httpClient } from "@/api/axios-config";
import { IBaseResponse } from "@/interfaces/api-response";
import { Property } from "@/interfaces/types";
import { AxiosError } from "axios";




export const getProperties = async(): Promise<IBaseResponse<Property[]>> => {
    try {
        const response = await httpClient.get<IBaseResponse<Property[]>>('/properties/get-properties');
        return response.data;
    } 
    catch (error: unknown) {
        const err = error as AxiosError<IBaseResponse<Property[]>>;
        if (err.response?.data) {
            return err.response?.data ;
        } 

        return {
            hasErrors: true,
            errors: ['Error interno del servidor'],
            statusCode: 500,
        }
    }    
}



