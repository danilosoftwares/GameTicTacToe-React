import { Box } from './Components/Box';
import { Layout } from './Components/Layout';
import { Message } from './Components/Message';
import { Restart } from './Components/Restart';
import { Table } from './Components/Table';
import GameProvider from './Context/GameContext';

function App() {
  return (
    <GameProvider>
      <Layout>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <Table>
          <Box position={"1"}></Box>
          <Box position={"2"}></Box>
          <Box position={"3"}></Box>
          <Box position={"4"}></Box>
          <Box position={"5"}></Box>
          <Box position={"6"}></Box>
          <Box position={"7"}></Box>
          <Box position={"8"}></Box>
          <Box position={"9"}></Box>
        </Table>
        <Message text={"You Win!!!"} />
        <Restart></Restart>
      </Layout>
    </GameProvider>
  );
}

export default App;
