import { ColumnDef } from "@tanstack/react-table"
import { Link } from "react-router-dom"

// JOBS
export type IJob = {
    id: string;
    name: string;
    description: string;
    startDate: Date;
    customerName: string;
}

export const jobsDefaultColumns: ColumnDef<IJob>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => {
            return <Link to={`/jobs/${row.original.id}`} className="font-medium text-primary underline underline-offset-4">{row.original.name}</Link>
        }
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "startDate",
        header: "Start Date",
        cell: ({ row }) => {
            return new Date(row.original.startDate).toLocaleDateString()
        }
    },
    {
        accessorKey: "customerName",
        header: "Customer"
    }
]

// PAYMENTS
export type IPayment = {
    id: string,
    jobId: string,
    memo: string,
    amount: number,
    date: Date
}

export const paymentsDefaultColumns: ColumnDef<IPayment>[] = [
    {
        accessorKey: "memo",
        header: "Memo",
        cell: ({ row }) => {
            return <Link to={`/payments/${row.original.id}`} className="font-medium text-primary underline underline-offset-4">{row.original.memo}</Link>
        }
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
    {
        accessorKey: "date",
        header: "Date",
    }
]