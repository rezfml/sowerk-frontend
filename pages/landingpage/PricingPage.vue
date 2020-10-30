<template>
  <div class="head" id="aboutcontainer" style="background-color:rgb(237,237,237)">
    <section v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs" style="margin-bottom:20%;" class="abouthero" >
      <h1 style="width:90%;font-size:3.5vw;margin-top:-10px;;">SOWerk Vendors Start Now For Free</h1>
      <h2 style="font-size:1.8vw;margin-top:-200px;color:white;">No Credit Card Needed - Get Started in Minutes - It's 100% Free</h2>
      <v-btn @click='$router.push("/register/provider")'  rounded outlined color="white" style="width:15vw;margin-top:20px;margin-bottom:5%;"> Get Started Now</v-btn>
    </section>
    <section v-else-if="!$vuetify.breakpoint.xs" class="abouthero" >
      <h1 style="width:90%;font-size:3.5vw;margin-top:-50px;">SOWerk Vendors Start Now For Free</h1>
      <h2 style="font-size:1.8vw;margin-top:-200px;color:white;">No Credit Card Needed - Get Started in Minutes - It's 100% Free</h2>
      <v-btn @click='$router.push("/register/provider")'  rounded outlined color="white" style="width:25vw;margin-top:20px; font-size:1.8vw"> Get Started Now</v-btn>
    </section>
    <section v-else class="abouthero" >
      <h1 style="width:90%;font-size:5vw;margin-top:50px;">SOWerk Vendors Start Now For Free</h1>
      <h2 style="font-size:3.5vw;margin-top:-200px;color:white;">No Credit Card Needed - Get Started in Minutes -<br/><span class="d-flex justify-center"> It's 100% Free</span></h2>
      <v-btn @click='$router.push("/register/provider")'  rounded outlined color="white" style="width:50vw;margin-top:20px; font-size:3.8vw"> Get Started Now</v-btn>
    </section>
<section style="margin-bottom:30%;" v-if="!$vuetify.breakpoint.md && !$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
<v-container fluid style="
    background:linear-gradient(180deg, rgba(166,28,0,1) 35%, rgba(83,14,0,1) 100%); 
    transform-origin: top left;
    transform: skewY(-2deg); 
    margin-top:-500px;
    height:60vh;" class="py-16">
  <v-row justify="center"
  style="
    transform: skewY(2deg);margin-top:-10%; ">
      <v-flex sm11>
        <v-row>
         <v-card height="auto" :width="$vuetify.breakpoint.lgAndUp ? '100%' : '10%'" class="py-16 my-12 d-flex justify-center" style="border-radius: 20px;" align="center">

           <v-container>
           <v-row class="d-flex justify-space-around flex-wrap">
            <v-card height="auto" :width="$vuetify.breakpoint.lgAndUp ? '40%' : '40%'" class="py-16 my-12 px-12" outlined style="border:none" align="center">
              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/user.png" alt="sowerk user">
              <h1>Company Profile</h1>
              <p>Simply creating a free profile on SOWerk instantly grants you major benefits. The best part is you don't have to do any extra work. Think of your profile
                as its own personal salesman that will showoff your company to businesses on and off of SOWerk anytime day or night.
              </p>
            </v-card>
            <v-card height="auto" :width="$vuetify.breakpoint.lgAndUp ? '40%' : '40%'" class="py-16 my-12 px-12" outlined style="border:none" align="center">
              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/portfolio.png" alt="sowerk portfolio">
              <h1>Project Portfolio</h1>
              <p>SOWerk knows how important your reputation is, thats why we show your company profile like resume.
                 We also want businesses to understand your successful work history.
                 We can also take it one step forward and show that your company has all of required legal documents in place to help build trust from square one.  
              </p>
            </v-card>
           </v-row>
              
           <v-row class="d-flex justify-space-around flex-wrap">
            <v-card height="auto" :width="$vuetify.breakpoint.lgAndUp ? '40%' : '40%'" class="py-16 my-12 px-12" outlined style="border:none" align="center">
              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/email.png" alt="sowerk email">
              <h1>New Leads</h1>
              <p>Even if your company has a website with lead forms, we also want you to receive leads through SOWerk.
                 Simply by creating an account, anyone who comes across your account has the ability to submit a lead and ask for your services.  
              </p>
            </v-card>
            <v-card height="auto" :width="$vuetify.breakpoint.lgAndUp ? '40%' : '40%'" class="py-16 my-12 px-12" outlined style="border:none" align="center">
              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/resume.png" alt="sowerk resume">
              <h1>Unlimited Applications</h1>
              <p>After creating your SOWerk free account, you have access to apply to any business on SOWerk.
                 Its free and easy, within a few clicks, you have already shook hands with a company your competitors are still trying to cold call.   
              </p>
            </v-card>
           </v-row>
           </v-container>
         </v-card>
        </v-row>
    </v-flex>
    </v-row>
