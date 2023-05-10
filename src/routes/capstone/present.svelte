<script>
  import SeeMore from "../../components/SeeMore.svelte";

</script>
<div class="main">
    <div class="title">
        <h1>My Capstone</h1>
        <SeeMore href="/capstone">Begin Presentation ></SeeMore>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
    </div>
    <section>
        <div class='air air1'></div>
        <div class='air air2'></div>
        <div class='air air3'></div>
        <div class='air air4'></div>
    </section>
</div>

<style>

    .title {
        height: 100vh;
        font-size: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }

    h1 {
      margin: 0;
    }

    .main {
      background: linear-gradient(0deg, #0b1624, #311c44);
      background-size: 200vw 200vh;

      -webkit-animation: BackgroundAnimation 12s ease infinite;
      -moz-animation: BackgroundAnimation 12s ease infinite;
      animation: BackgroundAnimation 12s ease infinite;
    }

@-webkit-keyframes BackgroundAnimation {
    0%{background-position:24% 0%}
    50%{background-position:77% 100%}
    100%{background-position:24% 0%}
}
@-moz-keyframes BackgroundAnimation {
    0%{background-position:24% 0%}
    50%{background-position:77% 100%}
    100%{background-position:24% 0%}
}
@keyframes BackgroundAnimation {
    0%{background-position:24% 0%}
    50%{background-position:77% 100%}
    100%{background-position:24% 0%}
}


    *{
  margin: 0;
  padding: 0;
}
section{
  position: absolute;
  width: 100%;
  height: 40vh;
  bottom: 0;
  overflow: hidden;
}
section .air{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url(/wave.png);
  filter: grayscale(30%);
  background-size: 1000px 100px
}
section .air.air1{
  animation: wave 30s linear infinite;
  z-index: 1000;
  opacity: 1;
  animation-delay: 0s;
  bottom: 0;
}
section .air.air2{
  animation: wave2 15s linear infinite;
  z-index: 999;
  opacity: 0.5;
  animation-delay: -5s;
  bottom: 10px;
}
section .air.air3{
  animation: wave 30s linear infinite;
  z-index: 998;
  opacity: 0.2;
  animation-delay: -2s;
  bottom: 15px;
}
section .air.air4{
  animation: wave2 5s linear infinite;
  z-index: 997;
  opacity: 0.7;
  animation-delay: -5s;
  bottom: 20px;
}
@keyframes wave{
  0%{
    background-position-x: 0px; 
  }
  100%{
    background-position-x: 1000px; 
  }
}
@keyframes wave2{
  0%{
    background-position-x: 0px; 
  }
  100%{
    background-position-x: -1000px; 
  }
}
</style>