<template>
    <div>
        <!-- <van-button type="primary">Primary</van-button> -->
        <van-cell title="Share" is-link @click="showPopup" />
        <van-popup v-model:show="show" :style="{ padding: '14px' }">
            <div>
            <h2>{{ room }}</h2>
             <hr>
            The url of this room has been copied<br> to your clipboard,<br> you can paste it with <b>Ctrl+v</b><br> in any other app to
            share it !
        </div>


            <div id="printable">
                <!-- Let's talk about <b><u>{{user.roomID}}</u></b> at : <br>
              Discutons de <b><u>{{user.roomID}}</u></b> à l'adresse :
              <hr> -->

                <!-- <hr> -->
                <!-- <center> -->
                <img :src="QRsrc" width="300" />
                <hr>

                <!-- {{this.url}} <br>or<br> -->
                <!-- <h3 style="width:100%">{{ encodeURI(this.url) }}</h3>
                <hr> -->
                <!-- </center> -->


            </div>
            <VanButton @click="print('fr')" type="primary">imprime QR</VanButton>
            <VanButton @click="print('en')" type="primary">print QR</VanButton>
            <br>



        </van-popup>



    </div>
</template>

<script>

import QRCode from 'qrcode'
import { Popup, Cell, Button } from 'vant';
export default {
    name: 'ShareModal',
    components: {
        VanButton: Button,
        VanPopup: Popup,
        VanCell: Cell,

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
            // else {

            // let app = this
            // console.log(this.localUser)

            navigator.clipboard.writeText(this.url).then(function () {
                console.log('Async: Copying to clipboard was successful!');
                //  app.showAlert()
            }, function (err) {
                console.error('Async: Could not copy text: ', err);
            });

            // }
            await this.generateQR()

        },
        async generateQR() {
            // if (this.QRsrc == null){
            this.url = 'https://scenaristeur.github.io/tiptap-yjs/?room=' + this.room
            this.QRsrc = await QRCode.toDataURL(encodeURI(this.url), { color: { light: '#98faf5' } })
            // }else{
            //   this.QRsrc = null
            // }

        },
        // countDownChanged(dismissCountDown) {
        //   this.dismissCountDown = dismissCountDown
        // },
        // showAlert() {
        //   this.dismissCountDown = this.dismissSecs
        // },
        download() {
            console.log('todo')
        },
        print1() {
            let divName = 'printable'
            var printContents = document.getElementById(divName).innerHTML;
            var originalContents = document.body.innerHTML;

            document.body.innerHTML = printContents;

            window.print();

            document.body.innerHTML = originalContents;
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
            //mywindow.close();

            //return true;
        }
    },
    computed: {
        room() {
            return this.$store.state.room
        }
    }
}
</script>