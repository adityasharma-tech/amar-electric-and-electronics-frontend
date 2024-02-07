import "./style.css"
import "./style2.css"
import "./style3.css"

export default function TestLayout({ children }) {
  return <body className="overflow-hidden">
    <div className="off-canvas-wrapper w-100 position-relative">
          {children}
    </div>
  </body>
}