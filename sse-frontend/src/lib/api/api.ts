import { IPayment } from "@/types";
import { api } from "./config";

// Jobs API =============================================
export async function getPayments() {
 
    try {
      const response = await api.get("payments");
      const payments : IPayment[] = response.data;
  
      if (!payments) throw Error;
  
      return payments;
    } catch (error) {
      console.log(error);
    }
  }
  