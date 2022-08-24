import CardGroup from 'react-bootstrap/CardGroup';
import TestImg from "../assets/logoblanco.png"
import ItemCounter from './ItemCounter';
import TestCard from './TestCard';

const TestGroupCards = () => {
  return (
    <CardGroup>
      <TestCard title = "Counter" text="Assignment for 4th class: Components II">  
      <ItemCounter />
      </TestCard>

      <TestCard image = {TestImg} title="Learning how cards work" text="just a smol text"/>

      {/* <TestCard image = {TestImg} /> */}
    </CardGroup>
  );
}
export default TestGroupCards;