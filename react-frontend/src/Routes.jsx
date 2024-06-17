
import {Routes, Route} from "react-router-dom"

import Root from "./routes/root"
import CadastroProdutos from "./components/CadastroProdutos"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import WelcomePage from "./components/Welcome"
import ProtectedRoutes from "./components/ProtectedRoutes"
import Registro from "./components/Registro"

const MainRoutes = () => (
	<Routes>
			<Route path="/" element={<Navbar />}>
				<Route path="/" element={<Main />}></Route>
				<Route path="/dashboard" element={<ProtectedRoutes roleRequired="master" />}>
				<Route path="/dashboard" element={<Root />}>
					<Route path="" element={<WelcomePage />} />
					<Route path="cadastro" element={<CadastroProdutos />} />
				</Route>
			</Route>
		</Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
	</Routes>
)

export default MainRoutes