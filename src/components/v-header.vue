<template>
    <header class="header">
        <div class="header-container">
            <router-link class="logo" to="/"><img src="../assets/img/logo.svg" alt=""></router-link>
            <router-link class="profile" to="/profile"><img src="../assets/img/profile.svg" alt=""></router-link>

        </div>
    </header>
</template>



<!-- <script>
  export default {
      name: "v-header",
  }
</script> -->

<style lang="scss" scoped>
    .header {
        width: 100%;
        box-shadow: 0 -1px 8px 0 rgba(0,0,0,0.1);
        padding: 10px 0;

        &-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 15px;

            @media screen and (min-width: 768px) {
                padding: 0 50px;
            }
        }

        .logo {
            display: flex;
            width: 50px;
        }
        .profile {
            display: flex;
            width: 34px;
            height: 34px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px;
            border: 1px solid var(--border-color);
            border-radius: 50%;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            -ms-border-radius: 50%;
            -o-border-radius: 50%;
        }
    }
</style>
