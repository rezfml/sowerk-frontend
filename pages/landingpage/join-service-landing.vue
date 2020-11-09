<template>
  <div class="joinservicecontainer" style=overflow-x:hidden>
    <section class="joinservicehero">
      <div>
        <h1>Service & Product Vendors</h1>
        <p>Your Tools For Business Relationships</p>
        <button @click='$router.push("/register/provider")'>Get Started Now</button>
      </div>
      <!-- <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,100 110,0 100,100" />
      </svg> -->
    </section>

   <!-- NEW SECTION - Join Traits Section -->
    <v-container
      fluid
      grid-list-md
      text-center
      pb-16
      class="joinservicetraits"
      style=" display: flex; justify-content: center; align-items:center; flex-direction: column"
    >
      <v-layout row style="max-width:110%; flex-wrap: wrap; margin-top:-80px;margin-bottom:-80px;" v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
        <v-img  style="width:100%" src="https://sowerk-images.s3.us-east-2.amazonaws.com/landingserviceprovider.png"></v-img>
        
        <!-- CARD 1 -->
        <!--<v-col cols="12" lg="3" sm="6" class="d-flex">
          <v-card
            align="center"
            class="mx-1 py-3 flex-grow-1"
            style="border-radius: 20px; "
          >
            <div
              class="d-none d-sm-flex"
              style="width: 150px; height: auto; padding-top:30px; padding-bottom: 15px;"
            >
              <v-img
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/checkmarkcopy.png"
                style="object-fit: contain;"
              ></v-img>
            </div>
            <v-card-text
              style="font-size: 22px; font-weight:500; color: black; letter-spacing: 1px;"
              >Simple & Fast</v-card-text
            >
            <div
              class="py-3"
              style="width: 80%; font-size: 1rem; text-align: center"
            >
              Our simple design makes connecting with other companies quick and
              painless while using either the desktop or mobile app.
            </div>
          </v-card>
        </v-col>-->

        <!-- CARD 2 -->
        <!--<v-col cols="12" lg="3" sm="6" class="d-flex">
          <v-card
            align="center"
            class="mx-1 py-3 flex-grow-1"
            style="border-radius: 20px;"
          >
            <div
              class="d-none d-sm-flex"
              style="width: 150px; height: auto; padding-top:30px; padding-bottom: 15px;"
            >
              <v-img
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/dashboardcopy.png"
                style="object-fit: contain;"
              ></v-img>
            </div>
            <v-card-text
              style="font-size: 22px; font-weight:500; color: black; letter-spacing: 1px;"
              >Powerful Tools</v-card-text
            >
            <div
              class="py-3"
              style="width: 80%; font-size: 1rem; text-align: center"
            >
              SOWerk is designed from it’s core to solve for property and facility management by providing the tools to vet & communicate grow service providers.
            </div>
          </v-card>
        </v-col>-->

        <!-- CARD 3 -->
       <!-- <v-col cols="12" lg="3" sm="6" class="d-flex">
          <v-card
            align="center"
            class="mx-1 py-3 flex-grow-1"
            style="border-radius: 20px;"
          >
            <div
              class="d-none d-sm-flex"
              style="width: 150px; height: auto; padding-top:30px; padding-bottom: 15px;"
            >
              <v-img
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/networkcopy.png"
                style="object-fit: contain;"
              ></v-img>
            </div>
            <v-card-text
              style="font-size: 22px; font-weight:500; color: black; letter-spacing: 1px;"
              >Automations</v-card-text
            >
            <div
              class="py-3"
              style="width: 80%; font-size: 1rem; text-align: center"
            >
              SOWerk has many automated features that help make everyone’s life easy, like automatically requiring service providers to requalify or automatically updating a service provider’s profile every time they achieve approved vendor status.
            </div>
          </v-card>
        </v-col>-->

        <!-- CARD 4 -->
        <!--<v-col cols="12" lg="3" sm="6" class="d-flex">
          <v-card
            align="center"
            class="mx-1 py-3 flex-grow-1"
            style="border-radius: 20px;"
          >
            <div
              class="d-none d-sm-flex"
              style="width: 150px; height: auto; padding-top:30px; padding-bottom: 15px;"
            >
              <v-img
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/opinioncopy.png"
                style="object-fit: contain;"
              ></v-img>
            </div>
            <v-card-text
              style="font-size: 22px; font-weight:500; color: black; letter-spacing: 1px;"
              >Convenient</v-card-text
            >
            <div
              class="py-3"
              style="width: 80%; font-size: 1rem; text-align: center"
            >
              For the facility manager in the middle of the night that needs to contact all your approved plumbers for help or a local service provider that powers his business through a smart phone, SOWerk is design to be convenient.
            </div>
          </v-card>
        </v-col>-->
      </v-layout>
      <v-container v-else  >
          <v-card flat rounded="20" style="border-radius: 20px;width:93%;margin:auto">
              <v-row class="d-flex justify-space-around" >
                <v-col cols=3 >
                  <v-img height="80" width="250" class="d-flex justify-center ml-8"  src="https://sowerk-images.s3.us-east-2.amazonaws.com/workercopy1.png"></v-img>
                </v-col>
                
                <v-col cols="9">
                  <v-row><v-img   max-height="50" max-width="250" class="d-flex justify-start" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png"></v-img></v-row>
                  <v-card-text class="my-n4" style="color:#a61c00;font-size:1.1em;font-weight:600">Vendor ToolBoxes</v-card-text>
                </v-col>
              </v-row>
            <v-row style="overflow:hidden">
                <v-card-title class="d-flex justify-center"  style="background-color:#a61c00;color:white;font-size:1.3rem;font-weight:600;width:100%">Sales & Marketing</v-card-title>
            </v-row>
          </v-card>

          <v-card outlined  class="my-4" style="border-radius:20px; width:100%;border-color:#A61C00;border-width:5px;overflow:hidden">

            <v-row style="overflow:hidden">
              <v-col cols="12" style="background-color:#a61c00;" class="d-flex">
                <v-img cols="3" style="background-color:#a61c00;" max-width="250" width="60" contain class="ml-10" src="https://sowerk-images.s3.us-east-2.amazonaws.com/witness.png"></v-img>
                <v-card-title cols="9" class="d-flex justify-center"  style="background-color:#a61c00;color:white;font-size:1.3rem;font-weight:600;width:100%">Visibility</v-card-title>
              </v-col>
            </v-row>
            <v-row>
            <v-card-text  class="d-flex justify-start text-left" >How do you get in front of businesses who could and should buy from you? 
            </v-card-text>
            <v-card-text  class="d-flex justify-start text-left" >
            What if there was a business-to-business dating website where your business credentials, track record, and overall resume weren’t just used to apply for approved vendor status with a business but it also made up your business (dating) profile? 
            </v-card-text>
            <v-card-text  class="d-flex justify-start text-left" >
            On SOWerk, a company profile is visible to searching businesses. We know you probably don’t have time to keep up with your website yet alone social media which is why your SOWerk profile starts off strong using many of the same credentials you need to apply for an approved vendor program. As you obtain approved vendor status or receive reviews your profile automatically updates, making your life easier.
            </v-card-text>
            </v-row>
          </v-card>

          <v-card outlined  class="my-4" style="border-radius:20px; width:100%;border-color:#A61C00;border-width:5px;overflow:hidden">
            <v-row style="overflow:hidden">
              <v-col cols="12" style="background-color:#a61c00;" class="d-flex">
                <v-img cols="6" style="background-color:#a61c00;" max-width="250" width="60" contain class="ml-10" src="https://sowerk-images.s3.us-east-2.amazonaws.com/trophy.png"></v-img>
                <v-card-title cols="6" class="d-flex justify-center"  style="background-color:#a61c00;color:white;font-size:1.3rem;font-weight:600;width:100%">Approved Vendor</v-card-title>
              </v-col>
            </v-row>
            <v-row>
            <v-card-text  class="d-flex justify-start text-left" >
            Businesses are looking for vendors just like you to provide services and/or supply products. When you are connected as their approved vendor, it’s like having a direct line for their staff to do business with you. 
            </v-card-text>
            <v-card-text  class="d-flex justify-start text-left" >
           SOWerk makes it easy for you to search for accepting approved vendor programs as well as apply. To save you time and energy we try to use your profile data and any private provided data to pre-fill your applications.  
            </v-card-text>
            </v-row>
          </v-card>

          <v-card flat rounded="20" class="" style="border-radius: 20px;width:93%;margin:auto">
              <v-row class="d-flex justify-space-around my-2" >
                <v-col cols=3 >
                  <v-img height="80" width="250" class="d-flex justify-center ml-8"  src="https://sowerk-images.s3.us-east-2.amazonaws.com/workercopy1.png"></v-img>
                </v-col>
                
                <v-col cols="9">
                  <v-row><v-img   max-height="50" max-width="250" class="d-flex justify-start" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+Logo-143.png"></v-img></v-row>
                  <v-card-text class="my-n4" style="color:#a61c00;font-size:1.1em;font-weight:600">Vendor ToolBoxes</v-card-text>
                </v-col>
              </v-row>
            <v-row style="overflow:hidden">
                <v-card-title class="d-flex justify-center"  style="background-color:#707070;color:white;font-size:1.3rem;font-weight:600;width:100%">Relationship Management</v-card-title>
            </v-row>
          </v-card>

          <v-card outlined  class="my-4" style="border-radius:20px; width:100%;border-color:#707070;border-width:5px;overflow:hidden">
            <v-row style="overflow:hidden">
              <v-col cols="12" style="background-color:#707070;" class="d-flex">
                <v-img cols="6" style="background-color:#707070;" max-width="250" width="60" contain class="ml-10" src="https://sowerk-images.s3.us-east-2.amazonaws.com/technics.png"></v-img>
                <v-card-title cols="6" class="d-flex justify-center"  style="background-color:#707070;color:white;font-size:1.3rem;font-weight:600;width:100%">Business Tools</v-card-title>
              </v-col>
            </v-row>
            <v-row>
            <v-card-text  class="d-flex justify-start text-left" >
            Every day we are working to create tools to grow your business and improve customer relationships. Solutions like SOWerk Requests, a tool for businesses to obtain bids or service requests, can also be used by you to submit bids/quotes and change orders to customers beyond SOWerk. 
            </v-card-text>

            </v-row>
          </v-card>
          
        </v-container>
    </v-container>

  <!-- NEW SECTION - PRICING LEVELS -->
  <div class="PricingContainer  d-flex justify-space-around" v-show="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">

    <section class="packages" v-show="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">

      <v-row>
        <v-col cols="12"  >
        <v-card-title style="width:50vw; font-size:3vw;color:#a61c00;" class="d-flex justify-center" color="primary">Service Provider Pricing Levels</v-card-title>
        <!--<v-row class="d-flex justify-center my-3">
        <v-btn  @click='$router.push("/register/provider")' style="width:50%;border-radius:20px;background-color:#a61c00; color:white; height:3vw;">GET STARTED NOW</v-btn>
        </v-row>-->
        </v-col>
      </v-row>

    <v-row style="width:80%;" class="d-flex justify-space-between">
      <v-card  outlined class="basicPackage" style="border-radius:20px; width:18%;border-color:#707070;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center" style="font-size:.8vw">SOWERK BASIC</v-card-title>
        <v-card-subtitle class="d-flex justify-center mt-10" style="font-size:3vw">FREE</v-card-subtitle>
        <v-divider class="d-flex justify-center mt-10 mb-n2" height="12" style="width:90%;margin-left:5%;margin-bottom:20px;"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:1.75;font-weight:bold;">PACKAGE INCLUDES</v-card-text>
         <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%; font-size:.7vw;color:#707070;">
          <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">1 User License</v-list-item>
          <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Profile</v-list-item>
          <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Leads</v-list-item>
         </v-list>
      </v-card>

      <v-card outlined  class="upgrade1" style="border-radius:20px; width:18%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center " style="font-size:.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:-5%;font-weight:bold">SOWERK STARTER</v-card-title>
        <!--<v-card-title class="d-flex flex-column justify-center " style="font-size:.8vw"></v-card-title>-->
        <v-card-subtitle class="mt-10 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:2.8vw">$8.33<span class="ml-n8" style="font-size:.7vw">/monthly</span></v-card-subtitle>
        <p class="mt-n4 d-flex justify-space-around align-baseline" style="color:#707070;" >Or $100.00 Per Year</p>
        <v-divider class="d-flex justify-center mt-4 mb-n2" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:1.5;font-weight:bold;">PACKAGE INCLUDES</v-card-text>
          <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%;font-size:.7vw;color:#707070; ">
            <v-list-item class="d-flex justify-center sjust" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">1</span> User License</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%; "><span class="mr-2" style="color:#a61c00">5</span> Business Connections</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">$1.50</span> Per Additional Conntection(s)</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Profile</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Leads</v-list-item>
         </v-list>
      </v-card>

      <v-card outlined  class="upgrade2" style="border-radius:20px; width:18%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center " style="font-size:.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:-5%;font-weight:bold">SOWERK ADVANCED</v-card-title>
       <!-- <v-card-title class="d-flex flex-column justify-center " style="font-size:.8vw">SOWERK ADVANCED</v-card-title>-->
        <v-card-subtitle class="mt-10 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:2.8vw">$20.83<span class="ml-n2" style="font-size:.7vw">/monthly</span></v-card-subtitle>
        <p class="mt-n4 d-flex justify-space-around align-baseline" style="color:#707070;" >Or $250.00 Per Year</p>
        <v-divider class="d-flex justify-center mt-4 mb-n2" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:1.5;font-weight:bold;">PACKAGE INCLUDES</v-card-text>
          <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%;font-size:.7vw;color:#707070; ">
            <v-list-item class="d-flex justify-center sjust" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">2</span> User License</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%; "><span class="mr-2" style="color:#a61c00">20</span> Business Connections</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">$1.00</span> Per Additional Conntection(s)</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Profile</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Leads</v-list-item>
         </v-list>
      </v-card>

      <v-card outlined  class="upgrade3" style="border-radius:20px; width:18%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center " style="font-size:.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:-5%;font-weight:bold">SOWERK PRO</v-card-title>
       <!-- <v-card-title class="d-flex flex-column justify-center " style="font-size:.8vw">SOWERK PRO</v-card-title>-->
        <v-card-subtitle class="mt-10 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:2.8vw">$41.67<span class="ml-n6" style="font-size:.7vw">/monthly</span></v-card-subtitle>
        <p class="mt-n4 d-flex justify-space-around align-baseline" style="color:#707070;" >Or $500.00 Per Year</p>
        <v-divider class="d-flex justify-center mt-4 mb-n2" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:1.5;font-weight:bold;">PACKAGE INCLUDES</v-card-text>
          <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%;font-size:.7vw;color:#707070; ">
            <v-list-item class="d-flex justify-center sjust" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">5</span> User License</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%; "><span class="mr-2" style="color:#a61c00">50</span> Business Connections</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">$0.75</span> Per Additional Conntection(s)</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Profile</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Leads</v-list-item>
         </v-list>
      </v-card>

      <v-card outlined  class="upgrade4" style="border-radius:20px; width:18%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center " style="font-size:.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:-5%;font-weight:bold">SOWERK NATIONAL</v-card-title>
       <!-- <v-card-title class="d-flex flex-column justify-center " style="font-size:.8vw">SOWERK NATIONAL</v-card-title>-->
        <v-card-subtitle class="mt-10 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:2.8vw">$125.00<span class="ml-n0" style="font-size:.7vw">/monthly</span></v-card-subtitle>
        <p class="mt-n4 d-flex justify-space-around align-baseline" style="color:#707070;" >Or $500.00 Per Year</p>
        <v-divider class="d-flex justify-center mt-4 mb-n2" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:1.5;font-weight:bold;">PACKAGE INCLUDES</v-card-text>
          <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%;font-size:.7vw;color:#707070; ">
            <v-list-item class="d-flex justify-center sjust" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">15</span> User License</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%; "><span class="mr-2" style="color:#a61c00">250</span> Business Connections</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">$0.50</span> Per Additional Conntection(s)</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Profile</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Leads</v-list-item>
         </v-list>
      </v-card>


      </v-row>
      <v-row style="width:80%;" class="d-flex flex-column justify-center" >


      <v-card outlined  class="upgrade5 my-6 mt-6"  style="border-radius:20px; width:100%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center mb-4" style="font-size:.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;font-weight:bold">SOWERK ENTERPRISE</v-card-title>
       <!-- <v-card-title class="d-flex flex-column justify-center mt-16" style="font-size:1vw;">SOWERK ENTERPRISE</v-card-title>-->
        <v-card-subtitle class="mt-10 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:2.8vw">Custom Rate</v-card-subtitle>
        <v-divider class="d-flex justify-center mt-4 mb-" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:1.5;color:black">Does you’re business require a special connection and pricing rate? At SOWerk, we are happy to work with you to make sure we develop a perfect plan based around your needs.</v-card-text>
      </v-card>
      </v-row>
    </section>

