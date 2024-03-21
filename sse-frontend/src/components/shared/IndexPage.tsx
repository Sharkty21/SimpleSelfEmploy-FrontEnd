import { DataTable } from "@/components/shared/DataTable"

const IndexPage = ({ columns, data, title} : {columns: any, data: any[], title: string}) => {
    return (
        <div className="container mx-auto py-10">
            <h3 className="mt-10 scroll-m-20 pb-2 text-2xl font-semibold">{title}</h3>
            <DataTable columns={columns} data={data} />
        </div>
    )
}

export default IndexPage