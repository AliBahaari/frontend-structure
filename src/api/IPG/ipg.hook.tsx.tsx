import { ipgApiFindAll } from '@/api/IPG/ipg.api'
import type { IPGFindAllParams } from '@/api/IPG/ipg.type'
import { useQuery } from '@tanstack/react-query'

export function useGetAllIPG(bodyRequest: IPGFindAllParams) {
  return useQuery({
    queryKey: ['ipgFindAll', bodyRequest],
    queryFn: () => ipgApiFindAll(bodyRequest),
  })
}