</v-container>
</section >
<section style="margin-bottom:30%;" v-else-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
<v-container fluid style="
    background:linear-gradient(180deg, rgba(166,28,0,1) 35%, rgba(83,14,0,1) 100%); 
    transform-origin: top left;
    transform: skewY(-2deg); 
    margin-top:-40%;
    height:60vh;" class="py-16">
  <v-row justify="center"
  style="
    transform: skewY(2deg);margin-top:-10%; ">
      <v-flex sm11>
        <v-row>
         <v-card height="auto" :width="$vuetify.breakpoint.mdAndUp ? '100%' : '10%'" class="py-16 my-12 d-flex justify-center" style="border-radius: 20px;" align="center">

           <v-container>
           <v-row class="d-flex justify-space-around flex-wrap">
            <v-card height="auto" :width="$vuetify.breakpoint.mdAndUp ? '40%' : '40%'" class="py-16 my-12 px-12" outlined style="border:none" align="center">
              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/user.png" alt="sowerk user">
              <h1>Company Profile</h1>
              <p>Simply creating a free profile on SOWerk instantly grants you major benefits. The best part is you don't have to do any extra work. Think of your profile
                as its own personal salesman that will showoff your company to businesses on and off of SOWerk anytime day or night.
              </p>
            </v-card>
            <v-card height="auto" :width="$vuetify.breakpoint.mdAndUp ? '40%' : '40%'" class="py-16 my-12 px-12" outlined style="border:none" align="center">
              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/portfolio.png" alt="sowerk portfolio">
              <h1>Project Portfolio</h1>
              <p>SOWerk knows how important your reputation is, thats why we show your company profile like resume.
                 We also want businesses to understand your successful work history.
                 We can also take it one step forward and show that your company has all of required legal documents in place to help build trust from square one.  
              </p>
            </v-card>
           </v-row>
              
           <v-row class="d-flex justify-space-around flex-wrap">
            <v-card height="auto" :width="$vuetify.breakpoint.mdAndUp ? '40%' : '40%'" class="py-16 my-12 px-12" outlined style="border:none" align="center">
              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/email.png" alt="sowerk email">
              <h1>New Leads</h1>
              <p>Even if your company has a website with lead forms, we also want you to receive leads through SOWerk.
                 Simply by creating an account, anyone who comes across your account has the ability to submit a lead and ask for your services.  
              </p>
            </v-card>
            <v-card height="auto" :width="$vuetify.breakpoint.mdAndUp ? '40%' : '40%'" class="py-16 my-12 px-12" outlined style="border:none" align="center">
              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/resume.png" alt="sowerk resume">
              <h1>Unlimited Applications</h1>
              <p>After creating your SOWerk free account, you have access to apply to any business on SOWerk.
                 Its free and easy, within a few clicks, you have already shook hands with a company your competitors are still trying to cold call.   
              </p>
            </v-card>
           </v-row>
           </v-container>
         </v-card>
        </v-row>
    </v-flex>

    </v-row>
</v-container>
</section >

