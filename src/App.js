import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { QueryClientProvider } from "./contexts/QueryClient";
import RoutesContainer from "./routes";

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider>
        <BrowserRouter>
          <RoutesContainer />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
