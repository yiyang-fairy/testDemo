import { useBoolean } from "ahooks"
import React from "react"

function README({ children }: { children: React.ReactNode }) {
  const [isVisible, { set }] = useBoolean(false)
  return (
    <div className="fixed bottom-2 left-2 select-none cursor-pointer p-2">
      <div
        onClick={() => {
          set(!isVisible)
        }}
        className={`mb-${isVisible ? "2" : "0"} bg-green-300`}
      >
        Click {!isVisible ? "Show" : "Hide"} README
      </div>
      {isVisible && <div>{children}</div>}
    </div>
  )
}

export default README