<section style="position:relative;" v-else>
<v-container fluid style="
    background:linear-gradient(180deg, rgba(166,28,0,1) 35%, rgba(83,14,0,1) 100%); 
    transform-origin: top left;
    transform: skewY(-2deg); 
    margin-top:-20%;
    height:auto" class="py-16">
  <v-row justify="center"
  style="
    transform: skewY(2deg);margin-top:-5%;margin-left:5%; ">
      <v-flex sm11>
        <v-row>
         <v-card height="auto" :width="$vuetify.breakpoint.mdAndUp ? '100%' : '90%'" class="py-1 my-1 d-flex justify-center" style="border-radius: 20px;" align="center">

           <v-container>
           <v-row class="d-flex justify-space-around flex-wrap">
            <v-card height="auto" :width="$vuetify.breakpoint.mdAndUp ? '100%' : '100%'" class="py-1 my-12 px-1" outlined style="border:none" align="center">
              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/user.png" alt="sowerk user">
              <h1>Company Profile</h1>
              <p>Simply creating a free profile on SOWerk instantly grants you major benefits. The best part is you don't have to do any extra work. Think of your profile
                as its own personal salesman that will showoff your company to businesses on and off of SOWerk anytime day or night.
              </p>
            </v-card>
          
            <v-card height="auto" :width="$vuetify.breakpoint.mdAndUp ? '100%' : '100%'" class="py-1 my-1 px-12" outlined style="border:none" align="center">
              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/portfolio.png" alt="sowerk portfolio">
              <h1>Project Portfolio</h1>
              <p>SOWerk knows how important your reputation is, thats why we show your company profile like resume.
                 We also want businesses to understand your successful work history.
                 We can also take it one step forward and show that your company has all of required legal documents in place to help build trust from square one.  
              </p>
            </v-card>
           </v-row>
              
           <v-row class="d-flex justify-space-around flex-wrap">
            <v-card height="auto" :width="$vuetify.breakpoint.mdAndUp ? '100%' : '100%'" class="py-1 my-1 px-12" outlined style="border:none" align="center">
              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/email.png" alt="sowerk email">
              <h1>New Leads</h1>
              <p>Even if your company has a website with lead forms, we also want you to receive leads through SOWerk.
                 Simply by creating an account, anyone who comes across your account has the ability to submit a lead and ask for your services.  
              </p>
            </v-card>
            <v-card height="auto" :width="$vuetify.breakpoint.mdAndUp ? '100%' : '100%'" class="py-1 my-1 px-12" outlined style="border:none" align="center">
              <img src="https://sowerk-images.s3.us-east-2.amazonaws.com/resume.png" alt="sowerk resume">
              <h1>Unlimited Applications</h1>
              <p>After creating your SOWerk free account, you have access to apply to any business on SOWerk.
                 Its free and easy, within a few clicks, you have already shook hands with a company your competitors are still trying to cold call.   
              </p>
            </v-card>
           </v-row>
           </v-container>
         </v-card>
        </v-row>
    </v-flex>
    </v-row>