<!-- NEW SECTION TOOLS TO GROW -->
  </div>
    <section class="joinservicedescription">
      <h2 class="text-h4">Getting Started Is FREE And Easy!</h2>
      <p></p>
      <button @click='$router.push("/landingpage/PricingPage")'>LEARN MORE ABOUT SOWERK PRICING</button>
    </section>


<!-- NEW SECTION - JOIN STEPS -->
    <section class="joinservicesteps">
      <div class="joinservicestepscontainer">
        <div class="joinservicestepcontainerstep">
          <img v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs" class="containerImg" src="https://sowerk-images.s3.us-east-2.amazonaws.com/profileDash2.png" alt="Profile dashboard Mockup"/>
          <img v-else class="containerImg" style="margin:auto;margin-bottom:20px;" src="https://sowerk-images.s3.us-east-2.amazonaws.com/profileDash2.png" alt="Profile dashboard Mockup"/>
          <div>
            <h1 v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">Step 1 <span>- Build a Profile</span></h1>
            <h1 v-else >Step 1 <span ><br/>- Build a Profile</span></h1>
            <p>
              Your SOWerk Profile is Your New Calling Card. Designed To Make You
              Look Good!
            </p>
            <p>
              Your company dashboard displays recent users that you have been in
              contact with along with a chart of your pending application
              requests.
            </p>
          </div>
        </div>
        <div class="joinservicestepcontainerstep">
          <div class="stepTwo">
            <h1 v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">Step 2 <span>- Apply With Buyers</span></h1>
            <h1 v-else>Step 2 <span><br/>- Apply With Buyers</span></h1>
            <p>Apply For Businesses Looking For You With One Click.</p>
            <p>
              With the click of one button, your company can apply to work for
              large businesses located in your area. This process makes it easy
              for you and the Buyer to connect and review each others profiles
              hassle free.
            </p>
          </div>
          <img v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs" class="containerImg" id="profileDash"  src="https://sowerk-images.s3.us-east-2.amazonaws.com/profiledashboardmockup2.png" alt="Buyer dashboard mockup"/>
          <img v-else class="containerImg" style="margin:auto;margin-bottom:20px;" src="https://sowerk-images.s3.us-east-2.amazonaws.com/profiledashboardmockup2.png" alt="Profile Buyer dashboard mockup"/>
        </div>
        <div class="joinservicestepcontainerstep">
          <img class="containerImg" v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"  src="https://sowerk-images.s3.us-east-2.amazonaws.com/leadMockup2.png" alt="leadMockup" />
          <img class="containerImg" v-else style="margin:auto;margin-bottom:20px;" src="https://sowerk-images.s3.us-east-2.amazonaws.com/leadMockup2.png" alt="leadMockup" />
          <img class="containerImg" src="https://sowerk-images.s3.us-east-2.amazonaws.com/notification2.png" id="notificationMock" alt="iphoneMockup" />
          <div>
            <h1 v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">Step 3 <span>- Generate Leads</span></h1>
             <h1 v-else>Step 3 <span><br/>- Generate Leads</span></h1>
            <p>
              SOWerk makes it easy for you to get inbound service leads & we
              make it simple for you to show off your trackrecord (profile) to a
              potential customer.
            </p>
            <p>
              Easily share in one click with anyone outside of the platform via
              email or text.
            </p>
          </div>
        </div>
      </div>
      <button @click='$router.push("/register/provider")' style="font-weight:600">REGISTER NOW</button>

    </section>


    <!-- NEW SECTION - SERVICE PROVIDER OFTEN ASK -->
 <v-flex class="pt-16 pb-16 skew-top" style="background: #EDEDED">
      <v-container>
        <v-row>
          <v-col cols="12 pa-0 pa-sm-2" class="d-flex flex-column">
            <p
              style="font-size: 30px"
              class="text-sm-h4 text-md-h3 font-weight-bold primary--text text-center vendor-ask"
            >
              Vendors Generally Ask
            </p>
            <v-list
              max-width="950px"
              :width="$vuetify.breakpoint.mdAndUp ? '80%' : '90%'"
              class="mx-auto"
              style="background: #EDEDED"
            >
            <!-- QUESTION ONE -->
            <v-row class="pt-8 " style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align: center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Do I Seriously Get More Jobs?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">Yes, businesses of all sizes use SOWerk to manage their approved vendor program. We make it easy for them to vet vendors' request bids.</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">SOWerk helps you look good when applying for approved
                      vendor programs within SOWerk, and we also make it easy to share those
                      good looks with others. Next time you're bidding a job or working a potential customer who is not on SOWerk, show
                      off your resume by emailing or texting your SOWerk
                      profile.</p>
                </v-col>
            </v-row>

            <!-- QUESTION TWO -->
              <v-row class="pt-6" style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align: center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p  style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Is SOWerk Time Consuming and Hard To
                    Use?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">Not at all, a SOWerk profile only takes 10 minutes to
                      set up.</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">With only a click or two on your computer or mobile device,
                      you can use your SOWerk profile to apply for approved
                      vendor programs.</p>
                </v-col>
            </v-row>

              <!-- QUESTION THREE -->
               <v-row class="pt-6 pb-8" style="max-width: 950px;" justify="center">
                <v-col cols="1" class="pa-0 d-none d-sm-inline" style="text-align: center">
                  <img width="29px" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"></img>
                </v-col>

                <v-col cols="11" class="pa-0">
                  <p  style="line-height: 1.25em; font-size: 19px;"
                    class="text-capitalize text-sm-h5 font-weight-bold mb-3 wrap-text">Will I Get Charged All The Time & Get Junk
                    Leads?</p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">SOWwerk is your business tool, kind of like an account software which is why we try to keep it distraction-free. We know you don't have time for junk mail or poor leads. Unlike other websites, SOWerk vendors receive communications from their approved vendor programs, specific inbound leads, or new businesses inviting them to apply for approved vendor programs. </p>
                  <p  class="wrap-text pl-0 pl-sm-10" style="font-size: 15px; line-height: 1.6em" color="#707070">Being on SOWerk and promoting your business is free. If you wish to apply for an approved vendor program or utilize other SOWerk features, we offer different packages. Details can be found on our Approved Provider Pricing page.</p>
                </v-col>
            </v-row>
            </v-list>
            <!-- BUTTON -->
            <v-btn
              class="text-uppercase primary mx-auto text-sm-body-2"
              x-large
              :width="$vuetify.breakpoint.mdAndUp ? '40%' : '90%'"
              style="border-radius: 20px; font-weight: bold; font-size: 15px;"
              @click='$router.push("/register/provider")'
              >REGISTER NOW</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-flex>
  </div>
