import styled from "styled-components"
import { CustomEditor } from "./CustomEditor";

const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.bgColor};
`

export const Content = () => {
  return (
    <Container>
      <CustomEditor />
    </Container>
  )
}