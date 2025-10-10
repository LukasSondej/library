
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { BooksList } from './BooksList'
import { AddBook } from './AddBook'
import { BookStats } from './BookStats'
const reactQuery = new QueryClient()
function App() {
  
  return (
    
   <div className='app'>

      <QueryClientProvider client={reactQuery}>
        <BookStats/>
<BooksList/>
<AddBook/>

      </QueryClientProvider>
      

   </div>

 
  )
}

export default App
