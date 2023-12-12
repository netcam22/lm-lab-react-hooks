import { CatText} from "./cat-info";
import { CatResponse } from "./cat-container";

export const CatView:React.FC<CatResponse> = ({url, breeds}) => 
<div className = "cat"><img alt = "" className = "cat-image" src = {url}/>
{breeds.map((breed, index) => {
        return <CatText key={index.toString()} name = {breed.name} temperament= {breed.temperament} />
        })} 
</div>;
