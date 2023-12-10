import {useFetch} from "./use_todo";

interface APICallProps {
    endPoint: string;
}

export interface CatResponse {
	id: string;
	url: string;
}

export const Cats:React.FC<APICallProps> = ({endPoint}) => {

	const catData = useFetch<Array<CatResponse>>(endPoint);
	return (<>
		<h2>Custom Hook</h2>
		{catData.isFetching ? 
		<p>Fetching...</p> 
		: <p>Cats:</p>}
		<div className = "cat-container">
		{catData.data &&
        catData.data.map((cat) => {
        return <CatImage key={cat.id} id={cat.id} url = {cat.url}/>
        })} 
		</div>
		</>)
}

export const CatImage:React.FC<CatResponse> = ({url}) => 
<div className = "cat"><img className = "cat-image" src = {url}/></div>;
