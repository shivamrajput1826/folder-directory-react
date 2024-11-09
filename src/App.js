import "./styles.css";
import { useState } from "react";
import { explorer } from "./data/folderData";
import Folder from "./components/folder";
import useTraverseTree from "./hooks/use-traverse-tree";

export default function App() {
  const [explorerData, setExplorerData] = useState(() => {
    return explorer;
  });
  const { insertNode } = useTraverseTree();
  const handleInsertNodes = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };
  console.log(explorerData);
  return (
    <div className="App">
      <Folder
        explorerData={explorerData}
        handleInsertNodes={handleInsertNodes}
      />
    </div>
  );
}
