import { photodata } from "../photo-data";

interface Props {
    params: Promise<{id: string}>
}

export default async function ProductDetails({params}: Props) {
    const {id} = await params;

    const photodetails = photodata.find(data => data.id === parseInt(id));

    return <div>
        photo details {id}
        <img src={photodetails?.url}/>    
    </div>
}