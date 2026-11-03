import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Utilties/Layout";
import DotsBackground from "@/components/Modules/dotsBackground";
import { routes } from "@/components/Data/routesWebsite";

function App() {
  return (
    <div className="relative min-h-dvh w-full bg-zinc-50 dark:bg-black">
      <DotsBackground />

      <Routes>
        <Route element={<Layout />}>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}

          <Route
            path="*"
            element={<div className="p-10 text-center">404 - Page Not Found</div>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;