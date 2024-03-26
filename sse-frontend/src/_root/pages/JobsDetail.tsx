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
import { useGetJobById, useGetPayments } from "@/lib/tanstack-query/queries"
import { IPayment, paymentsDefaultColumns } from "@/types"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from "@/components/ui/use-toast"
import { deleteJob } from "@/lib/api/api"


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
  const { data: job, isLoading: isGettingJob } = useGetJobById(id ?? "");
  const { data: payments, isLoading: isGettingPayments } = useGetPayments(undefined, id);
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  const setEditModeToFalse = () => {
    setEditMode(false);
  }

  const handleDelete = async () => {
    try {
      await deleteJob(id ?? "");

      toast({
        title: "Delete successful",
      });

      navigate("/jobs");
    } catch (e) {
      toast({
        title: "Delete unsuccessful",
      });
    }
  };

  return (
    <section className="w-4/5 my-10 flex flex-col space-y-20">
      <Card className="flex flex-col">
        <div className="flex justify-end">
          {editMode && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="mt-5">Delete</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete {job?.name}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete}>Delete {job?.name}</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
          <Button className="mx-5 mt-5" onClick={() => setEditMode(!editMode)}>{!editMode ? (<p>Edit</p>) : (<p>Cancel</p>)}</Button>
        </div>
        {(job != undefined && !isGettingJob) ?
          ((!editMode) ?
            (
              <div>
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
                <EditJob job={job} complete={setEditModeToFalse} />
              </div>
            )
          ) : (
            <div className="w-2/3 flex justify-center items-center">
              <Loader2 className="animate-spin" />
            </div>
          )
        }
      </Card>
      {(!isGettingPayments) ? (
        <div className="">
          <h3 className="scroll-m-20 border-b pb-2 text-2xl font-semibold">Financials</h3>
          <DataTable columns={paymentsDefaultColumns} data={payments ?? []} />
        </div>
      ) : (
        <Loader2 className="animate-spin" />
      )}
    </section>
  )
}

export default JobsDetail