import { Outlet } from 'react-router-dom'
import Header from '@/components/layouts/Main/Header'
import Footer from '@/components/layouts/Main/Footer'


const Main = () => {
  return (
    <main>
      <Header/>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default Main