</v-container>
</section >

  <div class="PricingContainer  d-flex justify-space-between justify-end" style="margin-top:-30%;" v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs">
    
    <section class="packages" style="width:100%;margin-top:30%;"  >
      
      
    <v-row style="width:80%;" class="d-flex justify-space-between">
      <v-card  outlined class="basicPackage" style="border-radius:20px; width:18%;border-color:#707070;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center " style="font-size:.9vw;background-color:#707070;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:-5%;font-weight:bold">STARTING LEVEL</v-card-title>
        <v-card-title class="d-flex flex-column justify-center" style="font-size:1.1vw;font-weight:600">SOWERK BASIC</v-card-title>
        <v-card-subtitle class="d-flex justify-center mt-10" style="font-size:3vw;margin-bottom:-22px">FREE</v-card-subtitle>
        <v-divider class="d-flex justify-center mt-10 mb-n2" height="12" style="width:90%;margin-left:5%;margin-bottom:20px;"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:1.75;font-weight:bold;color:black">PACKAGE INCLUDES</v-card-text>
         <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%; font-size:.7vw;color:#707070;">
          <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">1 User License</v-list-item> 
          <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Profile</v-list-item>
          <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Leads</v-list-item> 
         </v-list>
      </v-card>

      <v-card outlined  class="upgrade1" style="border-radius:20px; width:18%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center " style="font-size:.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:-5%;font-weight:bold">UPGRADE 1</v-card-title>
        <v-card-title class="d-flex flex-column justify-center " style="font-size:1.1vw;font-weight:600">SOWERK STARTER</v-card-title>
        <v-card-subtitle class="mt-4 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:2.8vw">$8.33<span class="ml-n8" style="font-size:.7vw">/monthly</span></v-card-subtitle>
        <p class="mt-n4 d-flex justify-space-around align-baseline" style="color:#707070;" >Or $100.00 Per Year</p>
        <v-divider class="d-flex justify-center mt-4 mb-n2" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:1.5;font-weight:bold;color:black">PACKAGE INCLUDES</v-card-text>
          <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%;font-size:.7vw;color:#707070; ">
            <v-list-item class="d-flex justify-center sjust" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">3</span> User License</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%; "><span class="mr-2" style="color:#a61c00">5</span> Business Connections</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">$10</span> Per Additional Conntection(s)</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Profile</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Leads</v-list-item> 
         </v-list>
      </v-card>

      <v-card outlined  class="upgrade2" style="border-radius:20px; width:18%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center " style="font-size:.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:-5%;font-weight:bold">UPGRADE 2</v-card-title>
        <v-card-title class="d-flex flex-column justify-center " style="font-size:1.1vw;font-weight:600">SOWERK ADVANCED</v-card-title>
        <v-card-subtitle class="mt-4 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:2.8vw">$20.83<span class="ml-n2" style="font-size:.7vw">/monthly</span></v-card-subtitle>
        <p class="mt-n4 d-flex justify-space-around align-baseline" style="color:#707070;" >Or $250.00 Per Year</p>
        <v-divider class="d-flex justify-center mt-4 mb-n2" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:1.5;font-weight:bold;color:black">PACKAGE INCLUDES</v-card-text>
          <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%;font-size:.7vw;color:#707070; ">
            <v-list-item class="d-flex justify-center sjust" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">5</span> User License</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%; "><span class="mr-2" style="color:#a61c00">20</span> Business Connections</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">$8.5</span> Per Additional Conntection(s)</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Profile</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Leads</v-list-item> 
         </v-list>
      </v-card>

      <v-card outlined  class="upgrade3" style="border-radius:20px; width:18%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center " style="font-size:.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:-5%;font-weight:bold">UPGRADE 3</v-card-title>
        <v-card-title class="d-flex flex-column justify-center " style="font-size:1.1vw;font-weight:600">SOWERK PRO</v-card-title>
        <v-card-subtitle class="mt-4 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:2.8vw">$41.67<span class="ml-n6" style="font-size:.7vw">/monthly</span></v-card-subtitle>
        <p class="mt-n4 d-flex justify-space-around align-baseline" style="color:#707070;" >Or $500.00 Per Year</p>
        <v-divider class="d-flex justify-center mt-4 mb-n2" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:1.5;font-weight:bold;color:black">PACKAGE INCLUDES</v-card-text>
          <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%;font-size:.7vw;color:#707070; ">
            <v-list-item class="d-flex justify-center sjust" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">10</span> User License</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%; "><span class="mr-2" style="color:#a61c00">50</span> Business Connections</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">$5</span> Per Additional Conntection(s)</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Profile</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Leads</v-list-item> 
         </v-list>
      </v-card>

      <v-card outlined  class="upgrade4" style="border-radius:20px; width:18%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center " style="font-size:.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:-5%;font-weight:bold">UPGRADE 4</v-card-title>
        <v-card-title class="d-flex flex-column justify-center " style="font-size:1.1vw;font-weight:600">SOWERK PRO</v-card-title>
        <v-card-subtitle class="mt-4 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:2.8vw">$125.00<span class="ml-n0" style="font-size:.7vw">/monthly</span></v-card-subtitle>
        <p class="mt-n4 d-flex justify-space-around align-baseline" style="color:#707070;" >Or $1500.00 Per Year</p>
        <v-divider class="d-flex justify-center mt-4 mb-n2" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:1.5;font-weight:bold;color:black">PACKAGE INCLUDES</v-card-text>
          <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%;font-size:.7vw;color:#707070; ">
            <v-list-item class="d-flex justify-center sjust" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">15</span> User License</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%; "><span class="mr-2" style="color:#a61c00">250</span> Business Connections</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;"><span class="mr-2" style="color:#a61c00">$3</span> Per Additional Conntection(s)</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Profile</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;">SOWerk Leads</v-list-item> 
         </v-list>
      </v-card>


      </v-row>
      <v-row style="width:80%;" class="d-flex flex-column justify-center" >


      <v-card outlined  class="upgrade5 my-6"  style="border-radius:20px; width:100%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center " style="font-size:.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:-5%;font-weight:bold">UPGRADE 5</v-card-title>
        <v-card-title class="d-flex flex-column justify-center mt-16" style="font-size:1vw;font-weight:600">SOWERK ENTERPRISE</v-card-title>
        <v-card-subtitle class="mt-2 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:2.2vw;font-weight:600">CUSTOM RATE</v-card-subtitle>
        <v-divider class="d-flex justify-center mt-4 mb-n2" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:1.5;color:black">Does you’re business require a special connection and pricing rate? At SOWerk, we are happy to work with you to make sure we develop a perfect plan based around your needs.</v-card-text>
      </v-card>
      </v-row>
      <v-row>
        <v-col cols="12" style=" " >
        <v-row style="width:100%; " class="d-flex justify-center my-3">
        <v-btn  @click='$router.push("/register/provider")' style="width:200%;border-radius:20px;background-color:#a61c00; color:white; height:3vw; font-weight:600">GET STARTED NOW</v-btn>
        </v-row>
             
        </v-col>
        
      </v-row>
      
    </section>
    </div>

    <div class="PricingContainer d-flex justify-flex-start" style="position:relative;margin-top:10%" v-else>
    
    <section class="packages" style="width:100%;" >
      
    <v-row style="width:100%;" class="d-flex justify-flex-start justify-space-around">
      <v-card outlined  class="upgrade2" style="border-radius:20px; width:90%;border-color:#707070;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center mx-n1" style="width:102%;font-size:5.9vw;background-color:#707070;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:2%;font-weight:bold">Starting Level</v-card-title>
        <v-card-title class="d-flex flex-column justify-center " style="font-size:8vw">SOWERK Basic</v-card-title>
        <v-card-subtitle class="mt-4 d-flex justify-space-around align-baseline" style="color:#707070; font-size:12vw">FREE</v-card-subtitle>
        <v-divider class="d-flex justify-center mt-4 mb-n2" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:5vw;font-weight:bold;color:black">PACKAGE INCLUDES</v-card-text>
          <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%;font-size:.7vw;color:#707070; ">
            <v-list-item class="d-flex justify-center sjust" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw;">1 User License</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw;">SOWerk Profile</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw;">SOWerk Leads</v-list-item> 
         </v-list>
      </v-card>
      </v-row>

      <v-row style="width:100%;" class="d-flex justify-space-around my-6">
      <v-card outlined  class="upgrade2" style="border-radius:20px; width:90%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center mx-n1" style="width:102%;font-size:5.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:2%;font-weight:bold">UPGRADE 1</v-card-title>
        <v-card-title class="d-flex flex-column justify-center " style="font-size:8vw">SOWERK STARTER</v-card-title>
        <v-card-subtitle class="mt-4 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:12vw">$8.33<span class="ml-n14" style="font-size:5vw">/monthly</span></v-card-subtitle>
        <p class="mt-n4 d-flex justify-space-around align-baseline" style="color:#707070;" >Or $100.00 Per Year</p>
        <v-divider class="d-flex justify-center mt-4 mb-n2" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:5vw;font-weight:bold;color:black">PACKAGE INCLUDES</v-card-text>
          <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%;font-size:.7vw;color:#707070; ">
            <v-list-item class="d-flex justify-center sjust" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw;"><span class="mr-2" style="color:#a61c00">3</span> User License</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%; font-size:5vw;"><span class="mr-2" style="color:#a61c00">5</span> Business Connections</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw;"><span class="mr-2" style="color:#a61c00">$10</span> Per Additional Conntection(s)</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw;">SOWerk Profile</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw;">SOWerk Leads</v-list-item> 
         </v-list>
      </v-card>
      </v-row>

      <v-row style="width:100%;" class="d-flex justify-space-around my-6">
      <v-card outlined  class="upgrade2" style="border-radius:20px; width:90%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center mx-n1" style="width:102%;font-size:5.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:2%;font-weight:bold">UPGRADE 2</v-card-title>
        <v-card-title class="d-flex flex-column justify-center " style="font-size:8vw">SOWERK ADVANCED</v-card-title>
        <v-card-subtitle class="mt-4 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:12vw">$20.83<span class="ml-n14" style="font-size:5vw">/monthly</span></v-card-subtitle>
        <p class="mt-n4 d-flex justify-space-around align-baseline" style="color:#707070;" >Or $250.00 Per Year</p>
        <v-divider class="d-flex justify-center mt-4 mb-n2" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:5vw;font-weight:bold;color:black">PACKAGE INCLUDES</v-card-text>
          <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%;font-size:.7vw;color:#707070; ">
            <v-list-item class="d-flex justify-center sjust" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw;"><span class="mr-2" style="color:#a61c00">5</span> User License</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%; font-size:5vw;"><span class="mr-2" style="color:#a61c00">20</span> Business Connections</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw;"><span class="mr-2" style="color:#a61c00">$8.5</span> Per Additional Conntection(s)</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw;">SOWerk Profile</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw;">SOWerk Leads</v-list-item> 
         </v-list>
      </v-card>
      </v-row>
      <v-row style="width:100%;" class="d-flex justify-space-around my-6">
      <v-card outlined  class="upgrade2" style="border-radius:20px; width:90%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center mx-n1" style="width:102%;font-size:5.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:2%;font-weight:bold">UPGRADE 3</v-card-title>
        <v-card-title class="d-flex flex-column justify-center " style="font-size:8vw">SOWERK PRO</v-card-title>
        <v-card-subtitle class="mt-4 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:12vw">$41.67<span class="ml-n14" style="font-size:5vw">/monthly</span></v-card-subtitle>
        <p class="mt-n4 d-flex justify-space-around align-baseline" style="color:#707070;" >Or $500.00 Per Year</p>
        <v-divider class="d-flex justify-center mt-4 mb-n2" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:5vw;font-weight:bold;color:black">PACKAGE INCLUDES</v-card-text>
          <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%;font-size:.7vw;color:#707070; ">
            <v-list-item class="d-flex justify-center sjust" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw;"><span class="mr-2" style="color:#a61c00">10</span> User License</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%; font-size:5vw;"><span class="mr-2" style="color:#a61c00">50</span> Business Connections</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw;"><span class="mr-2" style="color:#a61c00">$5</span> Per Additional Conntection(s)</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw;">SOWerk Profile</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw;">SOWerk Leads</v-list-item> 
         </v-list>
      </v-card>
      </v-row>
      <v-row style="width:100%;" class="d-flex justify-space-around my-6">
      <v-card outlined  class="upgrade2" style="border-radius:20px; width:90%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center mx-n1" style="width:102%;font-size:5.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:2%;font-weight:bold">UPGRADE 4</v-card-title>
        <v-card-title class="d-flex flex-column justify-center " style="font-size:8vw">SOWERK PRO</v-card-title>
        <v-card-subtitle class="mt-4 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:12vw">$125.00<span class="ml-n10" style="font-size:5vw">/monthly</span></v-card-subtitle>
        <p class="mt-n4 d-flex justify-space-around align-baseline" style="color:#707070;" >Or $1500.00 Per Year</p>
        <v-divider class="d-flex justify-center mt-4 mb-n2" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:5vw;font-weight:bold;color:black">PACKAGE INCLUDES</v-card-text>
          <v-list class="d-flex flex-column justify-center mx-0"  style="margin-top:-4%;margin-bottom:2%;font-size:5vw;color:#707070; ">
            <v-list-item class="d-flex justify-center sjust" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw;"><span class="mr-2" style="color:#a61c00">15</span> User License</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw; "><span class="mr-2" style="color:#a61c00">250</span> Business Connections</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw;"><span class="mr-2" style="color:#a61c00">$3</span> Per Additional Conntection(s)</v-list-item> 
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw; ">SOWerk Profile</v-list-item>
            <v-list-item class="d-flex justify-center" style="margin-top:-4%;margin-bottom:-2%;font-size:5vw;">SOWerk Leads</v-list-item> 
         </v-list>
      </v-card>


      </v-row>
      <v-row style="width:90%;" class="d-flex flex-column justify-center" >

      <v-card outlined  class="upgrade5 my-6"  style="border-radius:20px; width:100%;border-color:#A61C00;border-width:5px;">
        <v-card-title class="d-flex flex-column justify-center mx-n1" style="width:102%;font-size:5.9vw;background-color:#A61c00;border-top-radius:20px;margin-top:-6px;color:white;height:10%;margin-bottom:-12%;font-weight:bold;">UPGRADE 5</v-card-title>
        <v-card-title class="d-flex flex-column justify-center mt-16" style="font-size:7.5vw;margin-top:;">SOWERK ENTERPRISE</v-card-title>
        <v-card-subtitle class="mt-2 d-flex justify-space-around align-baseline" style="color:#A61C00; font-size:7.8vw;font-weight:600">CUSTOM RATE</v-card-subtitle>
        <v-divider class="d-flex justify-center mt-4 mb-n2" style="width:90%;margin-left:5%;margin-bottom:20px"></v-divider>
          <v-card-text class="d-flex justify-center mt-0" style="font-size:4.5vw;color:black">Does you’re business require a special connection and pricing rate? At SOWerk, we are happy to work with you to make sure we develop a perfect plan based around your needs.</v-card-text>
      </v-card>
      </v-row>
      <v-row>
        <v-col cols="12" style=" " >
        <v-row style="width:100%; " class="d-flex justify-center my-3 mx-1">
        <v-btn  @click='$router.push("/register/provider")' style="width:150%;border-radius:20px;background-color:#a61c00; color:white; height:12vw;font-weight:600">GET STARTED NOW</v-btn>
        </v-row>
             
        </v-col>
        
      </v-row>
      
    </section>
    </div>
    <section style="background-color:#2b2b2b;  
    transform-origin: top left;
    transform: skewY(2deg);margin-bottom:-5%">
    <v-card v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs" height="auto" :width="$vuetify.breakpoint.mdAndUp ? '100%' : '10%'" class="py-16 my-12 d-flex justify-center" outlined style="border:none;background-color:#2b2b2b;" align="center">
    <v-container style="transform-origin: top left;
    transform: skewY(-2deg); ">
     <v-title style="color:white;font-weight:600;font-size:5rem;">SOWerk Connections</v-title>
           <v-row class="d-flex justify-space-around flex-wrap">
            
            <v-card height="auto" :width="$vuetify.breakpoint.mdAndUp ? '42%' : '42%'" class=" my-12 px-12" outlined style="border:none;background-color:#2b2b2b;color:white;height:110%;" align="left">
              <img src="" alt="">
              <h1 style="">What is a Connection?</h1>
              <p>
                  A connection is made when you apply for and have been accepted as an approved vendor.
              </p>
              <img src="" alt="">
              <h1>Where Can I Make A Connection?</h1>
              <p>
                  When a connection is made at the location and if a business has multiple locations you apply to, the amount of accepted locations increase your connection count.
              </p>
              <img src="" alt="">
              <h1>Why do Connections Matter to other Businesses?</h1>
              <p>
                  Your Aprroved vendor connection cound will be displayed as part of your profile and may be associated with approved vendor applications,
                  wear it proudly as this will tell others how many businesses trust you and your services.
              </p>
            </v-card>
            <v-card height="auto" :width="$vuetify.breakpoint.mdAndUp ? '42%' : '42%'" class="my-12 px-12" outlined style="border:none;background-color:#2b2b2b;color:white;" align="left">
              <img src="" alt="">
              <h1>How do I Manage My Connections</h1>
              <p>
                  You can manage your connections on your SOWerk dashboard.
              </p>
              <img src="" alt="">
              <h1>After Connecting, Whats Next?</h1>
              <p>
                  You can send messages with little to no limitations to connections, but most importantly, you are now available as an approved service provider to that business.
                  Moving forward, they can call on you when they are in need of your service.
              </p>
              <img src="" alt="">
              <h1>After Connecting, Am I Connected Forever?</h1>
              <p>
                  Businesses have control over your connection status unless you wish to remove yourself as an approved vendor in your dashboard, its a mutual conntection.
              </p>
            </v-card>
           </v-row>
              
           </v-container>
         </v-card>
         <v-card v-else height="auto" :width="$vuetify.breakpoint.xsAndUp ? '100%' : '100%'" class="py-16 my-12 d-flex justify-center" outlined style="border:none;background-color:#2b2b2b;" align="center">
            <v-container style="transform-origin: top left;
          transform: skewY(-2deg); margin-bottom:-20%;">             
            <v-title style="color:white;font-weight:600;font-size:3rem;">SOWerk Connections</v-title>
            <v-card height="auto" class="py-1 my-12 px-12" outlined style="border:none;background-color:#2b2b2b;color:white; width:100%;" align="center">
              <img src="" alt="">
              <h1>What is a Connection?</h1>
              <p>
                  A connection is made when you apply for and have been accepted as an approved vendor.
              </p>
              <img src="" alt="">
              <h1>Where Can I Make A Connection?</h1>
              <p>
                  When a connection is made at the location and if a business has multiple locations you apply to, the amount of accepted locations increase your connection count.
              </p>
              <img src="" alt="">
              <h1>Why do Connections Matter to other Businesses?</h1>
              <p>
                  Your Aprroved vendor connection cound will be displayed as part of your profile and may be associated with approved vendor applications,
                  wear it proudly as this will tell others how many businesses trust you and your services.
              </p>
              <img src="" alt="">
              <h1>How do I Manage My Connections</h1>
              <p>
                  You can manage your connections on your SOWerk dashboard.
              </p>
              <img src="" alt="">
              <h1>After Connecting, Whats Next?</h1>
              <p>
                  You can send messages with little to no limitations to connections, but most importantly, you are now available as an approved service provider to that business.
                  Moving forward, they can call on you when they are in need of your service.
              </p>
              <img src="" alt="">
              <h1>After Connecting, Am I Connected Forever?</h1>
              <p>
                  Businesses have control over your connection status unless you wish to remove yourself as an approved vendor in your dashboard, its a mutual conntection.
              </p>
            </v-card>

              
           </v-container>
         </v-card>
    </section>

