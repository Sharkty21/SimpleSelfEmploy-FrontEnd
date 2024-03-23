import { DataTable } from "@/components/shared/DataTable"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Link, useLocation, useParams } from "react-router-dom";

const IndexPage = ({
    columns,
    data,
    title,
    currentPageNumber
}: {
    columns: any,
    data: any[],
    title: string,
    currentPageNumber?: number
}) => {
    return (
        <div>
            <h3 className="mt-10 scroll-m-20 pb-2 text-2xl font-semibold">{title}</h3>
            <DataTable columns={columns} data={data} />
            <Pagination className="pt-4">
                <PaginationContent>
                    {(currentPageNumber ?? 1) > 1 && (
                        <PaginationItem>
                            <PaginationPrevious href={`?page=${(currentPageNumber ?? 1) - 1}`} />
                        </PaginationItem>
                    )}
                    <PaginationItem>
                        {currentPageNumber ?? 1}
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href={`?page=${(currentPageNumber ?? 1) + 1}`} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export default IndexPage