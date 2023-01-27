import React from "react";
import { ListGame, MarkGame, TodoContextType } from "../types";

interface propsGameProvider {
    children?: React.ReactNode
}

export const GameContext = React.createContext<TodoContextType | null>(null);

const GameProvider : React.FC<propsGameProvider> = ({ children }) => {
  
    const [GameChecked, setGameChecked] = React.useState<Array<ListGame>>([]);
    const [GameWin, setGameWin] = React.useState<boolean>(false);
  
    const verifyWin = (list:Array<ListGame>, values:Array<string>) => {
        const line1Win = list.filter((item)=>item.name === values[0] || item.name === values[1] || item.name === values[2]);
        let ret = false;
        if ( line1Win.length === 3){
            ret = (line1Win[0].odd === MarkGame.O && line1Win[1].odd === MarkGame.O && line1Win[2].odd === MarkGame.O) ||
                (line1Win[0].odd === MarkGame.X && line1Win[1].odd === MarkGame.X && line1Win[2].odd === MarkGame.X)
        }
        return ret;
    }
  
    const getOdd = (name:string) :MarkGame => {
        const exists = GameChecked.filter((item)=>item.name === name);
        return exists.length > 0 ? exists[0].odd : MarkGame.N;
    }
  
    const setOdd = (name:string) => {
        const exists = GameChecked.filter((item)=>item.name === name);
        if (exists.length === 0){
            const odd = GameChecked.length > 0 ? GameChecked[GameChecked.length-1].odd === MarkGame.X ? MarkGame.O : MarkGame.X : MarkGame.X;
            const newList = GameChecked.concat({ name:name, odd:odd });
            setGameChecked(newList);
        
            const lineWin = verifyWin(newList,["1","2","3"]) || verifyWin(newList,["4","5","6"]) || verifyWin(newList,["7","8","9"]);
            const columnWin = verifyWin(newList,["1","4","7"]) || verifyWin(newList,["2","5","8"]) || verifyWin(newList,["3","6","9"]);
            const diagWin = verifyWin(newList,["1","5","9"]) || verifyWin(newList,["3","5","7"]);
            setGameWin(lineWin || columnWin || diagWin);      
        }
    }

    const restartGame = () => {
        setGameWin(false);    
        setGameChecked([]);          
    }
  
    return (
        <GameContext.Provider value={{ GameWin, verifyWin, getOdd, setOdd, restartGame }}>
          {children}
        </GameContext.Provider>
    );
};
    
export default GameProvider;