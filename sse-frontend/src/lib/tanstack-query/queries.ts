import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteJob,
  deletePayment,
  getJobById,
  getJobs,
  getPaymentById,
  getPayments,
  saveJob,
  savePayment,
} from "../api/api";
import { QUERY_KEYS } from "./queryKeys";
import { IJob, IPayment } from "@/types";

// PAYMENTS
export const useGetPayments = (page?: number, paymentId?: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_PAYMENTS, page, paymentId],
    queryFn: () => getPayments(page, paymentId),
  });
};

export const useGetPaymentById = (paymentId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_PAYMENT_BY_ID, paymentId],
    queryFn: () => getPaymentById(paymentId),
  });
};

export const useSavePayment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payment: IPayment) => savePayment(payment),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PAYMENT_BY_ID],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PAYMENTS],
      });
    },
  });
};

export const useDeletePayment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deletePayment(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PAYMENT_BY_ID],
      });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.GET_PAYMENTS],
      });
    },
  });
};

// JOBS
export const useGetJobs = (page?: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_JOBS, page],
    queryFn: () => getJobs(page),
  });
};

export const useGetJobById = (paymentId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_JOB_BY_ID, paymentId],
    queryFn: () => getJobById(paymentId),
  });
};

export const useSaveJob = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payment: IJob) => saveJob(payment),
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

export const useDeleteJob = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteJob(id),
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
