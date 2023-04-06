<template>
    <div>
        <van-cell is-link @click="showPopup">
            <VanIcon name="share-o" size="1.5rem" color="#1989fa" />
        </van-cell>

        <van-popup v-model:show="show" :style="{ padding: '14px' }" closeable round @click-overlay="stopScanner"
            @click-close-icon="stopScanner">
            <div>
                <h2>{{ room }}</h2>
                <hr>
                The url of this room has been copied<br> to your clipboard,<br> you can paste it with <b>Ctrl+v</b><br> in
                any other app to
                share it !
            </div>

            <div id="printable">
                <img :src="QRsrc" width="300" />
                <hr>
            </div>
            <VanButton @click="scan()" type="primary">Scan QR</VanButton>
            <VanButton @click="print('fr')" type="primary">Imprime QR</VanButton>
            <VanButton @click="print('en')" type="primary">Print QR</VanButton>
            <br>
            <div ref="camera" id="camera"></div>
        </van-popup>
    </div>
</template>

<script>

import QRCode from 'qrcode'
import { Html5Qrcode } from "html5-qrcode"
import { Popup, Cell, Button, Icon } from 'vant';
export default {
    name: 'ShareModal',
    components: {
        VanButton: Button,
        VanPopup: Popup,
        VanCell: Cell,
        VanIcon: Icon

    },
    data() {
        return {
            show: false,
            QRsrc: null,
            url: null
        }
    },
    methods: {
        async showPopup() {
            this.show = true
            this.url = "https://scenaristeur.github.io/tiptap-yjs?room=" + this.room
            let title = 'Noosphere'
            let text = `[en] Share & grab ideas !\n[fr] Attrape des idées et partage les tiennes !\n\n`

            if (navigator && navigator.share) {
                let share = {
                    title: title,
                    text: text,
                    url: this.url,
                }

                // pour partager le QR code
                let filesArray = []
                if (navigator.canShare({ files: filesArray })) {
                    share.files = filesArray
                }
                window.navigator
                    .share(share)
                    .then(() => console.log('Successful share'))
                    .catch(error => console.log('Error sharing', error));
            }

            navigator.clipboard.writeText(this.url).then(function () {
                console.log('Async: Copying to clipboard was successful!');
            }, function (err) {
                console.error('Async: Could not copy text: ', err);
            });
            await this.generateQR()

        },
        async generateQR() {
            this.url = 'https://scenaristeur.github.io/tiptap-yjs/?room=' + this.room
            this.QRsrc = await QRCode.toDataURL(encodeURI(this.url), { color: { light: '#98faf5' } })
        },
        print(lang) {
            let annonce = { fr: "Parlons de :<br>", en: "Let's talk about :<br>" }
            let text = { en: "Share & grab ideas !", fr: "Attrape des idées et partage les tiennes !" }
            let title = "NOOSPHERE"
            let divName = 'printable'
            var mywindow = window.open('', 'PRINT', 'height=400,width=600');

            mywindow.document.write('<html><head><title>' + this.room + '</title>');
            mywindow.document.write('</head><body >');
            mywindow.document.write("<h1>" + title + "</h1>");
            mywindow.document.write("<h2>" + text[lang] + "</h2>");
            mywindow.document.write(document.getElementById(divName).innerHTML);
            mywindow.document.write("<h2>" + annonce[lang] + " " + this.room + "</h2>");
            mywindow.document.write('</body></html>');

            //  mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus(); // necessary for IE >= 10*/
            mywindow.print();
        },

        scan() {
            if (this.scanner != undefined && this.scanner.isScanning) {
                this.stopScanner()
                return
            }
            let app = this
            this.scanner = new Html5Qrcode('camera')
            console.log('starting camera...')
            const cameraOptions = { facingMode: 'environment' }
            const config = { fps: 10, qrbox: { width: 200, height: 200 } };

            this.scanner.start(cameraOptions, config, function (text) {
                console.log(Date.now(), 'decoded', text)
                let eq_splitted = text.split('=')
                if (eq_splitted[0] == 'https://scenaristeur.github.io/tiptap-yjs/?room') {
                    app.$store.commit('setRoom', eq_splitted[1])
                    app.stopScanner()
                }
            })

                .then(function () {
                    console.log(Date.now(), 'camera started')
                })
                .catch(function (err) {
                    console.log(Date.now(), 'error starting camera', err)
                })
        },
        stopScanner() {
            if (this.scanner != undefined && this.scanner.isScanning) {
            let app = this
            this.scanner.stop()
                .then(function () {
                    app.$refs.camera.innerHTML = ""
                    console.log('camera stopped')
                    app.scanner.clear()
                    console.log("scan cleared")
                    app.show = false
                    // console.log("scanner", app.scanner)

                })
                .catch(function (err) {
                    console.log('error stopping camera', err)
                })
            }
        },

    },
    computed: {
        room() {
            return this.$store.state.room
        }
    }
}
</script>
