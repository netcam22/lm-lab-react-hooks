export interface CatInfo {
	name: string; 
	temperament: string;
}

export const CatText:React.FC<CatInfo> = ({name, temperament}) => 
<><p>Breed: {name}</p>
<p>Temperament: {temperament}</p></>;
