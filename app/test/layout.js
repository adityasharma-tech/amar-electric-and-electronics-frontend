import "./style.css"
import "./style2.css"
import "./style3.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function TestLayout({ children }) {
  return <main className="overflow-x-hidden">
      {children}
    </main>
}