import { styled } from "styled-components"
import README from "../components/README"
import { Link } from "@mui/joy"

const PointerEventsWrapper = styled.div`
  .dialog {
    position: absolute;
    height: 50vh;
    width: 50vw;
    top: 20px;

    background-color: rgba(1, 1, 1, 0.2);
    pointer-events: none;
  }

`

function PointerEvents() {
  return (
    <PointerEventsWrapper>
      <h1>PointerEvents</h1>
      <div
        onClick={() => {
          console.log("sedationh", "f click")
        }}
      >
        f
        <div
          style={{
            pointerEvents: "none",
            // 这个元素上的点击事件就不触发了 继承式的
          }}
          onClick={() => {
            console.log("sedationh", "s click")
          }}
        >
          s
          <div
            onClick={() => {
              console.log("sedationh", "ss click")
            }}
          >
            ss
          </div>
        </div>
      </div>

      <div className="dialog"></div>
      <README>
        <Link component="a" href="https://juejin.cn/post/7171765872900440078" target="_blank">
          https://juejin.cn/post/7171765872900440078
        </Link>
      </README>
    </PointerEventsWrapper>
  )
}

export default PointerEvents
