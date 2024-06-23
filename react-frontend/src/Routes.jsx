
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
import ServicesForm from "./components/ServicesForm"
import ServicesList from "./components/ServicesList"
import Settings from "./components/Settings"

const MainRoutes = () => (
	<Routes>
			<Route path="/" element={<Navbar />}>
				<Route path="/" element={<Main />}></Route>
				<Route path="/dashboard" element={<ProtectedRoutes roleRequired="master" />}>
				<Route path="/dashboard" element={<Root />}>
					<Route path="" element={<WelcomePage />} />
					<Route path="cadastro">
						<Route path="produtos" element={<ProductsForm />}/>
						<Route path="servicos" element={<ServicesForm />} />
					</Route>
					<Route path="produtos/edit/:id" element={<ProductsForm />} />
					<Route path="servicos/edit/:id" element={<ServicesForm />} />
					<Route path="listagem">
						<Route path="produtos" element={<ProductsList />} />
						<Route path="servicos" element={<ServicesList />} />
					</Route>
					<Route path="settings" element={<Settings />} />
				</Route>
			</Route>
		</Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
	</Routes>
)

export default MainRoutes