</template>

<script>
  export default {
    layout: 'fullwidth',
  }
</script>

<style scoped>
.skew-top {
  position: relative;
  z-index: 30;
}

.skew-top:before {
position: absolute;
content: '';
background: inherit;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: -20;
transform-origin: top left;
transform: skewY(-2deg);
}

.PricingContainer{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.packages{
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 25px;
}
#notificationMock{
  margin-left:-10%;
  margin-bottom:-5%;
  margin-top: 5%;
  bottom:15%;
  width:15% !important;
  height: 5%;
}
.stepTwo{
  margin-left: 5%;
}
.containerImg{
  margin-left:-10%;
  margin-right:5%;
}
#profileDash{
  margin-left:10%;
  margin-right:-5% !important;
}
.joinservicecontainer {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.joinservicehero {
  width: 100%;
  height: 90vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://sowerk-images.s3.us-east-2.amazonaws.com/tape-measure-1726546copy.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.joinservicehero h1 {
  font-size: 55px;
  text-align: center;
}
.joinservicehero p {
  font-size: 23px;
  text-align: center;
}
.joinservicehero svg {
  width: 100%;
  height: 9vh;
  fill: #a61c00;
  margin-top: 50px;
  margin-bottom: -320px;
}
.joinservicehero div {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.joinservicehero div button {
  background: transparent;
  border: 1px solid white;
  border-radius: 20px;
  padding: 5px 0px 5px 0px;
  font-size: 18px;
  width: 80%;
}
.joinservicetraits {
  position: relative;
}
.joinservicetraits:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  background:inherit;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: top left;
  transform:skewY(-2deg);
}

.joinservicedescription {
  width: 100%;
  background: #151515;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 45px;
  padding-bottom: 30px;
}

.joinservicedescription p {
  width: 70%;
  font-size: 22px;
  text-align: center;
}

.joinservicedescription p:first-child {
  margin-top: 50px;
}

.joinservicedescription button {
  background: #a61c00;
  width: 40%;
  margin: 20px 0px 70px 0px;
  padding: 15px 0px 15px 0px;
  border-radius: 20px;
  font-size: 18px;
}

.joinservicesteps {
  background:linear-gradient(
      180deg,
      rgba(68, 68, 68, 1) 35%,
      rgba(43, 43, 43, 0.9) 100%
    ),url(https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png);
    background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
}

.joinservicesteps .joinservicestepscontainer {
  width: 70%;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 20px;
  margin-top: -30px;
  height: auto;
}
.joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep img {
  width: 30%;
}
.joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep {
  display: flex;
  width: 100%;
  margin: 30px 0px 30px 0px;
}
.joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep div {
  display: flex;
  flex-direction: column;
  width: 70%;
}
.joinservicesteps
  .joinservicestepscontainer
  .joinservicestepcontainerstep
  div
  span {
  color: #a61c00;
}
.joinservicesteps
  .joinservicestepscontainer
  .joinservicestepcontainerstep
  div
  h1 {
  font-size: 35px;
}
.joinservicesteps
  .joinservicestepscontainer
  .joinservicestepcontainerstep
  div
  p {
  font-size: 20px;
}
.joinservicesteps svg {
  width: 100%;
  height: 9vh;
  fill: #EDEDED;
}
.joinservicesteps button {
  background: #a61c00;
  color: white;
  padding: 20px 0px 20px 0px;
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 20px;
  width: 40%;
  font-size: 18px;
}


@media (max-width: 1080px) {
  .joinservicehero div h1 {
    font-size: 52px;
  }

  .joinservicehero div p {
    font-size: 22px;
  }
}

@media (max-width: 900px) {
  .joinservicehero div h1 {
    font-size: 50px;
  }

  .joinservicehero div p {
    font-size: 21px;
  }

  .joinservicedescription p {
    width: 80%;
    font-size: 17px;
    line-height: 24px;
  }

  .joinservicedescription button {
    padding: 12px 0px 12px 0px;
    width: 80%;
  }

  .joinservicesteps .joinservicestepscontainer {
    width: 80%;
  }

  .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep
    div
    h1 {
    font-size: 32px;
    padding: 0px 25px 0px 25px;
  }
  .joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep div p {
    font-size: 17px;
    padding: 0px 25px 0px 25px;
  }

  .joinservicesteps button {
 padding: 10px 0px 10px 0px;
 width: 80%;
  }
}


@media (max-width: 750px) {
  #notificationMock{
    display:none;
  }
    .joinservicehero div h1 {
    font-size: 45px;
  }

  .joinservicehero div p {
    font-size: 20px;
  }

   .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep
    div {
    width: 90%;
  }

   .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep
    div
    span {
    font-size: 25px;
  }

  .joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep img {
    border: 1px solid #333;
    height: 250px;
    width: 80%;

  }

  .joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 20px 0
  }

  .joinservicesteps .joinservicestepscontainer .joinservicestepcontainerstep:nth-child(2) {
    flex-direction: column-reverse;
  }

  .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep
    div
    h1 {
    width: 100%;
    padding: 20px 0 0 0;
    margin-left: 25px;
  }

  .joinservicesteps
    .joinservicestepscontainer
    .joinservicestepcontainerstep
    div
    p {
    font-size: 18px;
    /* padding: 0 0 0 40px; */
   text-align: justify;
    margin-top: 10px;
  }
}


