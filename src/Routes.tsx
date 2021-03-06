import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App";
import Home from './components/Home';
import MatchHistory from './components/MatchHistory';
// import your route components too

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path=":summonerName" element={<MatchHistory />} />
            </Route>

        </Routes>
    </BrowserRouter>
);



{/* <Route path="teams" element={<Teams />}>
<Route path=":teamId" element={<Team />} />
<Route path="new" element={<NewTeamForm />} />
<Route index element={<LeagueStandings />} /> */}