import React, { useState } from "react";
const Folder = ({ explorerData, handleInsertNodes }) => {
  const [expand, setExpand] = useState(false);
  const [isShowInput, setIsShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setIsShowInput({
      visible: true,
      isFolder,
    });
    setExpand(true);
  };

  const addNewFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNodes(explorerData.id, e.target.value, isShowInput.isFolder);
      setIsShowInput({ ...isShowInput, visible: false });
    }
  };
  if (explorerData.isFolder) {
    return (
      <div style={{ marginTop: "5px" }}>
        <div className="folder" onClick={() => setExpand((prev) => !prev)}>
          <span>🗂️ {explorerData.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
        </div>
        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "25px" }}
        >
          {isShowInput.visible && (
            <div className="inputContainer">
              <span>{isShowInput.isFolder ? "🗂️" : "📃"}</span>
              <input
                className="inputContainer__input"
                onKeyDown={addNewFolder}
                autoFocus
                type="text"
                onBlur={() =>
                  setIsShowInput({ ...isShowInput, visible: false })
                }
              />
            </div>
          )}
          {explorerData.items.map((item, index) => {
            return (
              <Folder
                explorerData={item}
                key={item.id}
                handleInsertNodes={handleInsertNodes}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ marginTop: "5px" }} className="file">
        <span>📃 {explorerData.name}</span>
      </div>
    );
  }
};
export default Folder;
