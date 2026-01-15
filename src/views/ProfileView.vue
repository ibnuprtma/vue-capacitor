<script setup>
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonAvatar, IonItem, IonLabel } from '@ionic/vue';

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = async () => {
  await authStore.logout();
  router.replace('/login');
};
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content color="dark" class="ion-padding">
       <div class="flex flex-col items-center mt-10 space-y-4">
          <ion-avatar class="w-24 h-24">
             <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="Avatar" />
          </ion-avatar>
          <h2 class="text-2xl font-bold text-white">{{ authStore.user?.username || 'Guest' }}</h2>
          <p class="text-gray-400">Role: {{ authStore.user?.role || 'User' }}</p>
       </div>

       <div class="mt-10 space-y-4">
          <ion-item color="dark" lines="full">
             <ion-label>Account Settings</ion-label>
          </ion-item>
          <ion-item color="dark" lines="full">
             <ion-label>App Settings</ion-label>
          </ion-item>
          <ion-item color="dark" lines="none">
             <ion-label>Help & Support</ion-label>
          </ion-item>
       </div>

       <div class="mt-12 px-4">
         <ion-button expand="block" color="danger" @click="handleLogout">
            Logout
         </ion-button>
       </div>
    </ion-content>
  </ion-page>
</template>
