<template>
<!------ HERO ------>
  <div class="joinproductcontainer">
    <section class="joinproducthero">
      <div v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
        <h1>Property & Facility Businesses</h1>
        <p>Find, Vet, and Manage Approved Vendors</p>
        <button @click='$router.push("/register/property-manager")'>Get Started - It’s Free</button>
      </div>
      <div v-else class="d-flex justify-center mt-6 px-2">
        <h1 style="font-size:10vw">Property & Facility Businesses</h1>
        <p>Find, Vet, and Manage</p> 
        <p class="mt-n6">Approved Vendors</p>
        <button @click='$router.push("/register/property-manager")'>Get Started - It’s Free</button>
      </div>
    </section>


<!-- NEW SECTION POWERFUL BUSINESS TOOLS -->
<PFPowerfulTools/>


    <!-- <section v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class="joinproducttraits">
      <div>
        <img v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
          src="https://sowerk-images.s3.us-east-2.amazonaws.com/profile_2_copy.png"
        />
        <img v-else style="height:22vh;" class="mt-n6"
          src="https://sowerk-images.s3.us-east-2.amazonaws.com/profile_2_copy.png"
        />
        <h3>Vet Vendors</h3>
        <p v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
          We make it easy and powerful for you to vet any product provider, and
          re-qualify them annually. SOWerk's prebuilt vendor applications are easy
          and powerful, or customize your own to better fit.
        </p>
        <p v-else style="font-size:4.25vw">
          We make it easy and powerful for you to vet any product provider, and
          re-qualify them annually. SOWerk's prebuilt vendor applications are easy
          and powerful, or customize your own to better fit.
        </p>
      </div>
      <div>
        <img  v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
          src="https://sowerk-images.s3.us-east-2.amazonaws.com/sharecopy.png"
        />
        <img v-else style="height:22vh;" class="mt-n6"
          src="https://sowerk-images.s3.us-east-2.amazonaws.com/sharecopy.png"
        />
        <h3>Powerful Tools</h3>
        <p v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
          One facility or 1,000’s of properties, SOWerk has you covered. Assign
          staff and set approved vendors by location. Manage bids and completed
          jobs all in one clean powerful interface.
        </p>
        <p v-else style="font-size:4.25vw">
          One facility or 1,000’s of properties, SOWerk has you covered. Assign
          staff and set approved vendors by location. Manage bids and completed
          jobs all in one clean powerful interface.
        </p>
      </div>
      <div>
        <img v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
          src="https://sowerk-images.s3.us-east-2.amazonaws.com/networkcopy.png"
        />
        <img v-else style="height:22vh;" class="mt-n10"
          src="https://sowerk-images.s3.us-east-2.amazonaws.com/networkcopy.png"
        />
        <h3>Cold Call Shield</h3>
        <p v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
          With your SOWerk account, you have the perfect place to direct any
          salesman calling to become your approved vendor.
        </p>
        <p v-else style="font-size:4.25vw">
          With your SOWerk account you have the perfect place to direct any
          salesman calling to become your approved vendor.
        </p>
      </div>
      <div>
        <img v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
          src="https://sowerk-images.s3.us-east-2.amazonaws.com/opinioncopy.png"
        />
        <img v-else style="height:22vh;" class="mt-8"
          src="https://sowerk-images.s3.us-east-2.amazonaws.com/opinioncopy.png"
        />
        <h3>Convenient</h3>
        <p v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
          For the facility manager in the middle of the night that needs to
          contact all your approved plumbers for help or a local product
          provider that powers his business through a smartphone, SOWerk is
          designed to be convenient.
        </p>
        <p v-else style="font-size:4.25vw">
          For the facility manager in the middle of the night that needs to
          contact all your approved plumbers for help or a local product
          provider that powers his business through a smartphone, SOWerk is
          designed to be convenient.
        </p>
      </div>
    </section>

    <section v-else class="joinproducttraits d-flex ">
      <div class="mb-3 mt-n0">

        <img  style="height:22vh;" class="mt-n6"
          src="https://sowerk-images.s3.us-east-2.amazonaws.com/profile_2_copy.png"
        />
        <h3>Vet Vendors</h3>

        <p  style="font-size:4.25vw">
          We make it easy and powerful for you to vet any product provider, and
          re-qualify them annually. SOWerk's prebuilt vendor applications are easy
          and powerful, or customize your own to better fit.
        </p>
      </div>
      <div class="mb-3 mt-6">

        <img style="height:22vh;" class="mt-n6"
          src="https://sowerk-images.s3.us-east-2.amazonaws.com/sharecopy.png"
        />
        <h3>Powerful Tools</h3>
        <p  style="font-size:4.25vw">
          One facility or 1,000’s of properties, SOWerk has you covered. Assign
          staff and set approved vendors by location. Manage bids and completed
          jobs all in one clean powerful interface.
        </p>
      </div>
      <div class="mb-3 mt-6">
        <img  style="height:22vh;" class="mt-n10"
          src="https://sowerk-images.s3.us-east-2.amazonaws.com/networkcopy.png"
        />
        <h3>Cold Call Shield</h3>
        <p  style="font-size:4.25vw">
          With your SOWerk account you have the perfect place to direct any
          salesman calling to become your approved vendor.
        </p>
      </div>
      <div>
        <img style="height:22vh;" class="mt-8"
          src="https://sowerk-images.s3.us-east-2.amazonaws.com/opinioncopy.png"
        />
        <h3>Convenient</h3>

        <p style="font-size:4.25vw">
          For the facility manager in the middle of the night that needs to
          contact all your approved plumbers for help or a local product
          provider that powers his business through a smartphone, SOWerk is
          designed to be convenient.
        </p>
      </div>
    </section> -->

