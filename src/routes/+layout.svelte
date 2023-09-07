
<script>
    import {onMount} from 'svelte'
    import {auth, db} from '../lib/firebase/firebase'
    import { doc, getDoc, setDoc } from 'firebase/firestore';
    import {authStore} from '../components/store/store'


    const nonAuthRoutes=['/','product']


    onMount (() => {
        console.log('Mounting') 

        const unsubcribe = auth.onAuthStateChanged(async user =>{
            const currentPath = window.location.pathname

            if (!user && !nonAuthRoutes.includes(currentPath)) {
            window.location.href='/';
            

            }
            if (user && currentPath==='/'){
                window.location.href='/Dashboard';
                return
            }
            if(!user){
                return;
            }

            let dataToSetToStore
            const docRef=doc(db,'users',user.uid)
            const docSnap= await getDoc(docRef)
            if (!docSnap.exists()){
                const userRef =doc(db,user,'user',user.uid);


                dataToSetToStore={
                    email:user.email,
                        todos:[],


                }


                await setDoc(
                    userRef,dataToSetToStore ,{merge:true});

            } else{
                const userData=docSnap.data()
                dataToSetToStore=userData;

            }
            authStore.update ((curr) => {
                return {
                    ...curr,
                    user,
                    data:dataToSetToStore,
                    loading :false,


                };
            });


        });
    });
</script>

<div class="mainContainer">
    <slot/>
</div>

<style>
.mainContainer{
    min-height:100vh;
    background: linear-gradient(to right,#000428,#000046);
    color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    
}

</style>
