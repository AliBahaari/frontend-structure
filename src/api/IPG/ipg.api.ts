import type { IPGFindAllParams, IPGFindAllResponse } from '@/api/IPG/ipg.type'
import { IPG_URL_FIND_ALL } from '@/api/IPG/ipg.url'
import { axiosInstance } from '@/configs/axiosInstance'

export const ipgApiFindAll = async (requestBody: IPGFindAllParams): Promise<IPGFindAllResponse> => {
  return await axiosInstance
    .get(`${IPG_URL_FIND_ALL}`, requestBody)
    .then((response) => response.data)
}
