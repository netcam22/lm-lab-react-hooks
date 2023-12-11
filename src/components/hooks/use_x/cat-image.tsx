import { CatText, CatBreed } from "./cat-text";

export interface CatResponse {
	id: string;
	url: string;
	breeds: Array<CatBreed>
}

export const CatImage:React.FC<CatResponse> = ({url, breeds}) => 
<div className = "cat"><img className = "cat-image" src = {url}/>
{breeds.map((breed, index) => {
        return <CatText key={index.toString()} name = {breed.name} temperament= {breed.temperament} />
        })} 
</div>;
