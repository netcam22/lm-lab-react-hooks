export interface CatBreed {
	name: string; 
	temperament: string;
}

export const CatText:React.FC<CatBreed> = ({name, temperament}) => 
<><p>Breed: {name}</p>
<p>Temperament: {temperament}</p></>;
