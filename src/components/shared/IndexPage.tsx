import { DataTable } from "@/components/shared/DataTable"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

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
            <div className="mb-3 flex flex-row justify-between">
                <h3 className="scroll-m-20 pb-2 text-2xl font-semibold">{title}</h3>
                <Link to="new">
                    <Button>
                        New
                    </Button>
                </Link>
            </div>
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