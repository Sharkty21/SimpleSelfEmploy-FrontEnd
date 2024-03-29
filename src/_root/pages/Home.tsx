"use client"

import LineGraph from "@/components/shared/LineGraph"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useGetPayments } from "@/lib/tanstack-query/queries"
import { Loader2 } from "lucide-react"


const Home = () => {
  const { data: payments, isLoading } = useGetPayments();
  return (
    <Card className="flex flex-col w-full justify-center">
      <CardHeader>
        <CardTitle>Recent Financials</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <div className="flex justify-center">
      {(isLoading) ? 
      (
          <Loader2 className="animate-spin"/>
      ) :
      (
        <LineGraph data={payments} xAxisDataKey="date" dataKey="amount" />
      )}
      </div>
    </Card>
  )
}

export default Home