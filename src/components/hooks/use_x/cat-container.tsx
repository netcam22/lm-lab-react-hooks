import {useFetch} from "./use_fetch";
import { CatView } from "./cat-view";
import { CatInfo } from "./cat-info";
interface APICallProps {
    endPoint: string;
}
export interface CatResponse {
	id: string;
	url: string;
	breeds: Array<CatInfo>
}

export const CatContainer:React.FC<APICallProps> = ({endPoint}) => {

	const catData = useFetch<Array<CatResponse>>(endPoint);
	return (<>
		<h2>Custom Hook</h2>
		{catData.isFetching ? 
		<p>Fetching...</p> 
		: <p>Cats:</p>}
		<div className = "cat-container">
		{catData.data &&
        catData.data.map((cat) => {
        return <CatView key={cat.id} id={cat.id} url = {cat.url} breeds = {cat.breeds}/>
        })} 
		</div>
		</>)
}
