import EditJob from "@/components/forms/EditJob"
import EditPayment from "@/components/forms/EditPayment";

const New = ({type}: {type: string}) => {    
    let content;

    switch (type) {
        case "job":
            content = <EditJob job={undefined} complete={undefined} />;
            break;
        case "payment":
            content = <EditPayment payment={undefined} complete={undefined} />;
            break;
        default:
            content = <div>404 Page Not Found</div>
    }

    return (
        <div className="w-full">
            { content }
        </div>
    )
}

export default New