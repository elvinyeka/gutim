import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Classes from '@/pages/Classes'
import ErrorPage from '@/pages/Errorpage'

import Main from '@/components/layouts/Main'
import ScrollToTop from '@/components/lib/ScrollToTop'
import Loader from '@/components/lib/Loader'


const Routing = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={'/'} element={<Main />}>
            <Route index element={<Home />} />
            <Route path={'about'} element={<About />} />
            <Route path={'classes'} element={<Classes />} />
          </Route>
          <Route path={'*'} element={<ErrorPage />} />
        </Routes>
      </Suspense>

    </BrowserRouter>
  )
}

export default Routing
