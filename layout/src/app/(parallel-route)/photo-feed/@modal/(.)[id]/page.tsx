import Modal from "@/app/components/modal";
import { photodata } from "../../photo-data";

interface Props {
    params: Promise<{id: string}>
}

export default async function ProductDetails({params}: Props) {
    const {id} = await params;

    const photodetails = photodata.find((data: any) => data.id === parseInt(id));

    return <Modal>
        photo details {id}
        <img src={photodetails?.url}/>    
    </Modal>
}