<!-- NEW SECTION BUILT BY -->
    <section class="joinproductdescription pt-13 pb-3">
      <h2 v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs" class="text-h4 ">Built By Property & Facility Managers</h2>
      <h2 v-else class="text-h4 ml-3 text-center">Built By Property & Facility Managers</h2>
      <p></p>
      <p>
        SOWerk is built from the ground up as a software for businesses that
        own/manage properties & facilites.
      </p>
      <p>
        We specifically designed our platform to help you identify, qualify,
        and manage just about any type of product provider, local or national.
        If you oversee one facility or own thousands of properties, SOWerk
        empowers you to easily establish approved vendors at each of your
        locations, request quotes from approved providers, and much more.
      </p>
       <v-btn
              class="text-uppercase primary mx-auto text-sm-body-1"
              x-large
              :width="$vuetify.breakpoint.mdAndUp ? '40%' : '90%'"
              style="border-radius: 20px; font-weight: bold; font-size: 15px;"
              @click='$router.push("/register/property-manager")'
              >Register Now</v-btn
            >
    </section>


<!-- NEW SECTION JOIN STEPS -->
    <section class="joinproductsteps">
      <div class="joinproductstepscontainer">

<!--
        <div class="joinproductstepcontainerstep step-right">
          <img class="containerImg" src="https://sowerk-images.s3.us-east-2.amazonaws.com/dashBoardMockup.png" alt="Dashboard Mockup"/>
          <div class="getStarted">
            <h1 v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">Step 1 <span>-Register Company Account & Locations</span></h1>
            <h1 v-else >Step 1<br /> <span class="pr-2" style="width:90%;font-size:7vw">-Register Company Account & Locations</span></h1>
            <p>
              After setting up your account and locations, SOWerk makes it easy
              to filter approved product providers quickly and easily for any
              location across the country.</p>
              <p class="innerList d-flex-row"  style="">
                <span>
                  <img v-show="!$vuetify.breakpoint.xs" class="wrenchIcon d-flex-row align-center" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon">
                </span>
               Manage One Or Thousands of Locations
              </p>
              <p class="innerList d-flex-row">
                <span>

                  <img v-show="!$vuetify.breakpoint.xs" class="wrenchIcon" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon">
                </span>
                Add Staff Accounts For One Location Or Multiple
              </p>
              <p class="innerList d-flex-row">
                <span>

                  <img v-show="!$vuetify.breakpoint.xs" class="wrenchIcon" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon">

                </span>
                Invite Existing Vendors To Connect For Free
              </p>
            </p>
          </div>
        </div>

        <div class="joinproductstepcontainerstep step-left" style="padding-left:3%">
          <div class="getStarted">
            <h1 v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">Step 2 <span>- Find Or Invite Service Providers</span></h1>
            <h1 v-else>Step 2 <span class="pr-2" style="width:90%;font-size:7vw"><br/>- Find Or Invite Service Providers</span></h1>
            <p>
              Property & Facility Managers can invite Service Providers within the platform to join SOWerk and apply, or Service Providers can be invited as Pre-Approved Vendors. Additionally, Service Providers already on SOWerk can be found using the detailed search tool. Use one of SOWerk’s pre-made vendor applications or customize your own questions. This allows you to acquire adequate information from them during the application process to ensure they will represent your brand well, no matter how close or far away.</p>
              <p class="innerList">
                <span>

                  <img v-show="!$vuetify.breakpoint.xs" class="wrenchIcon" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon">

                </span>
                Customize Vendor Application By Location
              </p>
              <p class="innerList">
                <span>

                  <img v-show="!$vuetify.breakpoint.xs" class="wrenchIcon" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon">

                </span>
                Manage Applications By Service Category
              </p>
              <p class="innerList">
                <span>

                  <img v-show="!$vuetify.breakpoint.xs" class="wrenchIcon" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon">

                </span>
                Easily Toggle Application Status On or Off
              </p>
              <p class="innerList">
                <span>

                  <img v-show="!$vuetify.breakpoint.xs" class="wrenchIcon" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png" alt="sowerk icon">

                </span>
                Location Staff Account or Headquarters Can Review Applicants Quickly
              </p>
            </p>
          </div>
          <img  class="containerImg second-img" src="https://sowerk-images.s3.us-east-2.amazonaws.com/applicationMockup.png" id="stepTwo" alt="application mockup" />
        </div>
        -->
        <div>




    <v-flex class="" style="width:100%;">
      <v-container style="width:100%;">
        <v-row style="width:100%; margin-left: -10%;margin-right: 5%;">
        <v-col cols="12" md="6">
        <div class="joinproductstepcontainerstep step-right">
         <v-img class="containerImg" src="https://sowerk-images.s3.us-east-2.amazonaws.com/dashBoardMockup.png" id="stepTwo" alt="application mockup"/>
         </div>
         </v-col>
            <v-col cols="12" md="6">
            <v-flex class="" style="width:100%;">
              <v-container style="width:100%;">
                <v-row class="mx-4" style="width:120%;">
                  <v-col cols="12 " class="d-flex flex-column">
                    <h1 style="font-size: 32px;padding-bottom: 15px;" v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">Step 1 <span style="color: #a61c00;">-Register Company Account & Locations</span></h1>
                    <h1 class="mx-auto d-flex-row justify-center" style="font-size: 25px;padding-bottom: 15px;" v-else>Step 1 <span class="mx-auto d-flex-row justify-center" style="width:100%;font-size:25px;color: #a61c00;"><br/>-Register Company Account & Locations</span></h1>
                    <p style="font-size: 20px;" v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
                    After setting up your account and locations, SOWerk makes it easy
                    to filter approved product providers quickly and easily for any
                    location across the country.
                    </p>
                    <p style="font-size: 18px;" v-else>
                    After setting up your account and locations, SOWerk makes it easy
                    to filter approved product providers quickly and easily for any
                    location across the country.
                    </p>
                    <v-list
                      :width="$vuetify.breakpoint.mdAndUp ? '100%' : '100%'"
                      class="d-flex-column"
                      style=""
                    >
                    <v-row class="d-flex justify-center justfy mx-auto my-n4" cols="12" style="width:100%" >
                        <v-col cols="0" sm="1"  >
                          <v-img  width="20" v-show="!$vuetify.breakpoint.xs" min-width="20" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"/>
                        </v-col>
                        <v-col cols="12" sm="11" >
                          <p v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class=" " style="font-size: 17px; line-height: 1.6em; " color="#707070"> Manage One Or Thousands of Locations</p>
                          <p  v-else class=" mx-n3 px-0" style="font-size: 15px; line-height: 1.6em;width:100% " color="#707070"> Manage One Or Thousands of Locations</p>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex justify-center justfy mx-auto my-n4" cols="12" style="width:100%" >
                        <v-col cols="0" sm="1"  >
                          <v-img  width="20" v-show="!$vuetify.breakpoint.xs" min-width="20" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"/>
                        </v-col>
                        <v-col cols="12" sm="11" >
                          <p v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class=" " style="font-size: 17px; line-height: 1.6em; " color="#707070">Add Staff Accounts For One Location Or Multiple</p>
                          <p  v-else class=" mx-n3  px-0" style="font-size: 15px; line-height: 1.6em;width:100% " color="#707070">Add Staff Accounts For One Location Or Multiple</p>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex justify-center justfy mx-auto my-n4" cols="12" style="width:100%" >
                        <v-col cols="0" sm="1"   >
                          <v-img  width="20" v-show="!$vuetify.breakpoint.xs" min-width="20" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"/>
                        </v-col>
                        <v-col cols="12" sm="11" >
                          <p v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class=" " style="font-size: 17px; line-height: 1.6em; " color="#707070">  Invite Existing Vendors To Connect For Free</p>
                          <p  v-else class=" mx-n3  px-0" style="font-size: 15px; line-height: 1.6em;width:100% " color="#707070">  Invite Existing Vendors To Connect For Free</p>
                        </v-col>
                    </v-row>

                    </v-list>
                  </v-col>
                </v-row>
              </v-container>
            </v-flex>
            </v-col>
        </v-row>
      </v-container>
    </v-flex>


