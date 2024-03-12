import { DataTable } from "@/components/DataTable"

const IndexPage = ({ columns, data }) => {
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default IndexPage