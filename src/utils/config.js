// import { recentEvents } from "../data/json/dashboard/recentevents.json";
import { delay } from "./utils";

export const SUBDIRECTORY = `/${process.env.REACT_APP_HOST}`;

export const FakeAPI = {
  fake: true, //default false
  getState: async data => {
    if (!data.accessCode) {
      return delay(1000).then(() =>
        Promise.resolve({
          isAuthenticated: true,
          isReauthRequired: false,
          user: {}
        })
      );
    }
    try {
      const res = await fetch("/api/find", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (!res.ok) {
        throw Error("Network Request Failed");
      }
      const user = await res.json();
      console.log("success!: ", user);
      return Promise.resolve({
        isAuthenticated: true,
        isReauthRequired: false,
        user
      });
    } catch (error) {
      console.log("core error", error);
      return Promise.reject(error);
    }
  },
  getRecentEvents: async data => {
    try {
      const res = await fetch("/data/json/dashboard/recentevents.json");
      if (!res.ok) {
        throw Error("Network Request Failed");
      }
      const events = await res.json();
      console.log("success!: ", events);
      return delay(1000).then(() => Promise.resolve(events));
    } catch (error) {
      console.log("core error", error);
      return Promise.reject(error);
    }
  },
  getDeviceRecentEvents: async data => {
    try {
      const res = await fetch("/data/json/devices/dooropen.json");
      if (!res.ok) {
        throw Error("Network Request Failed");
      }
      const events = await res.json();
      console.log("success!: ", events);
      return delay(1000).then(() => Promise.resolve(events));
    } catch (error) {
      console.log("core error", error);
      return Promise.reject(error);
    }
  }
};