<v-flex class="" style="width:100%;">
      <v-container style="width:100%;">
        <v-row style="width:100%;">
        <v-col cols="12" md="6" v-show="$vuetify.breakpoint.xs">
        <div class="joinproductstepcontainerstep step-right">
         <v-img class="containerImg" src="https://sowerk-images.s3.us-east-2.amazonaws.com/applicationMockup.png" id="stepTwo" alt="application mockup"/>
         </div>
         </v-col>
            <v-col cols="12" md="6" >
            <v-flex class="" style="width:100%;">
              <v-container style="width:100%;">
                <v-row style="width:100%;">
                  
                  <v-col cols="12 " class="d-flex flex-column">
                    
                    <v-row v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
                    <h1 style="font-size: 32px;padding-bottom: 15px;" v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">Step 2 <span style="color: #a61c00;">- Find Or Invite Service Providers</span></h1>
                    <h1 class="mx-auto d-flex-row justify-center" style="font-size: 25px;padding-bottom: 15px;" v-else>Step 2 <span class="mx-auto d-flex-row justify-center" style="width:100%;font-size:25px;color: #a61c00;"><br/>- Find Or Invite Service Providers</span></h1>
                    <p style="font-size: 20px;" v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
                       Property & Facility Managers can invite Service Providers within the platform to join SOWerk and apply, or Service Providers can be invited as Pre-Approved Vendors. Additionally, Service Providers already on SOWerk can be found using the detailed search tool. Use one of SOWerk’s pre-made vendor applications or customize your own questions. This allows you to acquire adequate information from them during the application process to ensure they will represent your brand well, no matter how close or far away.
                    </p>
                    <p style="font-size: 18px;margin:auto;width:100%;" v-else>
                       Property & Facility Managers can invite Service Providers within the platform to join SOWerk and apply, or Service Providers can be invited as Pre-Approved Vendors. Additionally, Service Providers already on SOWerk can be found using the detailed search tool. Use one of SOWerk’s pre-made vendor applications or customize your own questions. This allows you to acquire adequate information from them during the application process to ensure they will represent your brand well, no matter how close or far away.
                    </p>
                    </v-row>
                    <v-row v-else style="margin:unset !important;padding:unset;width:100%;margin-left:24px !important; margin-right:24px !important;">
                    <h1 class="mx-auto d-flex-row justify-center" style="font-size: 25px;padding-bottom: 15px;" >Step 2 <span class="mx-auto d-flex-row justify-center" style="width:100%;font-size:25px;color: #a61c00;"><br/>- Find Or Invite Service Providers</span></h1>
                    <p style="font-size: 18px;margin:auto;width:100%;" >
                       Property & Facility Managers can invite Service Providers within the platform to join SOWerk and apply, or Service Providers can be invited as Pre-Approved Vendors. Additionally, Service Providers already on SOWerk can be found using the detailed search tool. Use one of SOWerk’s pre-made vendor applications or customize your own questions. This allows you to acquire adequate information from them during the application process to ensure they will represent your brand well, no matter how close or far away.
                    </p>
                    </v-row>
                    <v-list
                      :width="$vuetify.breakpoint.mdAndUp ? '150%' : '150%'&& $vuetify.breakpoint.smAndDown ? '100%' : '100%'"
                      class="d-flex-column"
                      style=""
                    >
                    <v-row class="d-flex justify-center justfy mx-auto my-n4" cols="12" style="width:100%" >
                        <v-col cols="0" sm="1"   >
                          <v-img  width="20" v-show="!$vuetify.breakpoint.xs" min-width="20" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"/>
                        </v-col>
                        <v-col cols="12" sm="11" >
                          <p v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class=" " style="font-size: 17px; line-height: 1.6em; " color="#707070">Customize Vendor Application By Location</p>
                          <p v-else class=" mx-2 px-0" style="font-size: 15px; line-height: 1.6em;width:135% " color="#707070">Customize Vendor Application By Location</p>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex justify-center justfy mx-auto my-n4" cols="12" style="width:100%" >
                        <v-col cols="0" sm="1"   >
                          <v-img  width="20" v-show="!$vuetify.breakpoint.xs" min-width="20" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"/>
                        </v-col>
                        <v-col cols="12" sm="11">
                          <p v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class=" " style="font-size: 17px; line-height: 1.6em; " color="#707070">Manage Applications By Service Category</p>
                          <p v-else class="mx-2 px-0 " style="font-size: 15px; line-height: 1.6em; width:135%" color="#707070">Manage Applications By Service Category</p>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex justify-center justfy mx-auto my-n4" cols="12" style="width:100%" >
                        <v-col cols="0" sm="1"   >
                          <v-img  width="20" v-show="!$vuetify.breakpoint.xs" min-width="20" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"/>
                        </v-col>
                        <v-col cols="12" sm="11" >
                          <p v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class=" " style="font-size: 17px; line-height: 1.6em;width:100% " color="#707070">Easily Toggle Application Status On or Off</p>
                          <p v-else class="mx-2 pr-4  " style="font-size: 15px; line-height: 1.6em; width:135%" color="#707070">Easily Toggle Application Status On or Off</p>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex justify-center justfy mx-auto my-n4" cols="12" style="width:100%" >
                        <v-col cols="0" sm="1"   >
                          <v-img  width="20" v-show="!$vuetify.breakpoint.xs" min-width="20" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"/>
                        </v-col>
                        <v-col cols="12" sm="11" >
                          <p v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class=" " style="font-size: 17px; line-height: 1.6em; " color="#707070">Location Staff Account or Headquarters Can Review Applicants Quickly</p>
                          <p v-else  class="mx-2 px-0  " style="font-size: 15px; line-height: 1.6em; width:135%" color="#707070">Location Staff Account or Headquarters Can Review Applicants Quickly</p>
                        </v-col>
                    </v-row>

                    </v-list>
                  </v-col>
                </v-row>
              </v-container>
            </v-flex>
            </v-col>
        <v-col cols="12" md="6" v-show=!$vuetify.breakpoint.xs >
        <div class="joinproductstepcontainerstep step-right last-container" >
         <v-img  class="containerImg second-img" src="https://sowerk-images.s3.us-east-2.amazonaws.com/applicationMockup.png" id="stepTwo" alt="application mockup"/>
         </div>
         </v-col>
        </v-row>
      </v-container>
  </v-flex>
  <v-flex class="" style="width:100%;">
      <v-container style="width:100%;">
        <v-row style="width:100%;">
        <v-col cols="12" md="6">
        <div class="joinproductstepcontainerstep step-right last-container" >
         <!--<img class="containerImg third-img" src="https://sowerk-images.s3.us-east-2.amazonaws.com/propertiesMockUp.png" id="profileDash" alt="properties mockup"/>-->
         <v-img v-if="!$vuetify.breakpoint.xs" class="containerImg" src="https://sowerk-images.s3.us-east-2.amazonaws.com/dashboardandPhone.png" id="profileDash" alt="properties mockup"/>
         <v-img v-else class="containerImg" src="https://sowerk-images.s3.us-east-2.amazonaws.com/dashboardandPhone.png" id="stepTwo" alt="properties mockup"/>
         <!--<img  class="containerImg" src="https://sowerk-images.s3.us-east-2.amazonaws.com/Iphone+Mockup@3x.png" id="iphoneMock" alt="iphone mockup">
         <v-img  height="400" contain src="https://sowerk-images.s3.us-east-2.amazonaws.com/Iphone+Mockup@3x.png" id="iphoneMock" alt="iphone mockup"/>-->
         </div>
         </v-col>
            <v-col cols="12" md="6">
            <v-flex class="" style="width:100%;">
              <v-container style="width:100%;">
                <v-row style="width:100%;">
                  <v-col cols="12" class="d-flex flex-column">

                    <v-row v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm">
                    <h1 style="font-size: 32px;padding-bottom: 15px;" >Step 3 <span style="color: #a61c00;">- Super Simple Management</span></h1>
                    <p style="font-size: 20px;" >
                      What’s the point of great power if you can’t manage it? SOWerk’s
                      simple-to-use interface allows you to stay up-to-date and manage
                      all of your properties quickly and efficiently from a desktop or
                      mobile platform. Manage staff, vet vendors, or even be one click
                      away from your approved product providers - that’s the power of
                      SOWerk.
                    </p>
                    </v-row>
                    <v-row v-else style="margin:unset !important;padding:unset;width:100%;margin-left:24px !important; margin-right:24px !important;">
                    <h1 class="mx-auto d-flex-row justify-center" style="font-size: 25px;padding-bottom: 15px;" >Step 3 <span class="pr-2" style="width:100%;font-size:25px;color: #a61c00;"><br/>- Super Simple Management</span></h1>
                    <p style="font-size: 18px;margin:auto;width:100%;" >
                        What’s the point of great power if you can’t manage it? SOWerk’s
                      simple-to-use interface allows you to stay up-to-date and manage
                      all of your properties quickly and efficiently from a desktop or
                      mobile platform. Manage staff, vet vendors, or even be one click
                      away from your approved product providers - that’s the power of
                      SOWerk.
                    </p>
                    </v-row>
                    <v-list
                      :width="$vuetify.breakpoint.mdAndUp ? '100%' : '100%'"
                      class="d-flex-column"
                      style=""
                    >

                    <v-row class="d-flex justify-center justfy mx-auto my-n4" cols="12" style="width:100%" >
                        <v-col cols="0" sm="1"  >
                          <v-img  width="20" v-show="!$vuetify.breakpoint.xs" min-width="20" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"/>
                        </v-col>
                        <v-col cols="12" sm="11" >
                          <p v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class=" " style="font-size: 17px; line-height: 1.6em; " color="#707070"> Request Service or Bids From Approved Vendors Quickly</p>
                          <p  v-else class=" mx-3 px-0" style="font-size: 15px; line-height: 1.6em;width:100% " color="#707070"> Request Service or Bids From Approved Vendors Quickly</p>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex justify-center justfy mx-auto my-n4" cols="12" style="width:100%" >
                        <v-col cols="0" sm="1"  >
                          <v-img  width="20" v-show="!$vuetify.breakpoint.xs" min-width="20" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"/>
                        </v-col>
                        <v-col cols="12" sm="11" >
                          <p v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class=" " style="font-size: 17px; line-height: 1.6em; " color="#707070">SOWerk Empowers Staff To Up Your Facility Management Game</p>
                          <p  v-else class=" mx-3  px-0" style="font-size: 15px; line-height: 1.6em;width:100% " color="#707070">SOWerk Empowers Staff To Up Your Facility Management Game</p>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex justify-center justfy mx-auto my-n4" cols="12" style="width:100%" >
                        <v-col cols="0" sm="1"   >
                          <v-img  width="20" v-show="!$vuetify.breakpoint.xs" min-width="20" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"/>
                        </v-col>
                        <v-col cols="12" sm="11" >
                          <p v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class=" " style="font-size: 17px; line-height: 1.6em; " color="#707070">  Filter & Find New Service Providers</p>
                          <p  v-else class=" mx-3  px-0" style="font-size: 15px; line-height: 1.6em;width:100% " color="#707070">  Filter & Find New Service Providers</p>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex justify-center justfy mx-auto my-n4" cols="12" style="width:100%" >
                        <v-col cols="0" sm="1"   >
                          <v-img  width="20" v-show="!$vuetify.breakpoint.xs" min-width="20" src="https://sowerk-images.s3.us-east-2.amazonaws.com/SoWork+round+icon-157.png"/>
                        </v-col>
                        <v-col cols="12" sm="11" >
                          <p v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm" class=" " style="font-size: 17px; line-height: 1.6em; " color="#707070"> SOWerk Makes Annual Vendor Requalifying Easy & Automated</p>
                          <p  v-else class=" mx-3  px-0" style="font-size: 15px; line-height: 1.6em;width:100% " color="#707070">  SOWerk Makes Annual Vendor Requalifying Easy & Automated</p>
                        </v-col>
                    </v-row>

                    </v-list>
                  </v-col>
                </v-row>
              </v-container>
            </v-flex>
            </v-col>
        </v-row>
      </v-container>
    </v-flex>
          </div>
      </div>
      <v-btn
              class="text-uppercase primary mx-auto text-sm-body-1"
              x-large
              :width="$vuetify.breakpoint.mdAndUp ? '40%' : '90%'"
              style="border-radius: 20px; font-weight: bold; font-size: 15px;"
              @click='$router.push("/register/property-manager")'
              >Register Now</v-btn
            >
    </section>

