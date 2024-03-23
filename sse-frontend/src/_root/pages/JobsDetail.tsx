import EditJob from "@/components/forms/EditJob"
import { DataTable } from "@/components/shared/DataTable"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useGetJobById } from "@/lib/tanstack-query/queries"
import { IPayment, paymentsDefaultColumns } from "@/types"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { useParams } from "react-router-dom"

async function getChartData(): Promise<IPayment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      memo: "Shovel",
      amount: 100,
      date: new Date(2020, 2, 2)
    },
    // ...
  ]
}

const chartData = await getChartData()

const JobsDetail = () => {
  const { id } = useParams();
  const { data: job, isLoading } = useGetJobById(id ?? "");
  const [editMode, setEditMode] = useState(false);

  const setEditModeToFalse = () => {
    setEditMode(false);
  }

  return (
    <section className="h-4/5 w-4/5 flex flex-col space-y-20">
      <Card className="flex flex-row">
        {(job != undefined && !isLoading) ?
          ((!editMode) ?
            (
              <div className="w-2/3">
                <CardHeader>
                  <CardTitle>{job.name} - <span className="text-muted-foreground italic">{job.id}</span></CardTitle>
                  <CardDescription>{job.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Customer: {job.customerName}</p>
                </CardContent>
                <CardFooter>
                  <p>Start Date: {(new Date(job.startDate)).toLocaleDateString()}</p>
                </CardFooter>
              </div>
            ) :
            (
              <div className="w-2/3">
                <EditJob job={job} complete={setEditModeToFalse}/>
              </div>
            )
          ) : (
            <div className="w-2/3 flex justify-center items-center">
              <Loader2 className="animate-spin" />
            </div>
          )
        }
        <div className="w-1/3 flex justify-end">
          <Button className="m-5" onClick={() => setEditMode(!editMode)}>{ !editMode ? (<p>Edit</p>) : (<p>Cancel</p>)}</Button>
        </div>
      </Card>
      <div>
        <h3 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold">Financials</h3>
        <DataTable columns={paymentsDefaultColumns} data={chartData} />
      </div>
    </section>
  )
}

export default JobsDetail