@media (max-width: 680px) {
   .joinservicehero div h1 {
    font-size: 40px;
  }

  .joinservicehero div p {
    font-size: 19px;
  }

   .joinservicehero div button {
    font-size: 17px;
  }

  .joinservicedescription button {
    font-size: 17px;
  }
}
  @media (max-width: 450px) {
    .joinservicedescription h2 {
      text-align: center;
    }
    .joinservicestepcontainerstep p {
      text-align: center !important;
      font-size: 1rem !important;
      padding: 0px !important;
    }
    .joinservicestepcontainerstep h1 {
      padding: 0px !important;
      margin-left: 10px !important;
      font-size: 30px !important;
    }

    .joinservicestepcontainerstep .stepTwo h1 {
      padding: 0px !important;
      margin-left: 0px !important;
      font-size: 30px !important;
    }
    .joinservicestepcontainerstep:nth-child(2) {
      margin-top: 0px !important;
    }
    .joinservicestepcontainerstep:nth-child(3) {
      margin-top: 0px !important;
    }
    .joinservicestepcontainerstep .stepTwo p {
      margin-left: -6px !important;
      margin-right: 6px !important;
    }
  }

  @media(max-width: 375px) {
    .joinservicestepscontainer {
      width: 90% !important;
    }
    .joinservicestepcontainerstep h1 {
      text-align: center !important;
      margin-left: 0px !important;
      line-height: 1.1em;
    }
    .joinservicehero h1 {
      line-height: 1.1em;
    }
  }

</style>
