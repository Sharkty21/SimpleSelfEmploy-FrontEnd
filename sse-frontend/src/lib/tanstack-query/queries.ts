import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getJobById, getJobs, getPaymentById, getPayments, saveJob } from "../api/api"
import { QUERY_KEYS } from "./queryKeys"
import { IJob } from "@/types";

export const useGetPayments = (page?: number, jobId?: string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_PAYMENTS, page, jobId],
        queryFn: () => getPayments(page, jobId),
    });
};

export const useGetPaymentById = (paymentId: string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_PAYMENT_BY_ID, paymentId],
        queryFn: () => getPaymentById(paymentId),
    });
};

export const useGetJobs = (page?: number) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_JOBS, page],
        queryFn: () => getJobs(page),
    });
};

export const useGetJobById = (jobId: string) => {
    return useQuery({
        queryKey: [QUERY_KEYS.GET_JOB_BY_ID, jobId],
        queryFn: () => getJobById(jobId),
    });
};

export const useSaveJob = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (job: IJob) => saveJob(job),
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERY_KEYS.GET_JOB_BY_ID],
        });
        queryClient.invalidateQueries({
            queryKey: [QUERY_KEYS.GET_JOBS],
          });
      },
    });
  };