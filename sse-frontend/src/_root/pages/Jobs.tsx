import IndexPage from "@/components/shared/IndexPage"
import { useGetJobs } from "@/lib/tanstack-query/queries"
import { IJob, jobsDefaultColumns } from "@/types";
import { Loader2 } from "lucide-react";

const Jobs = () => {
    const { data: jobs, isLoading } = useGetJobs();
    const jobsIndexData : IJob[] = jobs != undefined ? jobs : [];
    return (
    <div>
      {(isLoading) ? 
      (
          <Loader2 className="animate-spin"/>
      ) :
      (
        <IndexPage data={jobsIndexData} columns={jobsDefaultColumns} title="Jobs"/>
      )}
      </div>
    )
}

export default Jobs