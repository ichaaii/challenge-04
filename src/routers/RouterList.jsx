import {BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import {Home} from '../pages/Home'
import PopularMovie from '../pages/PopularMovie'
import DetailMovie from '../pages/DetailMovie'


export const RouterList = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path= '/' element= {<Home/>}/>
        <Route path= '/Popular' element= {<PopularMovie/>}/>
        <Route path='/movie/:id' element= {<DetailMovie/>}/>
    </Routes>
    </BrowserRouter>
  )
}
