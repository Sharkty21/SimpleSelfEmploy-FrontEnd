import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { IPayment } from "@/types"
import { PaymentValidation } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Loader2 } from "lucide-react"
import { Textarea } from "../ui/textarea"
import { useToast } from "../ui/use-toast"
import { useSavePayment } from "@/lib/tanstack-query/queries"
import { useNavigate } from "react-router-dom"

const EditPayment = ({ payment, complete }: { payment: IPayment | undefined, complete: (() => void) | undefined }) => {
    const { toast } = useToast();
    const { mutateAsync: savePayment, isPending: isSavingPayment } = useSavePayment();
    const navigate = useNavigate();

    const handleSubmit = async (payment: z.infer<typeof PaymentValidation>) => {
        try {
            console.log(payment);
            const response = await savePayment(payment);
            if (response == undefined) throw Error;

            toast({
                title: "Save successful",
            });

            if (complete == undefined) {
                navigate("/payments/" + response.id)
            }
            else {
                complete();
            }
        } catch (e) {
            toast({
                title: "Save unsuccessful",
            });
        }
    };

    const form = useForm<z.infer<typeof PaymentValidation>>({
        resolver: zodResolver(PaymentValidation),
        defaultValues: {
            id: payment?.id,
            memo: payment?.memo,
            amount: payment?.amount,
            date: payment?.date,
        },
    });

    return (
        <div className="flex flex-col w-2/3 m-auto">
            <h3 className="mt-10 scroll-m-20 pb-2 text-2xl font-semibold">{(payment == undefined) ? (<p>New Payment</p>) : (<p>Edit Payment</p>)}</h3>
            <hr className="h-px mb-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="flex flex-col gap-9 m-auto pb-10 w-full">
                    <FormField
                        control={form.control}
                        name="memo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Memo</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Amount ($)</FormLabel>
                                <FormControl>
                                    <Input type="number" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Date</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[240px] pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {!isSavingPayment ? (<Button>Save Changes</Button>) : (<Loader2 className="animate-spin mx-auto" />)}
                </form>
            </Form>
        </div>
    )
}

export default EditPayment