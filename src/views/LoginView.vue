<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, 
  IonItem, IonLabel, IonInput, IonButton, IonIcon, IonToast 
} from '@ionic/vue';
import { logInOutline, fingerPrintOutline } from 'ionicons/icons';

const username = ref('');
const password = ref('');
const authStore = useAuthStore();
const router = useRouter();
const showToast = ref(false);
const toastMessage = ref('');

const handleLogin = async () => {
  if (!username.value || !password.value) {
    toastMessage.value = 'Please enter username and password';
    showToast.value = true;
    return;
  }
  
  const success = await authStore.login(username.value, password.value);
  if (success) {
    router.replace('/tabs/home');
  } else {
    toastMessage.value = 'Invalid credentials';
    showToast.value = true;
  }
};

const handleBiometric = async () => {
   // Placeholder for biometric logic
   toastMessage.value = 'Biometric feature coming soon (requires plugin)';
   showToast.value = true;
};
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" color="dark">
      <div class="flex flex-col h-full justify-center max-w-md mx-auto space-y-6">
        <div class="text-center mb-8">
          <h1 class="text-netflix-red text-4xl font-bold uppercase tracking-tighter">StartFlix</h1>
          <p class="text-gray-400 mt-2">Sign in to continue</p>
        </div>

        <div class="space-y-4">
          <ion-item class="rounded-lg bg-gray-800 text-white" lines="none">
            <ion-label position="stacked" color="medium">Username / Email</ion-label>
            <ion-input v-model="username" type="text" placeholder="admin"></ion-input>
          </ion-item>

          <ion-item class="rounded-lg bg-gray-800 text-white" lines="none">
            <ion-label position="stacked" color="medium">Password</ion-label>
            <ion-input v-model="password" type="password" placeholder="1234"></ion-input>
          </ion-item>
        </div>

        <ion-button expand="block" color="danger" @click="handleLogin" class="h-12 font-bold">
          <ion-icon slot="start" :icon="logInOutline"></ion-icon>
          Sign In
        </ion-button>

        <ion-button expand="block" fill="outline" color="light" @click="handleBiometric">
          <ion-icon slot="start" :icon="fingerPrintOutline"></ion-icon>
          Biometric Login
        </ion-button>
        
        <div class="text-center text-xs text-gray-500 mt-4">
           Use <b>admin</b> / <b>1234</b> for demo.
        </div>
      </div>

      <ion-toast
        :is-open="showToast"
        :message="toastMessage"
        :duration="2000"
        @didDismiss="showToast = false"
        color="danger"
      ></ion-toast>
    </ion-content>
  </ion-page>
</template>
