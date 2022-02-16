import { createContext, useState } from "react";
const FinishedContext = createContext({
    finished: [],
    totalFinished: 0
});

function FinishedContextProvider(props) {
    const [userFinished, setUserFinished] = useState([]);
    function addFinishedHandler(finishedTask) {
        setUserFinished(userFinished.concat(finishedTask));
    }
    function removeFinishedHandler() { }
    function itemIsFInsihedHandler() { }
    const context = {
        finished: userFinished,
        totalFinished: userFinished.length
    };

    return <FinishedContext.Provider value={context}>
        {props.children}
    </FinishedContext.Provider>
}