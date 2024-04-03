import IndexPage from "@/components/shared/IndexPage"
import { useGetPayments } from "@/lib/tanstack-query/queries"
import { IPayment, paymentsDefaultColumns } from "@/types";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const Payments = () => {  
    const [searchParams] = useSearchParams();
    const pageNumberString = searchParams.get('page') ?? '1';
    const pageNumber = parseInt(pageNumberString);

    const { data: payments, isLoading } = useGetPayments(pageNumber);
    const paymentsIndexData : IPayment[] = payments != undefined ? payments : [];

    return (
    <div>
      {(isLoading) ? 
      (
          <Loader2 className="animate-spin"/>
      ) :
      (
        <IndexPage data={paymentsIndexData} columns={paymentsDefaultColumns} currentPageNumber={pageNumber} title="Payments"/>
      )}
      </div>
    )
}

export default Payments