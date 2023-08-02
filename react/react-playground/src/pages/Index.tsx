import { CssBaseline, CssVarsProvider, Divider } from "@mui/joy"

function Index() {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <h1 className="text-4xl text-center my-4">
        欢迎来到
        <span className="text-5xl px-2 text-blue-500">晨曦</span>的 React Playground
      </h1>
      <Divider
        slotProps={{
          root: {
            className: "!my-4",
          },
        }}
      />
      {/* TODO: 增加 1. 卡片 2. Pre 渲染逻辑 */}
    </CssVarsProvider>
  )
}

export default Index