<!-- NEW SECTION - JOIN TRAITS -->
    <v-container
      fluid
      grid-list-md
      text-center
      pb-16
      class="joinproducttraits"
      style="background:#a61c00; display: flex; justify-content: center; align-items:center; flex-direction: column"
    >
      <v-layout row style="max-width: 1280px; flex-wrap: wrap; margin-top:-120px">
        <!-- CARD 1 -->
        <v-col cols="12" lg="3" sm="6" class="d-flex">
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
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/profile_2_copy.png"
                style="object-fit: contain;"
              ></v-img>
            </div>
            <v-card-text
              style="font-size: 22px; font-weight:400; color: black; letter-spacing: 1px;"
              >Vet Vendors</v-card-text
            >
            <div
              class="py-3"
              style="width: 80%; font-size: 1rem; text-align: center"
            >
              We make it easy and powerful for you to vet any product provider, and re-qualify them annually. SOWerk's prebuilt vendor applications are easy and powerful, or customize your own to better fit.
            </div>
          </v-card>
        </v-col>

        <!-- CARD 2 -->
        <v-col cols="12" lg="3" sm="6" class="d-flex">
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
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/tools+copy.png"
                style="object-fit: contain;"
              ></v-img>
            </div>
            <v-card-text
              style="font-size: 22px; font-weight:400; color: black; letter-spacing: 1px;"
              >Powerful Tools</v-card-text
            >
            <div
              class="py-3"
              style="width: 80%; font-size: 1rem; text-align: center"
            >
              One facility or 1,000’s of properties, SOWerk has you covered. Assign staff and set approved vendors by location. Manage bids and completed jobs all in one clean powerful interface.
            </div>
          </v-card>
        </v-col>

        <!-- CARD 3 -->
        <v-col cols="12" lg="3" sm="6" class="d-flex">
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
              style="font-size: 22px; font-weight:400; color: black; letter-spacing: 1px;"
              >Cold Call Shield</v-card-text
            >
            <div
              class="py-3"
              style="width: 80%; font-size: 1rem; text-align: center"
            >
              With your SOWerk account, you have the perfect place to direct any salesman calling to become your approved vendor.
            </div>
          </v-card>
        </v-col>

        <!-- CARD 4 -->
        <v-col cols="12" lg="3" sm="6" class="d-flex">
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
                src="https://sowerk-images.s3.us-east-2.amazonaws.com/nextcopy.png"
                style="object-fit: contain;"
              ></v-img>
            </div>
            <v-card-text
              style="font-size: 22px; font-weight:400; color: black; letter-spacing: 1px;"
              >Convenient</v-card-text
            >
            <div
              class="py-3"
              style="width: 80%; font-size: 1rem; text-align: center"
            >
              For the facility manager in the middle of the night that needs to contact all your approved plumbers for help or a local product provider that powers his business through a smartphone, SOWerk is designed to be convenient.
            </div>
          </v-card>
        </v-col>
      </v-layout>
    </v-container>

