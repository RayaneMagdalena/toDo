// CSS
import "./global.css"
// Components
import { Header } from "./components/Header/Header"
import { Input } from "./components/Input/Input"
import { TaskSection } from "./components/TaskSection/TaskSection"

export function App() {
  return(
    <div>
      <Header />
      <Input />
      <TaskSection />
    </div>
  )
}
