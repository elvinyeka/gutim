import { Outlet } from 'react-router-dom'
import Header from '@/components/layouts/Main/Header'
import Footer from '@/components/layouts/Main/Footer'
import { Toaster } from 'sonner'


const Main = () => {
  return (
    <main>
      <Header/>
      <Outlet/>
      <Toaster position='top-center' richColors />
      <Footer/>
    </main>
  )
}

export default Main
