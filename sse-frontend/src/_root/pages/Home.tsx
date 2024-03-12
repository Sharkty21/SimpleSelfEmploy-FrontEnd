"use client"

import LineGraph from "@/components/shared/LineGraph"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useGetPayments } from "@/lib/tanstack-query/queries"
import { Loader2 } from "lucide-react"


const Home = () => {
  const { data: payments, isLoading } = useGetPayments();
  console.log(payments);

  const formatDate = (dateInput: string) : string => {
    const date = new Date(dateInput);
    return date.getDay().toString();
  }

  const formattedPayments = payments?.map(payment => ({
    ...payment,
    date: formatDate(payment.date.toString())
  }));

  console.log(formattedPayments);

  return (
    <Card className="flex flex-col w-full justify-center">
      <CardHeader>
        <CardTitle>Recent Financials</CardTitle>
        <CardDescription>22 Jobs completed this month</CardDescription>
      </CardHeader>
      <div className="flex justify-center">
      {(isLoading) ? 
      (
          <Loader2 className="animate-spin"/>
      ) :
      (
        <LineGraph data={formattedPayments} xAxisDataKey="date" dataKey="amount" />
      )}
      </div>
    </Card>
  )
}

export default Home