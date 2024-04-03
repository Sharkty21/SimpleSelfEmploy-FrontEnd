import Navbar from "@/components/shared/Navbar"
import { Loader2 } from "lucide-react"

const Callback = () => {
    return (
        <div className="w-full flex flex-col">
            <Navbar />
            <section className="flex flex-1 justify-center items-center w-4/5 mx-auto">
                <Loader2 className="animate-spin" />
            </section>
        </div>
    )
}
export default Callback