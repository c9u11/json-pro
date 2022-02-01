import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-tomorrow";

import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../../atom/themeAtoms";
import styled from "styled-components";
import { useState } from "react";


const Container = styled.div`
  width: 50vw;
`

const ToolBar = styled.div`
  background-color: ${props => props.theme.toolBarBgColor};
  color: ${props => props.theme.toolBarTextColor};
  width: 100%;
  height: 35px;
  font-size: 22px;
`
const Title = styled.input`
  background-color: transparent;
  border: none;
  color: inherit;
  height: 100%;
  &:focus {
    outline: none;
  }
`

function onBodyChange(newValue: string) {
  console.log("change", newValue);
}

export const CustomEditor = () => {
  const isDark = useRecoilValue(isDarkAtom);
  const [title, setTitle] = useState("Json Example 1");
  function onTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }
  return (
    <Container>
      <ToolBar>
        <Title value={title} onChange={onTitleChange}></Title>
      </ToolBar>
      <AceEditor
        mode="json"
        theme={isDark ? "twilight" : "tomorrow"}
        name="editor1"
        onChange={onBodyChange}
        tabSize={2}
        wrapEnabled={true}
        editorProps={{
          $blockScrolling: true
        }}
        width="100%"
      // annotations={[{ row: 0, column: 2, type: 'error', text: 'Some error.' }]}
      />
    </Container>
  )
}