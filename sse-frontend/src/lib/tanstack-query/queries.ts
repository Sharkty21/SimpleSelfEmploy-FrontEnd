import { useMutation, useQuery } from "@tanstack/react-query"
import { getPayments } from "../api/api"
import { QUERY_KEYS } from "./queryKeys"

export const useGetPayments = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_PAYMENTS],
        queryFn: getPayments,
    });
};