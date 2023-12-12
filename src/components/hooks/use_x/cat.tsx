import {useFetch} from "./use_todo";
import { CatImage } from "./cat-image";
import { CatBreed } from "./cat-text";
interface APICallProps {
    endPoint: string;
}
export interface CatResponse {
	id: string;
	url: string;
	breeds: Array<CatBreed>
}

export const Cat:React.FC<APICallProps> = ({endPoint}) => {

	const catData = useFetch<Array<CatResponse>>(endPoint);
	return (<>
		<h2>Custom Hook</h2>
		{catData.isFetching ? 
		<p>Fetching...</p> 
		: <p>Cats:</p>}
		<div className = "cat-container">
		{catData.data &&
        catData.data.map((cat) => {
        return <CatImage key={cat.id} id={cat.id} url = {cat.url} breeds = {cat.breeds}/>
        })} 
		</div>
		</>)
}