<!-- PROPERTY FACILITY QUESTIONS SECTION -->
    <OftenAskPF/>
  </div>
</template>

<script>
import PFPowerfulTools from '~/components/landing/property-manager/PFPowerfulTools'
import OftenAskPF from '~/components/landing/property-manager/OftenAskPF'

export default {
  layout: 'fullwidth',
  components: {
    PFPowerfulTools,
    OftenAskPF,
  },
}
</script>

<style scoped>
.joinproductcontainer {
  margin-top: -5%;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.joinproducthero {
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://sowerk-images.s3.us-east-2.amazonaws.com/macbook-336704copy.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.joinproducthero div {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.joinproducthero div h1 {
  font-size: 55px;
  text-align: center;
}
.joinproducthero div p {
  font-size: 23px;
}
.joinproducthero div button {
  background: transparent;
  font-size: 18px;
  border: 1px solid white;
  padding: 8px 50px 8px 50px;
  border-radius: 20px;
}
.joinproducthero svg {
  width: 100%;
  height: 9vh;
  fill: #a61c00;
  margin-top: 50px;
  margin-bottom: -320px;
}
.joinproducttraits {
  position: relative;
}

.joinproducttraits:before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  background: inherit;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform-origin: top left;
  transform: skewY(-2deg);
}
/* .joinproducttraits div {
  width: 20%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 20px;
  margin: -100px 5px 50px 5px;
  z-index: 5;
}
.joinproducttraits div img {
  width: 50%;
  height: 150px;
}
.joinproducttraits div h3 {
  font-size: 22px;
  margin: 10px 0px 10px 0px;
}
.joinproducttraits div p {
  width: 80%;
  font-size: 18px;
} */
.joinproductdescription {
  width: 100%;
  background: #151515;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.joinproductdescription p {
  width: 70%;
  font-size: 19px;
  text-align: center;
}

