module.exports = {
    SECRET_JWT: process.env.SECRET_KEY || "DEVKEY",
    FIREBASE_ADMIN_CONFIG: function () {
        return JSON.parse(process.env.FIREBASE_ADMIN_CONFIG)
    },
    PORT: process.env.PORT || 3000,
    FIREBASE_FRONT_CONFIG: process.env.FIREBASE_FRONT_CONFIG ? JSON.parse(process.env.FIREBASE_FRONT_CONFIG) : {
        apiKey: "AIzaSyCq1D2qapuqgiHhuRzgkymRt7eZy0W_-Fg",
        authDomain: "cocinandoapp-a5abb.firebaseapp.com",
        databaseURL: "https://cocinandoapp-a5abb.firebaseio.com",
        projectId: "cocinandoapp-a5abb",
        storageBucket: "cocinandoapp-a5abb.appspot.com",
        messagingSenderId: "101142323539",
        appId: "1:101142323539:web:02719f8d0f93d9d85dc1a6",
        measurementId: "G-BR0DG9HZK9"
    }
}