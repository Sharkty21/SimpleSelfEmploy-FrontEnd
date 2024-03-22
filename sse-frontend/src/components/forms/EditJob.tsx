import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { IJob } from "@/types"
import { JobValidation } from "@/lib/validation"
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
import { useSaveJob } from "@/lib/tanstack-query/queries"
import { error } from "console"

const EditJob = ({ job, complete }: { job: IJob, complete: () => void }) => {
    const { toast } = useToast();
    const { mutateAsync: saveJob, isPending: isSavingJob } = useSaveJob();
    
    const handleSubmit = async (job: z.infer<typeof JobValidation>) => {
        try {
            console.log(job);
            const response = await saveJob(job);
            if (response == undefined) throw Error;

            toast({
                title: "Save successful",
              });
    
            complete();
        } catch (e) {
            toast({
                title: "Save unsuccessful",
            });
        }
    };

    const form = useForm<z.infer<typeof JobValidation>>({
        resolver: zodResolver(JobValidation),
        defaultValues: {
            id: job.id,
            name: job.name,
            description: job.description,
            startDate: job.startDate,
            customerName: job.customerName,
        },
    });

    return (
        <div className="flex flex-col w-2/3 m-auto">
            <h3 className="mt-10 scroll-m-20 pb-2 text-2xl font-semibold">Edit Job</h3>
            <hr className="h-px mb-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="flex flex-col gap-9 m-auto pb-10 w-full">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="startDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Start Date</FormLabel>
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
                    <FormField
                        control={form.control}
                        name="customerName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Customer Name</FormLabel>
                                <FormControl>
                                    <Input type="text" className="shad-input" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {!isSavingJob ? (<Button>Save Changes</Button>) : (<Loader2 className="animate-spin mx-auto" />)}
                </form>
            </Form>
        </div>
    )
}

export default EditJob