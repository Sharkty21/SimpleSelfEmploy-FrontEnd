import IndexPage from "@/components/IndexPage"
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
            console.log(row);
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

async function getData(): Promise<Payment[]> {
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

const data = await getData()

const Jobs = () => {
    return (
        <IndexPage data={data} columns={columns} />
    )
}

export default Jobs