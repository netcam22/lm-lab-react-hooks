import './App.css';
import { Parent } from './components/hooks/use_context/parent';
import { APICall } from './components/hooks/use_effect/use_effect';
import { MemoExample } from './components/hooks/use_memo/useMemo';
import { Todo } from './components/hooks/use_x/todo';
import { CountRenders } from './components/hooks/use_ref/count_renders';
import { Focus } from './components/hooks/use_ref/focus';
import { CountCats } from './components/hooks/use_state/count_cats';
// import { TaskApp } from './components/hooks/use_reducer/todo_app';
import { Section } from './components/section';
import { Cats } from './components/hooks/use_x/cats';

function App() {
	return (
		<>
			<div className='App'>

				<Section>
					<Parent />
				</Section>

				<Section>
					<APICall endPoint = "https://jsonplaceholder.typicode.com/todos/1"/>
				</Section>

				<Section>
					<MemoExample />
				</Section>

				<Section>
					<CountRenders />
					<Focus/>
				</Section>

				<Section>
					<CountCats />
				</Section>

				<Section>
					<Todo endPoint = "https://jsonplaceholder.typicode.com/todos/1"/>
					<Cats endPoint = "https://api.thecatapi.com/v1/images/search?limit=16&has_breeds=1&api_key=live_7z9YrvTvX0vWxVWX3X4YlwaaLlPMavr2XgxFb9TuucYnRVzsORry3ScJo6W33Uft"/>
				</Section>

				<Section>
					This is an extension!
					{/* <TaskApp /> */}
				</Section>
			</div>
		</>
	);
}

export default App;
