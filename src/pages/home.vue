<template>
    <div class="container">
        <main class="main">
            <!-- <h1>Ищем сотрудников</h1> -->
            <v-sidebar></v-sidebar>
            <section class="collegue-area">
                <div v-if="activeEmployee">
                    <h4>{{activeEmployee.name}}</h4>
                </div>
                <p v-else>Выберите сотрудника, чтобы посмотреть его профиль</p>
            </section>
        </main>
    </div>


</template>

<script setup>
  import vSidebar from '@/components/v-sidebar.vue';
  import { useEmployeesStore } from "../stores/employeesStore";
  import { ref } from "vue";

  const employeesStore = useEmployeesStore();
  let activeEmployee = ref(null);
  

  employeesStore.$subscribe((mutation, state) => {
    console.log('mutation: ', mutation);


    console.log('state: ', {...state});
    //Равносильно получению через геттер ниже!
    // activeEmployee = {...state.employees.find(e => e.id === state.activeId)}
    activeEmployee.value = {...employeesStore.getActiveEmployee};
    // employeesStore.setActiveEmployee();
    console.log('activeEmployee: ', activeEmployee);

    })
</script>


<style lang="scss">
    .main {
        display: flex;
        border: 1px solid var(--border-color);
        margin: 30px 0;
        border-radius: 10px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        -ms-border-radius: 10px;
        -o-border-radius: 10px;
    }
</style>

