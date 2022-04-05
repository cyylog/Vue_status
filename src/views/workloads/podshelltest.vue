<template>

  <div>
    <div id="message" style="width: 500px;height:300px;border:solid 1px gray;overflow:auto">

    </div>
    <div>
      <input type="type" id="txtCmd"/>
      <input type="button" id="cmdBtn" value="发送"/>
      <input type="button" onclick="document.getElementById('message').innerHTML=''" value="清空"/>
    </div>
  </div>

</template>

<script>



  export default {

    data(){
      return {

      }
    },
    mounted() {
      this.initWS()// 初始化 websocket


    },
    methods:{
      //初始化 websocket 客户端
      initWS(){
        var ws = new WebSocket("ws://localhost:8080/podws");
        ws.onopen = function(){
          console.log("open");
        }
        ws.onmessage = function(e){
          let html=document.getElementById("message").innerHTML;
          html+='<p>服务端消息:' + e.data + '</p>'
          document.getElementById("message").innerHTML=html
        }
        ws.onclose = function(e){
          console.log("close");
        }
        ws.onerror = function(e){
          console.log(e);
        }
        document.getElementById("cmdBtn").onclick= ()=>{
          console.log(document.getElementById("txtCmd").value)
          ws.send(document.getElementById("txtCmd").value)
        }
      }
    }

  }

</script>
