import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { GlobalStyle } from "./components/styles/global";
import { defaultTheme } from "../src/components/styles/themes/default";

export function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary"/>
      <Button variant="success" />
      <Button variant="danger"/>
      <GlobalStyle />
    </ThemeProvider>
  )
}


