import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PageBase from './pages/PageBase'
import Top10 from './pages/top10'
import Fewplayed from './pages/fewplayed'
import Myfavorites from './pages/Myfavorites'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={ <PageBase /> }>
                    <Route index element={ <Home /> }></Route>
                    <Route path="/top10" element={ <Top10 /> }></Route>
                    <Route path="/fewplayed" element={ <Fewplayed /> }></Route>
                    <Route path="/myfavorites" element={ <Myfavorites /> }></Route>
            </Route>        
            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes
