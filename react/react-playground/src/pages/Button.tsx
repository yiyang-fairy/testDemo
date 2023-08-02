import { Button, CssBaseline, CssVarsProvider } from "@mui/joy"

function JoyDemo1() {
  return (
    <CssVarsProvider>
      <CssBaseline />

      <Button variant="solid">Hello World</Button>
    </CssVarsProvider>
  )
}

export default JoyDemo1
