import { Route, Routes } from 'react-router-dom';
import Recipes from '../pages/recipes';
import NotFound from '../pages/errors/404';
import Ingredients from '../pages/ingredients';
import Home from '../pages/home';
import Authentication from '../pages/auth';
import Recipe from '../pages/recipe';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes/:search?" element={<Recipes />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRouter;
