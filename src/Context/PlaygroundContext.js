import { createContext, useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';

export const PlaygroundContext = createContext();
export const languageMap = {
    "cpp": {
        id: 54,
        defaultCode:
            "#include <iostream>\n\n"
            + "using namespace std;\n\n"
            + "int main(){\n"
            + '\tcout << "hello world!";\n'
            + "\treturn 0;\n"
            + "}"
    },
    "java": {
        id: 62,
        defaultCode: `public class Main {
            public static void main(String[] args){
                System.out.println("Hello World!");
            }
        }`,
    },
    "python": {
        id: 71,
        defaultCode: `print("Hello World")`,
    },
    "Javascript": {
        id: 63,
        defaultCode: `console.log("hello world!")`,
    }
};
const PlaygroundProvider = ({ children }) => {

    const initialItems = {
        [uuid()]: {
            title: "Stack imp",
            language: "cpp",
            code: languageMap["cpp"].defaultCode,
        },
        [uuid()]: {
            title: "Array",
            language: "Javascript",
            code: languageMap["Javascript"].defaultCode,
        },

    };

    const [folder, setFolder] = useState(() => {
        let localData = localStorage.getItem('playgrounds-data');
        if (localData === null || localData === undefined) {
            return initialItems;
        }
        return JSON.parse(localData)
    })

    useEffect(() => {
        localStorage.setItem('playground-data', JSON.stringify(folder))

    }, [folder]);


    const deleteCard = (folderID, cardID) => {
        setFolder((oldState) => {
            const newState = { ...oldState };
            delete newState[folderID].playgrounds[cardID];
            return newState;
        })
    }

    const deleteFolder = (folderID) => {
        setFolder((oldState) => {
            const newState = { ...oldState };
            delete newState[folderID];
            return newState;
        });
    };

    const addFolder = (folderName) => {
        setFolder((oldState) => {
            const newState = { ...oldState };
            newState[uuid()] = {
                title: folderName,
                playgrounds: {},
            };
            return newState;
        });
    };

    const addPlayground = (folderID, playgroundName, language) => {
        setFolder((oldState) => {
            const newState = { ...oldState };
            newState[folderID].playgrounds[uuid()] = {
                title: playgroundName,
                language: language,
                code: languageMap[language].defaultCode,
            };
            return newState;
        });

    };

    const addPlaygroundAndFolder = (folderName, playgroundName, cardlanguage) => {
        setFolder((oldState) => {
            const newState = { ...oldState };
            newState[uuid()] = {
                title: folderName,
                playgrounds: {
                    [uuid()]: {
                        title: playgroundName,
                        language: cardlanguage,
                        code: languageMap[cardlanguage].defaultCode,
                    }
                }
            };
            return newStatel
        });
    };

    const editFolderTitle = (folderID, newFolderTitle) => {
        setFolder((oldState) => {
            const newState = { ...oldState };
            newState[folderID].title = newFolderTitle;
            return newState;
        })
    }

    const editCardTitle = (folderID, cardID, newCardTitle) => {
        setFolder((oldState) => {
            const newState = { ...oldState };
            newState[folderID].playgrounds[cardID].title = newCardTitle;
            return newState;
        });
    };

    const saveplayground = (folderID, cardID, newCode, newLanguage) => {
        setFolder((oldState) => {
            const newState = { ...oldState };
            newState[folderID].playgrounds[cardID].code = newCode;
            newState[folderID].playgrounds[cardID].language = newLanguage;
            return newState;
        });
    };
const playgroundFeature={
    folder:folder,

    deleteCard:deleteCard,
    deleteFolder:deleteFolder,
    addFolder:addFolder,
    addPlayground:addPlayground,
    addPlaygroundAndFolder:addPlaygroundAndFolder,
    editFolderTitle:editFolderTitle,
    editCardTitle:editCardTitle,
    saveplayground:saveplayground,
    
}


    return(
        <PlaygroundContext.Provider >
            {children}
        </PlaygroundContext.Provider>
    )
};
export default PlaygroundProvider