<!--
    <OftenAskPF></OftenAskPF>
    <OftenAskSP></OftenAskSP/>
-->
  </div>
</template>

<script>

//import OftenAskPF from '../../components/landing/property-manager/OftenAskPF'
//import OftenAskSP from '../../components/landing/service-provider/OftenAskSP'

export default {
  layout: 'fullwidth',
  components: {
    //OftenAskPF,
    //OftenAskSP,
  },
}
</script>

<style scoped>
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
}
.device--mac >>> .v-image__image.v-image__image--cover {
  background-size: 170% !important;
}

.device--iphone {
  position: absolute;
  width: 75%;
  bottom: -20%;
  left: -25%;
}

.wrap-text {
  -webkit-line-clamp: unset !important;
  overflow: visible !important;
  text-overflow: unset !important;
  white-space: unset !important;
  line-height: 1.5rem;
}

/* .skew-top{
  position: relative;
  z-index: 30;
}

.skew-top:before{
  position: absolute;
  content: '';
  background:linear-gradient(180deg, rgba(166,28,0,1) 35%, rgba(83,14,0,1) 100%);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -20;
  transform-origin: top left;
  transform: skewY(-2deg);
} */

#aboutcontainer {
  width: 100%;
  padding: 0px !important;
}

.abouthero {
  width: 100%;
  height: 70vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://sowerk-images.s3.us-east-2.amazonaws.com/handshake.png');
  background-size: cover;
  object-fit: contain;
  /* background-size: 100%; */
  margin-top: -100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 5%;
}
.abouthero h1 {
  color: white;
  width: 50%;
  text-align: center;
  margin: 150px 0px 150px 0px;
  margin: 200px 0px 200px 0px;
  font-size: 55px;
}

