
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { BooksList } from './BooksList'
import { AddBook } from './AddBook'
const reactQuery = new QueryClient()
function App() {
  return (
    <>
      <QueryClientProvider client={reactQuery}>
<BooksList/>
<AddBook/>
      </QueryClientProvider>
    </>
  )
}

export default App
