import { Container } from "unstated";
import AuthStore from "./AuthStore";
import MessageStore from "./MessageStore";

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

    this.initStore(AuthStore);
    this.initStore(MessageStore);
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

  toggleSidebar = () =>
    this.setState({ sidebarMinimized: !this.state.sidebarMinimized });

  updateCurrRoute = route => this.setState({ currRoute: route });

  get auth() {
    return AuthStore;
  }

  get message() {
    return MessageStore;
  }
}

export default MainStore;
