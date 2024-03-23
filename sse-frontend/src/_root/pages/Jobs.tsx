import IndexPage from "@/components/shared/IndexPage"
import { useGetJobs } from "@/lib/tanstack-query/queries"
import { IJob, jobsDefaultColumns } from "@/types";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const Jobs = () => {  
    const [searchParams] = useSearchParams();
    const pageNumberString = searchParams.get('page') ?? '1';
    const pageNumber = parseInt(pageNumberString);

    const { data: jobs, isLoading } = useGetJobs(pageNumber);
    const jobsIndexData : IJob[] = jobs != undefined ? jobs : [];

    return (
    <div>
      {(isLoading) ? 
      (
          <Loader2 className="animate-spin"/>
      ) :
      (
        <IndexPage data={jobsIndexData} columns={jobsDefaultColumns} currentPageNumber={pageNumber} title="Jobs"/>
      )}
      </div>
    )
}

export default Jobs