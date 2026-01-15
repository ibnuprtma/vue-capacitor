<script setup>
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { home, person, film } from 'ionicons/icons';
</script>

<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      
      <ion-tab-bar slot="bottom" class="bg-netflix-dark border-t border-gray-900" style="--background: #141414; --color: #8c8c8c; --color-selected: #ffffff; border-top: 1px solid #333;">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="home" />
          <ion-label class="text-xs">Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="profile" href="/tabs/profile">
          <ion-icon :icon="person" />
          <ion-label class="text-xs">Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>
