import { Container } from "unstated";

const initState = {
  currRoute: null,
  message: {},
  loading: false,
  reservations: []
};

const noop = () => {};

class MainStore extends Container {
  constructor() {
    super();
    this.state = initState;
  }

  initStore = (store, cb) => {
    store.setMainState = state => this.setState(state);

    store.setState = (state, cb = noop) => {
      const newState = {
        [store.name]: { ...this.state[store.name], ...state }
      };
      this.setState(newState, cb);
    };

    store.getState = () => this.state[store.name];

    store.init(cb);
  };

  updateCurrRoute = route => this.setState({ currRoute: route });
}

export default MainStore;
