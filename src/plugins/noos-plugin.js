const NoosPlugin = {
  install(app, opts = {}) {
    let store = opts.store
    //  let router = opts.router
    // configure the app
    app.config.globalProperties.$init = (key) => {
      console.info("INIT", key /*, store, router*/)
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
