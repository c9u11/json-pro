import styled from "styled-components"
import { CustomEditor } from "./CustomEditor";

const Container = styled.div`
  height: 100vh;
  padding: 20px;
  background-color: ${props => props.theme.bgColor};
`

export const Content = () => {
  return (
    <Container>
      <CustomEditor />
    </Container>
  )
}