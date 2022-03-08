import React, { useState } from "react";
import "draft-js/dist/Draft.css";
import "../App.css";
import { convertFromRaw, Editor, EditorState } from "draft-js";

//initDataとeditorStateの形は同じ
const initData = convertFromRaw({
  //テキスト装飾のためのメタ情報を格納したオブジェクト
  entityMap: {},
  blocks: [
    {
      key: "xxxxxx", // ユニークなキー値
      text: "ここに初期テキストがはいります。", // 任意のテキスト
      type: "unstyled", // テキストのタイプ。初期値は "unstyled"
      depth: 0,
      entityRanges: [],
      inlineStyleRanges: [],
      data: {},
    },
  ],
});

const initState = EditorState.createWithContent(initData);

const MyEditor = () => {
  //空に設定する場合は「EditorState.createEmpty()」
  //   const [editorState, setEditorState] = useState(() =>
  //     EditorState.createEmpty()
  //   );

  const [editorState, setEditorState] = useState(initState);

  return (
    <div className="wrapper">
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
};

export default MyEditor;
