<template>

  <q-page class="flex flex-center">
    <div class="hero_section_container">
      <div class="hero_top_bar flex">
        <div class="logo">
          <q-img
            src="../assets/kdev.png"
            style="height: 80px; width: 80px; margin-right:20px; margin-bottom:20px;"
            >
          </q-img>
        </div>
          <div class="menu flex justify-start">
            <div class="menu-item">Advantages</div>
            <div class="menu-item">Cooperation</div>
            <div class="menu-item">Prices</div>
            <div class="menu-item">Contact</div>
            <div class="menu-item">Blog</div>
          </div>
          <div class="phone">
              <q-btn color="white" class="q-px-lg" icon="phone" label="CALL US" outline rounded white />
          </div>
       </div>

       <div class="hero_section_square">
       </div>


       <div class="hero_bottom_section flex">

          <div class="hero_text justify-center">
            <h1 class="text-h3">Discover the <span class="grad">Power</span>  of <span class="grad">PWA</span>  Applications </h1>
            <h2 class="text-subtitle1">PWA applications offer fast and reliable performance, offline capabilities, push notifications, and seamless integration with device hardware. They are cost-effective and easy to maintain, and work across multiple platforms. Discover the power of PWA applications and take your mobile experience to the next level.</h2>
            <q-btn color="primary" class="q-mt-md q-px-lg">Contact Us</q-btn>
          </div>

          <div class="hero_img">
            <q-img
                src="../assets/rectangle27.png"
                style="width:300px"
                >
            </q-img>

              <div class="next_image">
                <q-img
                src="../assets/group63.png"
                style="width:300px"
                >
            </q-img>
            </div>
            <div class="star">
                <q-img
                src="../assets/group61.png"
                style="width:95px;"
                >
            </q-img>
            </div>
      </div>


      </div>

      <div class="second_section">

      <h1 class="text-h5"><span class="grad">Gain a competitive edge with PWA applications</span> </h1>
      <h2 class="text-subtitle1">In today's fast-paced digital world, staying ahead of the competition is crucial. PWA applications can give your business the competitive edge it needs by offering fast and reliable performance, engaging user experiences, and seamless offline capabilities. With PWA technology, you can create mobile apps that work seamlessly across all platforms and devices, without the need for separate versions for each operating system. PWA applications also provide cost-effective and easy-to-maintain solutions for your business, helping you save time and resources.</h2>


      <div class="make_money flex q-mt-lg">
        <div class="letf_side">  </div>
      <h1><span class="grad">01</span></h1>
      <h2>Make a money</h2></div>
        <div class="right_side">PHONE</div>


      </div>




       </div>


    <!-- {{db.counter_2}} -->
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IndexPage'
})
</script>

<script setup>
// SET UP PINIA STORE 'LOCAL_DATABASE'
import { myLocalData } from 'stores/local_database'
const db = myLocalData()

</script>

<style lang="scss">
@keyframes
example {
  from {background-color: red;}
  to {background-color: yellow;}
}
@keyframes
opac {
  from {opacity: 0;}
  to {opacity: 0.3;}
}
@keyframes
trans {
  from {top: 0;}
  to {top: 240;}
}

.body{
  font-family: 'Roboto', sans-serif;
}

.hero_section_container{
  padding-top:70px;
  padding-left:40px;
  padding-right:40px;
  width:100%;
  height: 100vh;
  background-color:#ffffff;
  // background-image: url("assets/rectangle1.png");
  background-repeat: no-repeat;
  background-position: right top;
  background-size:60vw;
  z-index:0;
  .hero_section_square{
    position:absolute;
    top:-10vw;
    right:-20vw;
    background-color: red;
    width:65vw;
    height:65vw;
    border-radius:10vw;
    transform: rotate(43deg);
    background:none;
    background: linear-gradient(180deg, #ffffff 0%, #0f87bf 5%, #00679A 80%);
    z-index:-1;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
  .menu{
    min-width:50vw;
    height:80px;
    margin-right:110px;
    align-items: flex-start;
    .menu-item{
      margin: auto 0;
      padding-right:20px;
      text-transform: uppercase;
      font-size:20px;
    }
    :hover{
      cursor:pointer;
      opacity:0.5;
      text-decoration: underline;
    }
  }
  .phone{
    margin:auto;
    min-width:10vw;
    position:absolute;
    right:30px;
    top:95px;
  }

  .hero_bottom_section{
    min-width:100%;
    .hero_text{
    padding-top:4rem;
    min-width:320px;
    max-width:600px;
    .grad{
      background-image: linear-gradient(90deg,  #0f87bf, #00679A);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .hero_img{
  margin:0 auto;
  padding-top:5rem;
  min-width:50%;
  text-align: center;
  animation-name: opac;
  animation-duration: 4s;
  position:relative;
  left:0;
  top:0;

  .next_image{
  position:relative;
  margin:0 auto;
  opacity:0.3;
  padding-top:5rem;
  padding-left:6px;
  text-align: center;
  position:absolute;
  width:300px;
  top:100px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  animation-name: opac;
  animation-duration: 30s;
  }

      .star{
  position:relative;
  margin:0 auto;
  padding-top:5rem;
  padding-left:6px;
  text-align: center;
  position:absolute;
  width:300px;
  top:240px;
  left: 50%;
  transform: translateX(-85%);
  text-align: center;
  opacity:1;
  animation-name: trans;
  animation-duration: 4s;
  }


  }



  }

  .second_section{
    margin-top:100px;
    text-align: center;
   .grad{
    text-transform: uppercase;
    font-weight: bold;
      background-image: linear-gradient(90deg,  #0f87bf, #00679A);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .make_money{

    }
    .left_side{
      font-size:50px;
    }
  }


}



</style>
