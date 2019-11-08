import { noop } from "../utils";

class Store {
  initState = {};
  queuedStates = [];
  timer = null;

  init(cb) {
    this.setState(this.initState, cb);
  }

  get state() {
    return (this.getState || noop)();
  }
  set state(obj) {
    this.queuedStates.push(obj);
    this.timer = setTimeout(() => {
      if (this.queuedStates.length) {
        (this.setState || noop)(Object.assign(...this.queuedStates));
        this.queuedStates = [];
      }
      clearTimeout(this.timer);
    }, 100);
  }

  async service(f = noop, args = [], showSuccess = true, showLoading = true) {
    this.setState({ ...this.state, loading: true, error: null });
    try {
      const res = await f(...args);
      console.log("res", res);
      this.setState({ ...this.state, ...res, loading: false, error: null });
    } catch (error) {
      console.log("error", error);
      this.setState({ ...this.state, loading: false, error });
      if (error.reauth) this.getUserState();
      return Promise.reject(error);
    }
  }
}

export default Store;
