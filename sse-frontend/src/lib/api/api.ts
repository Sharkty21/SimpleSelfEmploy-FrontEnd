import { IJob, IPayment } from "@/types";
import { api } from "./config";

// Queries =============================================
async function getIndex<T>(endpoint: string, filter?: string) : Promise<T[]> {
  try {
    const params = {
      filter
    };
    const response = await api.get(endpoint, { params });
    const indexData : T[] = response.data;

    if (!indexData || !Array.isArray(indexData)) throw Error;

    return indexData;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getPayments(jobId?: string): Promise<IPayment[]> {
  if (jobId != undefined)
  {
    return await getIndex<IPayment>("payments", "jobId=" + jobId);
  }
  return await getIndex<IPayment>("payments");
}

export async function getJobs(): Promise<IJob[]> {
  return await getIndex<IJob>("jobs");
}

async function getById<T>(endpoint: string, recordId: string): Promise<T | undefined> {
  try {

    const response = await api.get(endpoint + "/" + recordId);
    const record : T = response.data;

    if (!record) throw Error;

    return record;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function getJobById(jobId: string) : Promise<IJob | undefined> {
  return await getById<IJob>("jobs", jobId);
}

export async function getPaymentById(paymentId: string) : Promise<IPayment | undefined> {
  return await getById<IPayment>("payments", paymentId);
}