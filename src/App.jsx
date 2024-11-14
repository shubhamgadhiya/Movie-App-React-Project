import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Details from './pages/details/Details'
import PageNotFound from './pages/404/pageNotFound'

import SearchResult from './pages/searchResults/SearchResults'
import { fetchDataFromApi } from './utils/api'
import { getApiConfiguration } from './store/movieSlice'

function App() {
  const dispatch = useDispatch()
  const url = useSelector(state => state.movie)

  useEffect(() => {
    apiCall()
  }, [])

  const apiCall = () => {
    fetchDataFromApi('/configuration').then(res => {
      const url = res.images.secure_base_url + 'original'
      dispatch(getApiConfiguration(url))
    })
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
