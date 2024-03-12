import { DataTable } from "@/components/DataTable"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IJob } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import { Link } from "react-router-dom"

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <Link to={`${row.original.id}`} className="font-medium text-primary underline underline-offset-4">{row.original.status}</Link>
    }
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]

async function getChartData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

const chartData = await getChartData()

const date = new Date();

async function getJobData(): Promise<IJob> {
  // Fetch data from your API here.
  const jobData: IJob =
  {
    id: "728ed52f",
    name: "test job",
    description: "here's the description",
    startDate: date,
    customerName: "bob jones"
  }

  return jobData;
}

const job = await getJobData();

const JobsDetail = () => {
  return (
    <section className="h-4/5 w-4/5 flex flex-col space-y-20">
      <Card className="flex flex-row">
        <div className="w-2/3">
          <CardHeader>
            <CardTitle>{job.name} - <span className="text-muted-foreground italic">{job.id}</span></CardTitle>
            <CardDescription>{job.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Customer: {job.customerName}</p>
          </CardContent>
          <CardFooter>
            <p>Start Date: {job.startDate.toDateString()}</p>
          </CardFooter>
        </div>
        <div className="w-1/3 flex justify-end">
          <Button className="m-5">Edit</Button>
        </div>
      </Card>
      <div>
        <h3 className="mt-10 scroll-m-20 border-b pb-2 text-2xl font-semibold">Financials</h3>
        <DataTable columns={columns} data={chartData} />
      </div>
    </section>
  )
}

export default JobsDetail