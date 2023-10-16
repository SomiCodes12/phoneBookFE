import { RouterProvider} from "react-router-dom"
import { MainRoute } from "./Router/MainRoute"
import { QueryClient  , QueryClientProvider } from "@tanstack/react-query"

let client = new QueryClient()

const App = () => {
  return (
    <div>
       <QueryClientProvider client={client}>
        <RouterProvider router={MainRoute}/>
        </QueryClientProvider>
    </div>
  )
}

export default App