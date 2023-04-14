<template>
  <div class="editor" v-if="editor">
    <menu-bar class="editor__header" :editor="editor" />
    <editor-content class="editor__content" :editor="editor" />
    <div class="editor__footer">
      <div :class="`editor__status editor__status--${status}`">
        <template v-if="status === 'connected'">
          {{ editor.storage.collaborationCursor.users.length }}
          user{{ editor.storage.collaborationCursor.users.length === 1 ? '' : 's' }}
          online in
          <div class="editor__name">
            <button @click="setRoom">
              {{ room }}
            </button>
          </div>
        </template>
        <template v-else>
          <span style="color:red">offline : </span>merci d'attendre 30 secondes que le serveur démarre
        </template>
      </div>
      <ShareModal />
      <div class="editor__name">
        <button @click="setName">
          {{ currentUser.name }}
        </button>
      </div>

    </div>
    <!-- {{ collaborationUsers}} -->
  </div>
</template>

<script>
import { HocuspocusProvider } from '@hocuspocus/provider'
import CharacterCount from '@tiptap/extension-character-count'
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import Highlight from '@tiptap/extension-highlight'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import * as Y from 'yjs'
import ShareModal from '@/components/ShareModal'

//import { variables } from '../../../variables'
import MenuBar from '@/components/MenuBar.vue'

const getRandomElement = list => {
  return list[Math.floor(Math.random() * list.length)]
}

const getRandomRoom = () => {
  //const roomNumbers = variables.collabRooms?.trim()?.split(',') ?? [10, 11, 12]
  const roomNumbers = [...Array(99).keys()]
  return getRandomElement(roomNumbers.map(number => `rooms.${number}`))
}

