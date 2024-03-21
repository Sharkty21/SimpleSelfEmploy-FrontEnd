import IndexPage from "@/components/shared/IndexPage"
import { useGetPayments } from "@/lib/tanstack-query/queries"
import { IPayment, jobsDefaultColumns } from "@/types";
import { Loader2 } from "lucide-react";

const Payments = () => {
    const { data: jobs, isLoading } = useGetPayments();
    const jobsIndexData : IPayment[] = jobs != undefined ? jobs : [];
    return (
    <div>
      {(isLoading) ? 
      (
          <Loader2 className="animate-spin"/>
      ) :
      (
        <IndexPage data={jobsIndexData} columns={jobsDefaultColumns} title="Payments"/>
      )}
      </div>
    )
}

export default Payments