.joinproductdescription p:first-child {
  margin-top: 50px;
}

.joinproductdescription button {
  background: #a61c00;
  width: 40%;
  margin: 20px 0px 70px 0px;
  padding: 15px 0px 15px 0px;
  border-radius: 20px;
  font-size: 18px;
}

.joinproductsteps {
  background: linear-gradient(
      180deg,
      rgba(68, 68, 68, 1) 35%,
      rgba(43, 43, 43, 0.9) 100%
    ),
    url('https://sowerk-images.s3.us-east-2.amazonaws.com/BackgroundTexture-155.png');
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
  padding-bottom: 180px;
}

.joinproductsteps .joinproductstepscontainer {
  width: 70%;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 20px;
  margin-top: -30px;
  height: auto;
}
.joinproductsteps .joinproductstepscontainer .joinproductstepcontainerstep img {
  width: 30%;
}
.joinproductsteps .joinproductstepscontainer .joinproductstepcontainerstep {
  display: flex;
  width: 100%;
  margin: 30px 0px 30px 0px;
}
.joinproductsteps .joinproductstepscontainer .joinproductstepcontainerstep div {
  display: flex;
  flex-direction: column;
  width: 70%;
}
.joinproductsteps
  .joinproductstepscontainer
  .joinproductstepcontainerstep
  div
  span {
  color: #a61c00;
}
.joinproductsteps
  .joinproductstepscontainer
  .joinproductstepcontainerstep
  div
  h1 {
  font-size: 32px;
  padding-bottom: 15px;
}
.joinproductsteps
  .joinproductstepscontainer
  .joinproductstepcontainerstep
  div
  p {
  font-size: 20px;
  font-weight: 400;
}

