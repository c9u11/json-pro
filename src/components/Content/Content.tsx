import AceEditor from "react-ace";
import styled from "styled-components"

const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.bgColor};
`
export const Content = () => {
  return (
    <Container>
      <AceEditor
        mode="json"
        theme="github"
        name="editor1"
        editorProps={{
          $blockScrolling: true
        }}
      />
    </Container>
  )
}