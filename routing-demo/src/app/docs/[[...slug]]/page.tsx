export default async function Docs({params} : {params: Promise<{slug: string}>}) {
    const {slug} = await params

    if(slug?.length === 2) {
        return <h1>Viewing docs Page for feature {slug[0]} and concept {slug[1]}</h1>
    } 

    if(slug?.length === 1) {
        return <h1>Viewing docs Page for feature {slug[0]} </h1>
    } 

    return <h1>Viewing docs Page </h1>
}