.joinproductsteps svg {
  width: 100%;
  height: 9vh;
  fill: rgb(237, 237, 237);
}
.joinproductsteps button {
  background: #a61c00;
  color: white;
  padding: 20px 0px 20px 0px;
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 20px;
  width: 40%;
  font-size: 18px;
}
.joinproductstepcontainerstep img {
  width: 45% !important;
  height: auto;
  margin-left: -10%;
  margin-right: 5%;
}
#stepTwo {
  margin-left: 5% !important;
  margin-right: -10% !important;
}
#profileDash {
  margin-left: -15% !important;
  margin-bottom: 10%;
  margin-top: 5%;
  width: 50% !important;
  position: relative;
}
#iphoneMock {
  margin-left: -15%;
  margin-bottom: -5%;
  margin-top: 15%;
  bottom: 15%;
  width: 30% !important;
  height: auto;
  position: relative;
}

.stepList li {
  list-style-image: url('https://sowerk-images.s3.us-east-2.amazonaws.com/SOWerkIcon.png');
  max-width: 90%;
  max-height: 90%;
}
.getStarted img {
  width: 5% !important;
  height: auto;
  padding-top: 2%;
  align-items: center;
  padding-right: 5px;
  margin-left: -10%;
}


.containerImg.second-img {
  width: 55% !important;
}

/* .stepbullet {
  margin-bottom: 0;
  margin-left: 45px;
}

#stepbullet_img {
  padding-top: 0!important;
  padding-right: 5px;
  position: relative;
  top: 5px;
  left: 10px;
  width: 30px!important;
} */

.innerList {
  margin-left: 10%;
  margin-top: -2%;
  margin-bottom: 2%;
  padding-right: -20%;
}
.innerList span {
  margin: auto 0;
}
.innerList span img[data-v-226494d8] {
  width: 30px !important;
}

/* @media (max-width: 1700px) {
  .joinproducttraits div img {
    height: 140px;
  }
} */

@media (max-width: 1630px) {
  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep
    div
    h1 {
    font-size: 25px;
  }

  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep
    div
    p {
    font-size: 17px;
  }
}

@media (max-width: 1350px) {
  /* .joinproducttraits div {
    width: 21%;
    height: 450px;
  }
  .joinproducttraits div img {
    height: 125px;
    width: 125px;
  }
  .joinproducttraits div h3 {
    font-size: 20px;
    font-weight: 400;
  }

  .joinproducttraits div p {
    font-size: 16px;
  } */

  .joinproductstepscontainer {
    margin-bottom: 10%;
    padding-bottom: 5%;
  }
  .getStarted img {
    margin-left: -10% !important;
    margin-right: unset !important;
    width: 8% !important;
    height: auto !important;
    border: none !important;
  }
  .innerList span img[data-v-226494d8] {
    width: 25px !important;
  }
}

@media (max-width: 1200px) {
  /* .joinproducttraits div {
    height: 425px;
  }

  .joinproducttraits div img {
    height: 90px;
    width: 90px;
  }

  .joinproducttraits div h3 {
    font-size: 19px;
  }

  .joinproducttraits div p {
    font-size: 15px;
  } */
  .joinproductstepscontainer {
    margin-bottom: 10%;
    padding-bottom: 5%;
  }

  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep
    div
    h1 {
    font-size: 22px;
  }

  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep
    div
    p {
    font-size: 15px;
  }
  .getStarted img {
    margin-left: -10% !important;
    margin-right: unset !important;
    width: 8% !important;
    height: auto !important;
    border: none !important;
  }
  .innerList span img[data-v-226494d8] {
    width: 25px !important;
  }
}

