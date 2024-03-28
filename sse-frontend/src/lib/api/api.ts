import { IJob, IPayment } from "@/types";
import { api } from "./config";

// QUERIES =============================================
async function getIndex<T>(endpoint: string, filter?: object): Promise<T[]> {
  try {
    const response = await api.get(endpoint, { params: filter });
    const indexData: T[] = response.data;

    if (!indexData || !Array.isArray(indexData)) throw Error;

    return indexData;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getPayments(
  page?: number,
  jobId?: string
): Promise<IPayment[]> {
  const filter = {
    page: page?.toString() ?? "1",
    jobId: jobId ?? "",
  };
  return await getIndex<IPayment>("payments", filter);
}

export async function getJobs(page?: number): Promise<IJob[]> {
  const filter = {
    page: page?.toString() ?? "1",
  };
  return await getIndex<IJob>("jobs", filter);
}

async function getById<T>(
  endpoint: string,
  recordId: string
): Promise<T | undefined> {
  try {
    const response = await api.get(endpoint + "/" + recordId);
    const record: T = response.data;

    if (!record) throw Error;

    return record;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

export async function getJobById(jobId: string): Promise<IJob | undefined> {
  return await getById<IJob>("jobs", jobId);
}

export async function getPaymentById(
  paymentId: string
): Promise<IPayment | undefined> {
  return await getById<IPayment>("payments", paymentId);
}

// POST =============================================
export async function saveRecord<T>(
  endpoint: string,
  record: T
): Promise<T | undefined> {
  try {
    const recordId = (record as any).id;
    if (recordId != undefined) {
      const recordResponse: T = await api.put(
        endpoint + "/" + recordId,
        record
      );
      return recordResponse;
    }
    const recordResponse: T = await api.post(endpoint, record);
    return recordResponse;
  } catch (error) {
    console.log(error);
  }
}

export async function saveJob<IJob>(job: IJob): Promise<IJob | undefined> {
  return await saveRecord<IJob>("jobs", job);
}

export async function savePayment<IPayment>(payment: IPayment): Promise<IPayment | undefined> {
  return await saveRecord<IPayment>("payments", payment);
}

// DELETE =============================================
export async function deleteRecord(
  endpoint: string,
  id: string
): Promise<void> {
  try {
    const response = await api.delete(endpoint + "/" + id);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteJob(id: string): Promise<void> {
  await deleteRecord("jobs", id);
}

export async function deletePayment(id: string): Promise<void> {
  await deleteRecord("payments", id);
}