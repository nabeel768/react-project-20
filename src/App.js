import Accordion from './Accordion';
import './App.css';
import accordionData from './utils/content';

function App() {
  return (
    <div>
      <div className='accordion'>
        {accordionData.map(({title,content})=>{
         return <Accordion key={Math.random()*100} title={title} content={content}/>
        })}
      </div>
    </div>
  );
}

export default App;