export default {
  components: {
    EditorContent,
    MenuBar,
    ShareModal
  },

  data() {
    return {
      currentUser: JSON.parse(localStorage.getItem('currentUser')) || {
        name: this.getRandomName(),
        color: this.getRandomColor(),
        rooms: {}
      },
      provider: null,
      editor: null,
      status: 'connecting',
      room: getRandomRoom(),
    }
  },

  created(){
    console.log("router", this.$router, this.$route)
    if (this.$route.query.room) {
      this.room = this.$route.query.room
      console.log('room', this.room)
    }
  },
  mounted(){
    this.createEditor()
  },
  methods: {
    createEditor() {
      const ydoc = new Y.Doc()

      this.provider = new HocuspocusProvider({
        //appId: '7j9y6m10',
        url: 'wss://hocus-noosphere.glitch.me/',
        name: this.room,
        document: ydoc,
      })

      this.provider.on('status', event => {
        this.status = event.status
      })

      this.currentUser.rooms[this.room] = {room: this.room, date: Date.now()}
      //this.currentUser.clientID = this.awareness.clientID

      this.editor = new Editor({
        extensions: [
          StarterKit.configure({
            history: false,
          }),
          Highlight,
          TaskList,
          TaskItem,
          Collaboration.configure({
            document: ydoc,
          }),
          CollaborationCursor.configure({
            provider: this.provider,
            user: this.currentUser,
          }),
          CharacterCount.configure({
            limit: 10000,
          }),
        ],
      })
      this.editor.on('create', ({ editor }) => {
        //  console.log(editor.getJSON())
        let step = { room: this.room, data: editor.getJSON(), type: 'tiptap' }
        this.$store.dispatch('push', step)
        // The content has changed.


        // let user = this.currentUser
        // user.room = this.room
        // delete user.rooms[this.room]
        // let room = {room: this.room, date : Date.now()}
        //user.rooms[this.room] = room

        this.$store.commit('setUser', this.currentUser)

        this.$store.commit('setRoom', this.room)

        // You can think of your own awareness information as a key-value store.
        // We update our "user" field to propagate relevant user information.


      })
      this.editor.on('update', ({ editor }) => {
      //  console.log(editor.getJSON())
        let step = { room: this.room, data: editor.getJSON(), type: 'tiptap' }
        this.$store.dispatch('push', step)
        // this.roomsYmap.set(this.room, editor.storage.collaborationCursor)
        // this.rooms = this.roomsYmap
        // The content has changed.
      })

      localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
      localStorage.setItem('currentRoom', JSON.stringify(this.room))
      let r = {room: this.room, users: this.editor.storage.collaborationCursor.users}
      this.$store.commit('updateRooms', r)
      //  this.$store.commit('setRoom', this.room)
    },
    setName() {
      const name = (window.prompt('Name') || '')
      .trim()
      .substring(0, 32)

      if (name) {
        return this.updateCurrentUser({
          name,
        })
      }
    },
    setRoom() {
      const room = (window.prompt('Choose a Room from 0 to 99') || '')
      .trim()
      .substring(0, 32)
      if (room) {
        return this.updateCurrentRoom({
          room,
        })
      }
    },

    updateCurrentUser(attributes) {
      this.currentUser = { ...this.currentUser, ...attributes }
      this.editor.chain().focus().updateUser(this.currentUser).run()

      localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
    },
    updateCurrentRoom(attributes) {
      console.log(attributes)
      this.room = attributes.room.startsWith("rooms.") ? attributes.room :  "rooms." + attributes.room

      this.editor.destroy()
      this.provider.destroy()
      this.createEditor()
    },

    getRandomColor() {
      return getRandomElement([
        '#958DF1',
        '#F98181',
        '#FBBC88',
        '#FAF594',
        '#70CFF8',
        '#94FADB',
        '#B9F18D',
      ])
    },

    getRandomName() {
      return getRandomElement([
        'Leon Thompson', 'Bonnie Journey', 'Thomas Croisé', 'Malouna', 'Terry Ball', 'Jean Collik', 'Winoumanona Raider', 'Christina Pompin',
         'Alycia Francisco', 'Moully Ringinald', 'Béatrice Allou', 'Pierre Kiroul', 'Namass Pamouss',
          'Etu Diante', 'Da Di Falavaleris', 'Dgef', 'Emilio Agricolo', 'Miss B', 'Spider Marvel', 
          'Hulkor Geeen', 'Smoke Onthewater', 'Bebop Euloula', 'Mick Mock', 'Peter Piter', 'Stocking Head',
      ])
    },
  },
  beforeUnmount() {
    this.editor.destroy()
    this.provider.destroy()
  },
  watch: {
    roomFromSomewhere() {
      if(this.room != this.roomFromSomewhere){
        let room = this.roomFromSomewhere
        console.log(room)
        // if (room.rooms) this.updateCurrentRoom({room})
        this.updateCurrentRoom({
          room,
        })
      }
    },
    collaborationUsers(){
      if (this.users != this.collaborationUsers){
        console.log("collaborationUsers changed", this.collaborationUsers)
        this.$store.commit('setUsersInRoom', {room: this.room, users: this.collaborationUsers})
      }
    }
  },
  computed: {
    roomFromSomewhere() {
      return this.$store.state.room
    },
    collaborationUsers(){
      return this.editor == null ? [] : this.editor.storage.collaborationCursor.users
    },
    users() {
      return this.$store.state.users
    }
  }
}
</script>
<style lang="scss">
.editor {
  display: flex;
  flex-direction: column;
  max-height: 26rem;
  color: #0D0D0D;
  background-color: #FFF;
  border: 3px solid #0D0D0D;
  border-radius: 0.75rem;

  &__header {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    flex-wrap: wrap;
    padding: 0.25rem;
    border-bottom: 3px solid #0D0D0D;
  }

  &__content {
    padding: 1.25rem 1rem;
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  &__footer {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    white-space: nowrap;
    border-top: 3px solid #0D0D0D;
    font-size: 12px;
    font-weight: 600;
    color: #0D0D0D;
    white-space: nowrap;
    padding: 0.25rem 0.75rem;
  }

  /* Some information about the status */
  &__status {
    display: flex;
    align-items: center;
    border-radius: 5px;

    &::before {
      content: ' ';
      flex: 0 0 auto;
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: rgba(#0D0D0D, 0.5);
      border-radius: 50%;
      margin-right: 0.5rem;
    }

    &--connecting::before {
      background: #616161;
    }

    &--connected::before {
      background: #B9F18D;
    }
  }

  &__name {
    button {
      background: none;
      border: none;
      font: inherit;
      font-size: 12px;
      font-weight: 600;
      color: #0D0D0D;
      border-radius: 0.4rem;
      padding: 0.25rem 0.5rem;

      &:hover {
        color: #FFF;
        background-color: #0D0D0D;
      }
    }
  }
}
</style>
<style lang="scss">
/* Give a remote user a caret */
.collaboration-cursor__caret {
  position: relative;
  margin-left: -1px;
  margin-right: -1px;
  border-left: 1px solid #0D0D0D;
  border-right: 1px solid #0D0D0D;
  word-break: normal;
  pointer-events: none;
}

/* Render the username above the caret */
.collaboration-cursor__label {
  position: absolute;
  top: -1.4em;
  left: -1px;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  user-select: none;
  color: #0D0D0D;
  padding: 0.1rem 0.3rem;
  border-radius: 3px 3px 3px 0;
  white-space: nowrap;
}

/* Basic editor styles */
.ProseMirror {
  >*+* {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  mark {
    background-color: #FAF594;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  hr {
    margin: 1rem 0;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }

  ul[data-type="taskList"] {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;

      >label {
        flex: 0 0 auto;
        margin-right: 0.5rem;
        user-select: none;
      }

      >div {
        flex: 1 1 auto;
      }
    }
  }
}
</style>
