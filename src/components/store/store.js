import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Writable, writable } from "svelte/store";
import { Auth } from "firebase/auth";
import { auth } from "../../lib/firebase/firebase";

export const authStore = writable({
    user: null,
    loading:true,
    data:{}
})

export const authHandlers={
    signup:async (email,pass) =>{
        await createUserWithEmailAndPassword(auth,email,pass)
    },
    login:async (email,pass) =>{
        await signInWithEmailAndPassword(auth,email,pass)
    },
}