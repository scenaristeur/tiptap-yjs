import { HocuspocusProvider } from '@hocuspocus/provider'
import * as Y from 'yjs'
import * as awarenessProtocol from 'y-protocols/awareness.js'


const NoosPlugin = {
  install(app, opts = {}) {
    let store = opts.store
    //  let router = opts.router
    // configure the app
    const coreYdoc = new Y.Doc()
    // const roomsYmap = coreYdoc.getMap('rooms')
    // const usersYmap = coreYdoc.getMap('users')
    const coreProvider = new HocuspocusProvider({
      //url: "wss://yjs-leveldb.glitch.me/", // old noosphere with leveldb persistance
      url: 'wss://hocus-noosphere.glitch.me/', //hocuspocus with mysqlite //'wss://connect.hocuspocus.cloud',
      // parameters: {
      //   key: 'write_bqgvQ3Zwl34V4Nxt43zR',
      // },
      name: 'noosphere',
      document: coreYdoc,
    })

    let users = coreYdoc.getMap('users')
    console.log("users", users)
    store.commit('setUsers', users)

    let rooms = coreYdoc.getMap('rooms')
    console.log("rooms NOOSPLUGIN", rooms)
    store.commit('setRooms', rooms)
    //for (const [key/*, value*/] of rooms) { rooms.delete(key) }
    // let empty = new Y.Map()
    // coreYdoc.set('rooms', empty)
    // coreYdoc.set('users', empty)

    const awareness = coreProvider.awareness
    // coreProvider.on("awarenessUpdate", ({ states }) => {
    //   console.log("states", states);
    //   users = coreYdoc.getMap('users')
    //   rooms = coreYdoc.getMap('rooms')
    //   store.commit('setUsers', users)
    //   store.commit('setRooms', rooms)
    // });
    console.log("awareness",awareness)



    window.addEventListener('beforeunload', () => {
      awarenessProtocol.removeAwarenessStates(
        awareness, [coreYdoc.clientID], 'window unload'
      )
    })

    store.commit('setAwareness', awareness)



    awareness.on('change', changes => {
      console.log('changes', changes)
      // Whenever somebody updates their awareness information,
      // we log all awareness information from all users.
      console.log(Array.from(awareness.getStates().values()))
      store.commit('setUsers', Array.from(awareness.getStates().values()))
    })

//nettoyage
    rooms.observe((event, trans) => {
      for (let key of event.keysChanged) {
        console.log(trans)
        rooms.delete(key);
      }
    });




    app.config.globalProperties.$init = (key) => {
      console.info("INIT", key /*, store, router*/)
      app.config.globalProperties.$initCoreProvider()
      app.config.globalProperties.$initRooms()
      app.config.globalProperties.$initUsers()
      let user=  JSON.parse(localStorage.getItem('currentUser')) || {
        name: app.config.globalProperties.$getRandomName(),
        color: app.config.globalProperties.$getRandomColor(),
        rooms: []
      }
      console.log(user)
      store.commit('setUser', user)
      let room =  JSON.parse(localStorage.getItem('currentRoom')) || app.config.globalProperties.$getRandomRoom()
      store.commit('setRoom', room)
    }


    app.config.globalProperties.$initCoreProvider = () =>  {

    }
    app.config.globalProperties.$initRooms = () =>  {

    }
    app.config.globalProperties.$initUsers = () =>  {

    }



    app.config.globalProperties.$getRandomElement = (list) =>  {
      return list[Math.floor(Math.random() * list.length)]
    }
    app.config.globalProperties.$getRandomRoom = () => {
      // const roomNumbers = variables.collabRooms?.trim()?.split(',') ?? [10, 11, 12]
      const roomNumbers = [...Array(99).keys()] // [61 /*10, 11, 12*/]
      return app.config.globalProperties.$getRandomElement(roomNumbers.map(number => `rooms.${number}`))
    }
    app.config.globalProperties.$getRandomColor = () => {
      return app.config.globalProperties.$getRandomElement([
        '#958DF1',
        '#F98181',
        '#FBBC88',
        '#FAF594',
        '#70CFF8',
        '#94FADB',
        '#B9F18D',
      ])
    },
    app.config.globalProperties.$getRandomName = () => {
      return app.config.globalProperties.$getRandomElement([
        'Lea Thompson', 'Cyndi Lauper', 'Tom Cruise', 'Madonna', 'Jerry Hall', 'Joan Collins', 'Winona Ryder', 'Christina Applegate', 'Alyssa Milano', 'Molly Ringwald', 'Ally Sheedy', 'Debbie Harry', 'Olivia Newton-John', 'Elton John', 'Michael J. Fox', 'Axl Rose', 'Emilio Estevez', 'Ralph Macchio', 'Rob Lowe', 'Jennifer Grey', 'Mickey Rourke', 'John Cusack', 'Matthew Broderick', 'Justine Bateman', 'Lisa Bonet',
      ])
    }
  }
}


export default NoosPlugin