.aboutdescription {
  background: #a61c00;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  color: white;
  padding-bottom: 100px;
  
}

.aboutdescription:before {
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
.aboutdescriptionflex {
  display: flex;
  width: 90%;
  justify-content: center;
  border-radius: 20px;
  margin: -50px 0px 100px 0px;
  z-index: 100;
}

.aboutdescriptionflex .aboutdescriptionimg {
  width: 40%;
  display: flex;
  margin-bottom: -300px;
}
.aboutdescriptionflex .aboutdescriptionimg .aboutdescriptionimg1 {
  width: 50%;
  height: 350px;
  z-index: 1;
  position: relative;
  top: 250px;
}
.aboutdescriptionflex .aboutdescriptionimg .aboutdescriptionimg2 {
  width: 150%;
  position: relative;
  left: -200px;
  top: -250px;
}
.aboutdescriptiontext {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-top: 35px;
}
.aboutdescriptionflex h1 {
  font-size: 35px;
  align-self: flex-start;
}
.aboutdescriptionflex p {
  font-size: 18px;
  align-self: flex-start;
}
.aboutdescription svg {
  width: 100%;
  height: 9vh;
  fill: #2b2b2b;
}
.aboutbuttoncontainer {
  display: flex;
  width: 100%;
}
.aboutdescriptionflex button {
  background: transparent;
  color: white;
  border: 1px solid white;
  width: 45%;
  padding: 10px 0px 10px 0px;
  font-size: 18px;
  border-radius: 20px;
  margin: 0px 2.5% 0px 2.5%;
}
@media (max-width: 1350px) {
  .abouthero{
    margin-bottom: -12.5%;
  }
  }

@media (max-width: 800px) {
  .abouthero{
    margin-bottom: -20%;
  }
  .abouthero h1 {
    font-size: 50px;
  }

  .aboutdescriptionflex
    .aboutdescriptionimg
    .aboutdescriptionimg2[data-v-75c9003b] {
    width: 200%;
    position: relative;
    left: -140px;
    top: -200px;
  }

  .aboutdescriptiontext[data-v-75c9003b] {
    width: 90%;
  }

  .aboutdescriptionflex h1[data-v-75c9003b] {
    width: 100%;
    text-align: center;
    font-size: 33px;
    margin: 15px 0px 12px 0px;
  }

  .aboutdescriptionflex p[data-v-75c9003b] {
    margin: 10px 0;
    width: 100%;
    text-align: center;
    line-height: 24px;
  }

  .aboutdescriptionflex[data-v-75c9003b] {
    margin: 0;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .aboutbuttoncontainer[data-v-75c9003b] {
    margin: 15px 0;
    justify-content: center;
  }

  .aboutdescriptionimg {
    width: 500px;
  }

  img.aboutdescriptionimg2 {
    object-fit: contain;
    width: 700px;
    height: 400px;
  }

  .aboutdescriptionflex button[data-v-75c9003b] {
    width: 100%;
    font-size: 16px;
    padding: 5px 10px;
  }
}

@media (max-width: 680px) {
    .abouthero{
    margin-bottom: -30%;
  }
  .abouthero h1 {
    font-size: 42px;
  }

  .aboutdescriptionflex
    .aboutdescriptionimg
    .aboutdescriptionimg2[data-v-75c9003b] {
    left: -110px;
  }

  .aboutdescriptiontext h1 {
    font-size: 35px;
  }

  .aboutdescriptiontext p {
    font-size: 16px;
  }

  .aboutdescriptionflex button[data-v-75c9003b] {
    font-size: 15px;
  }
}

@media (max-width: 580px) {
  .abouthero{
    margin-bottom: -30%;
  }
  .abouthero h1 {
    font-size: 38px;
  }

  .aboutdescriptionflex {
    width: 100%;
  }

  .aboutdescriptionflex .aboutdescriptionimg .aboutdescriptionimg2 {
    left: -110px;
  }

  .aboutdescriptiontext h1 {
    font-size: 28px;
  }
  .aboutdescriptiontext p {
    font-size: 16px;
  }

  .aboutdescriptionflex button {
    font-size: 13px;
  }
}
</style>
