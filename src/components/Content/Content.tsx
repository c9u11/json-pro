import AceEditor from "react-ace";
import styled from "styled-components"

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.bgColor};
`
function onChange(newValue: string) {
  console.log("change", newValue);
}
export const Content = () => {
  return (
    <Container>
      <AceEditor
        mode="json"
        theme="github"
        name="editor1"
        onChange={onChange}
        editorProps={{
          $blockScrolling: true
        }}
      />
    </Container>
  )
}