import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recipes from './recipes';
import NotFound from './errors/404';
import Ingredients from './ingredients';
import Home from './home';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/ingredients" element={<Ingredients />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
