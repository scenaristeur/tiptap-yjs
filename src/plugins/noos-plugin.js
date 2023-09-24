import { HocuspocusProvider } from "@hocuspocus/provider";
import * as Y from "yjs";
import * as awarenessProtocol from "y-protocols/awareness.js";

const NoosPlugin = {
  install(app, opts = {}) {
    let store = opts.store;
    //  let router = opts.router
    // configure the app
    const coreYdoc = new Y.Doc();
    // const roomsYmap = coreYdoc.getMap('rooms')
    // const usersYmap = coreYdoc.getMap('users')
    const coreProvider = new HocuspocusProvider({
      //url: "wss://yjs-leveldb.glitch.me/", // old noosphere with leveldb persistance
      url: "wss://hocus-noosphere.glitch.me/", //hocuspocus with mysqlite //'wss://connect.hocuspocus.cloud',
      // parameters: {
      //   key: 'write_bqgvQ3Zwl34V4Nxt43zR',
      // },
      name: "noosphere",
      document: coreYdoc,
    });

    console.log(
      "Gestion de deux canaux : noosphere/core dans le plugin  (utilisateurs, rooms) et  par le nom de la room dans l'editeur"
    );

    let users = coreYdoc.getMap("users");
    console.log("CORE users ", users);
    store.commit("setCOREUsers", users);

    let rooms = coreYdoc.getMap("rooms");
    console.log("CORE rooms", rooms);
    store.commit("setCORERooms", rooms);
    //for (const [key/*, value*/] of rooms) { rooms.delete(key) }
    // let empty = new Y.Map()
    // coreYdoc.set('rooms', empty)
    // coreYdoc.set('users', empty)

    users.observe((ymapEvent) => {
      ymapEvent.target === users; // => true

      // Find out what changed:
      // Option 1: A set of keys that changed
      ymapEvent.keysChanged; // => Set<strings>
      // Option 2: Compute the differences
      ymapEvent.changes.keys; // => Map<string, { action: 'add'|'update'|'delete', oldValue: any}>

      // sample code.
      ymapEvent.changes.keys.forEach((change, key) => {
        if (change.action === "add") {
          console.log(
            `USERS Property "${key}" was added. Initial value: `,
            users.get(key)
          );
        } else if (change.action === "update") {
          console.log(
            `USERS Property "${key}" was updated. New value: "${users.get(
              key
            )}". Previous value: `,
            change.oldValue
          );
        } else if (change.action === "delete") {
          console.log(
            `USERS Property "${key}" was deleted. New value: undefined. Previous value: `,
            change.oldValue
          );
        }
      });
    });

    rooms.observe((ymapEvent) => {
      ymapEvent.target === rooms; // => true

      // Find out what changed:
      // Option 1: A set of keys that changed
      ymapEvent.keysChanged; // => Set<strings>
      // Option 2: Compute the differences
      ymapEvent.changes.keys; // => Map<string, { action: 'add'|'update'|'delete', oldValue: any}>

      // sample code.
      ymapEvent.changes.keys.forEach((change, key) => {
        if (change.action === "add") {
          console.log(
            `ROOM Property "${key}" was added. Initial value: `,
            rooms.get(key)
          );
        } else if (change.action === "update") {
          console.log(
            `ROOM Property "${key}" was updated. New value: "${rooms.get(
              key
            )}". Previous value: `,
            change.oldValue
          );
        } else if (change.action === "delete") {
          console.log(
            `ROOM Property "${key}" was deleted. New value: undefined. Previous value: `,
            change.oldValue
          );
        }
      });
    });

    // ymap.set('key', 'value') // => Property "key" was added. Initial value: "value".
    // ymap.set('key', 'new') // => Property "key" was updated. New value: "new". Previous value: "value".
    // ymap.delete('key') // => Property "key" was deleted. New value: undefined. Previous Value: "new".

    const awareness = coreProvider.awareness;
    // coreProvider.on("awarenessUpdate", ({ states }) => {
    //   console.log("states", states);
    //   users = coreYdoc.getMap('users')
    //   rooms = coreYdoc.getMap('rooms')
    //   store.commit('setUsers', users)
    //   store.commit('setRooms', rooms)
    // });
    console.log("CORE awareness", awareness, awareness.clientID);

    window.addEventListener("beforeunload", () => {
      awarenessProtocol.removeAwarenessStates(
        awareness,
        [coreYdoc.clientID],
        "window unload"
      );
    });

    store.commit("setCOREAwareness", awareness);

    // awareness.on('change', changes => {
    //   console.log('changes', changes)
    //   // Whenever somebody updates their awareness information,
    //   // we log all awareness information from all users.
    //   console.log("USERS", Array.from(awareness.getStates().values()))
    //   store.commit('setUsers', Array.from(awareness.getStates().values()))
    // })

    // Encode the complete Awareness state
    // const encodedAwState = awarenessProtocol.encodeAwarenessUpdate(
    //   provider.awareness,
    //   Array.from(provider.awareness.getStates().keys())
    // )
    // Make sure to share the complete awareness state whenever you
    // connect to a new client. Similarly to the Yjs CRDT, it doesn't
    // matter if the remote client receives the same state-updates several
    // times. What is important is that the state is distributed.

    // Whenever the local state changes, communicate that change to all connected clients
    awareness.on("update", ({ added, updated, removed }) => {
      const changedClients = added.concat(updated).concat(removed);
      console.log(
        "CORE awareness update",
        changedClients,
        added,
        updated,
        removed
      );
      // broadcastAwarenessMessage(awarenessProtocol.encodeAwarenessUpdate(awareness, changedClients))
    });

    //nettoyage
    // rooms.observe((event, trans) => {
    //   for (let key of event.keysChanged) {
    //     console.log(trans)
    //     rooms.delete(key);
    //   }
    // });

    //   app.config.globalProperties.$init = (key) => {
    //     console.info("INIT CORE", key /*, store, router*/);
    //     // app.config.globalProperties.$initCoreProvider();
    //     // app.config.globalProperties.$initRooms();
    //     // app.config.globalProperties.$initUsers();
    //   //   let user = JSON.parse(localStorage.getItem("currentUser")) || {
    //   //     name: app.config.globalProperties.$getRandomName(),
    //   //     color: app.config.globalProperties.$getRandomColor(),
    //   //     rooms: [],
    //   //   };
    //   //   console.log("setCOREuser", user);
    //   //   store.commit("setUser", user);
    //   //   let room =
    //   //     JSON.parse(localStorage.getItem("currentRoom")) ||
    //   //     app.config.globalProperties.$getRandomRoom();
    //   //   store.commit("setCORERoom", room);
    //   // };

    //   // app.config.globalProperties.$initCoreProvider = () => {};
    //   // app.config.globalProperties.$initRooms = () => {};
    //   // app.config.globalProperties.$initUsers = () => {};

    //   // app.config.globalProperties.$getRandomElement = (list) => {
    //   //   return list[Math.floor(Math.random() * list.length)];
    //   // };
    //   // app.config.globalProperties.$getRandomRoom = () => {
    //   //   // const roomNumbers = variables.collabRooms?.trim()?.split(',') ?? [10, 11, 12]
    //   //   const roomNumbers = [...Array(99).keys()]; // [61 /*10, 11, 12*/]
    //   //   return app.config.globalProperties.$getRandomElement(
    //   //     roomNumbers.map((number) => `rooms.${number}`)
    //   //   );
    //   // };
    //   // (app.config.globalProperties.$getRandomColor = () => {
    //   //   return app.config.globalProperties.$getRandomElement([
    //   //     "#958DF1",
    //   //     "#F98181",
    //   //     "#FBBC88",
    //   //     "#FAF594",
    //   //     "#70CFF8",
    //   //     "#94FADB",
    //   //     "#B9F18D",
    //   //   ]);
    //   // }),
    //   //   (app.config.globalProperties.$getRandomName = () => {
    //   //     return app.config.globalProperties.$getRandomElement([
    //   //       "Lea Thompson",
    //   //       "Cyndi Lauper",
    //   //       "Tom Cruise",
    //   //       "Madonna",
    //   //       "Jerry Hall",
    //   //       "Joan Collins",
    //   //       "Winona Ryder",
    //   //       "Christina Applegate",
    //   //       "Alyssa Milano",
    //   //       "Molly Ringwald",
    //   //       "Ally Sheedy",
    //   //       "Debbie Harry",
    //   //       "Olivia Newton-John",
    //   //       "Elton John",
    //   //       "Michael J. Fox",
    //   //       "Axl Rose",
    //   //       "Emilio Estevez",
    //   //       "Ralph Macchio",
    //   //       "Rob Lowe",
    //   //       "Jennifer Grey",
    //   //       "Mickey Rourke",
    //   //       "John Cusack",
    //   //       "Matthew Broderick",
    //   //       "Justine Bateman",
    //   //       "Lisa Bonet",
    //   //     ]);
    //   //   });
  },
};

export default NoosPlugin;
