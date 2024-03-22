import IndexPage from "@/components/shared/IndexPage"
import { useGetPayments } from "@/lib/tanstack-query/queries"
import { IPayment, paymentsDefaultColumns } from "@/types";
import { Loader2 } from "lucide-react";

const Payments = () => {
    const { data: payments, isLoading } = useGetPayments();
    const paymentsIndexData : IPayment[] = payments != undefined ? payments : [];
    return (
    <div>
      {(isLoading) ? 
      (
          <Loader2 className="animate-spin"/>
      ) :
      (
        <IndexPage data={paymentsIndexData} columns={paymentsDefaultColumns} title="Payments"/>
      )}
      </div>
    )
}

export default Payments