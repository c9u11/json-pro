import styled from "styled-components"
import { ThemeChanger } from "./ThemeChanger"

const Container = styled.div`
  background-color: ${props => props.theme.headerBgColor}
`
export const BaseLayout = () => {
  return (
    <Container>
      <ThemeChanger></ThemeChanger>
    </Container>
  )
}