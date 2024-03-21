import { useMutation, useQuery } from "@tanstack/react-query"
import { getJobById, getJobs, getPaymentById, getPayments } from "../api/api"
import { QUERY_KEYS } from "./queryKeys"

export const useGetPayments = (jobId?: string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_PAYMENTS],
        queryFn: () => getPayments(jobId),
    });
};

export const useGetPaymentById = (paymentId: string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_PAYMENT_BY_ID, paymentId],
        queryFn: () => getPaymentById(paymentId),
    });
};

export const useGetJobs = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_JOBS],
        queryFn: getJobs,
    });
};

export const useGetJobById = (jobId: string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_JOB_BY_ID, jobId],
        queryFn: () => getJobById(jobId),
    });
};