@media (max-width: 960px) {
  .joinproducthero {
    margin-top: -10%;
  }
}

@media (max-width: 900px) {
  .joinproducthero div h1 {
    font-size: 53px;
  }

  .joinproducthero div p {
    font-size: 22px;
  }

  /* .joinproducttraits {
    flex-wrap: wrap;
  } */
  /* .joinproducttraits div {
    flex: 0 45%;
    height: 425px;
    max-width: 320px;
  }

  .joinproducttraits div img {
    height: 120px;
    width: 120px;
  }

  .joinproducttraits div h3 {
    font-size: 20px;
    font-weight: 400;
  }

  .joinproducttraits div p {
    font-size: 16px;
  }

  .joinproducttraits div:nth-child(1),
  .joinproducttraits div:nth-child(2) { */
  /* margin-bottom: 20px; */
  /* margin: 50px 15px 20px 15px;
  } */

  /* .joinproducttraits div:nth-child(3),
  .joinproducttraits div:nth-child(4) {
    margin: 20px 15px 50px 15px;
  } */

  .joinproductdescription p {
    width: 80%;
    font-size: 17px;
    line-height: 24px;
  }

  .joinproductdescription button {
    padding: 12px 0px 12px 0px;
    width: 80%;
  }

  .joinproductsteps .joinproductstepscontainer {
    width: 80%;
  }

  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep
    div
    h1 {
    font-size: 32px;
    padding: 0px 25px 0px 25px;
  }

  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep
    div
    p {
    font-size: 17px;
    padding: 0px 25px 0px 25px;
  }
  .joinproductsteps button {
    padding: 15px 0px 15px 0px;
    width: 80%;
  }

  .getStarted img {
    margin-left: -10% !important;
    margin-right: unset !important;
    width: 8% !important;
    height: auto !important;
    border: none !important;
  }
  .innerList {
    font-size: 1.5vh !important;
  }
  .joinproductstepscontainer {
    margin-bottom: 10%;
    padding-bottom: 5%;
  }
}
@media (max-width: 750px) {
  .containerImg {
    display: none;
  }
  .joinproducthero div h1 {
    font-size: 45px;
  }

  .joinproducthero div p {
    font-size: 20px;
  }

  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep
    div {
    width: 90%;
  }

  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep
    div
    span {
    font-size: 25px;
  }

  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep
    img {
    border: 1px solid #333;
    height: 250px;
    width: 80%;
  }

  .joinproductsteps .joinproductstepscontainer .joinproductstepcontainerstep {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 20px 0;
  }

  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep:nth-child(2) {
    flex-direction: column-reverse;
  }
  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep
    div
    h1 {
    width: 100%;
    padding: 20px 0 0 0;
    margin-left: 25px;
  }

  .joinproductsteps
    .joinproductstepscontainer
    .joinproductstepcontainerstep
    div
    p {
    font-size: 18px;
    /* padding: 0 0 0 40px; */
    text-align: justify;
    margin-top: 10px;
  }

  .getStarted h1 {
    font-size: 3vw !important;
  }
  .getStarted h1 span {
    font-size: 3vw !important;
  }
  .getStarted .innerList {
    font-size: 16px !important;
  }
  .getStarted img {
    margin-left: -10% !important;
    margin-right: unset !important;
    width: 8% !important;
    height: auto !important;
    border: none !important;
  }
  .step-left {
    padding-left: 0% !important;
    margin-top: -20px !important;
  }
  .last-container{
    margin-top: -20px !important;
  }
}

@media (max-width: 680px) {
  .joinproducthero div h1 {
    font-size: 38px;
  }

  .joinproducthero div p {
    font-size: 19px;
  }

  .joinproducthero div button {
    font-size: 17px;
    padding: 8px 48px 8px 48px;
  }

  .joinproductdescription p {
    font-size: 16px;
  }

  .joinproductdescription button {
    font-size: 17px;
  }

  .getStarted img {
    margin-left: -10% !important;
    margin-right: unset !important;
    width: 8% !important;
    height: auto !important;
    border: none !important;
  }
}

 @media(max-width: 500px) {
   .joinproductstepcontainerstep p {
     text-align: center !important;
     font-size: 1rem !important;
     padding: 0px !important;
   }
   .joinproductstepcontainerstep .innerList {
     text-align: left !important;
   }
   .joinproductstepcontainerstep h1 {
     padding: 0px !important;
     margin-left: 10px !important;
     font-size: 30px !important;
   }
   .joinproductstepcontainerstep h1 span{
     font-size: 30px !important;
   }
   .joinproductstepcontainerstep:nth-child(2) {
     margin-top: 0px !important;
   }
   .joinproductstepcontainerstep:nth-child(3) {
     margin-top: 0px !important;
   }
 }

  @media (max-width: 375px) {
    .joinproductstepcontainerstep h1 {
      font-size: 25px !important;
    }
    .joinproductstepcontainerstep h1 span{
      font-size: 25px !important;
    }
  }
</style>
