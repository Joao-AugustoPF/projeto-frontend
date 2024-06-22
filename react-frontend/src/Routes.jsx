
import {Routes, Route} from "react-router-dom"

import Root from "./routes/root"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import WelcomePage from "./components/Welcome"
import ProtectedRoutes from "./components/ProtectedRoutes"
import ProductsList from "./components/ProductsList"
import Registro from "./components/Registro"
import ProductsForm from "./components/ProductsForm"

const MainRoutes = () => (
	<Routes>
			<Route path="/" element={<Navbar />}>
				<Route path="/" element={<Main />}></Route>
				<Route path="/dashboard" element={<ProtectedRoutes roleRequired="master" />}>
				<Route path="/dashboard" element={<Root />}>
					<Route path="" element={<WelcomePage />} />
					<Route path="cadastro">
						<Route path="produtos" element={<ProductsForm />}/>
						<Route path="servicos" element="" />
					</Route>
					<Route path="edit/:id" element={<ProductsForm />} />
					<Route path="listagem">
						<Route path="produtos" element={<ProductsList />} />
						<Route path="servicos" element="" />
					</Route>
				</Route>
			</Route>
		</Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
	</Routes>
)

export default MainRoutes