import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useGetPaymentById } from "@/lib/tanstack-query/queries"
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
import { deletePayment } from "@/lib/api/api"
import EditPayment from "@/components/forms/EditPayment"


const PaymentsDetail = () => {
  const { id } = useParams();
  const { data: payment, isLoading: isGettingPayment } = useGetPaymentById(id ?? "");
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  const setEditModeToFalse = () => {
    setEditMode(false);
  }

  const handleDelete = async () => {
    try {
      await deletePayment(id ?? "");

      toast({
        title: "Delete successful",
      });

      navigate("/payments");
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
                    This action cannot be undone. This will permanently delete {payment?.memo}.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete}>Delete {}</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
          <Button className="mx-5 mt-5" onClick={() => setEditMode(!editMode)}>{!editMode ? (<p>Edit</p>) : (<p>Cancel</p>)}</Button>
        </div>
        {(payment != undefined && !isGettingPayment) ?
          ((!editMode) ?
            (
              <div>
                <CardHeader>
                  <CardTitle>{payment.memo}</CardTitle>
                  <CardDescription>{}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Amount: ${Number(payment.amount).toFixed(2)}</p>
                </CardContent>
                <CardFooter>
                  <p>Date: {(new Date(payment.date)).toLocaleDateString()}</p>
                </CardFooter>
              </div>
            ) :
            (
              <div className="w-2/3">
                <EditPayment payment={payment} complete={setEditModeToFalse} />
              </div>
            )
          ) : (
            <div className="w-2/3 flex justify-center items-center">
              <Loader2 className="animate-spin my-5" />
            </div>
          )
        }
      </Card>
    </section>
  )
}

export default PaymentsDetail