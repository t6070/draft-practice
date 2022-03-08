import React, { useState } from "react";
import "draft-js/dist/Draft.css";
import "../App.css";
const { Editor, EditorState } = require("draft-js");

const MyEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div className="wrapper">
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
};

export default MyEditor;
