import {firebaseAuth, googleProvider} from './firebase'

class AuthService {
    loginGoogle() {
        const provider = googleProvider;
        return firebaseAuth.signInWithPopup(provider)
    }
    loginGuest() {
        return firebaseAuth.signInAnonymously()
    }

    authChange(userChange) {
        firebaseAuth.onAuthStateChanged(user => {
            userChange(user);
        })
    }

    logout() {
        firebaseAuth.signOut();
    }
}

export default AuthService;