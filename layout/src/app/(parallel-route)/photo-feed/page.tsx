import Link from "next/link";
import { photodata } from "./photo-data";

export default function PhotoFeed() {

    const renderPhoto = (data: any) => {
        return <div className="flex max-w-[400px]">
        <img src={data.url}/>
    </div>
    }

    return <div  className="flex w-full">
        {
             photodata.map(d => {
                return <Link href={`photo-feed/${d.id}`}>
                    {renderPhoto(d)}
                </Link >
            })
        }
    </div>
}