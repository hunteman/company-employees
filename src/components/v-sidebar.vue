<template>
    <aside class="sidebar">
        <h3>Поиск сотрудников</h3>
        <input 
        class="input" 
        type="text" 
        name="name" 
        id="name" 
        placeholder="Имя или ID" 
        @input="searchUserHandler()"
        v-model="searchUser">
        <h3>Результаты</h3>
        <v-preloader v-if="employeesStore.loader"></v-preloader>
        <ul v-if="employeesStore.employees && employeesStore.employees.length > 0">
            <v-employee v-for="employee in employeesStore.employees"
            :employee="employee"
            :key="employee.id"></v-employee>
        </ul>
        <p v-else>{{employeesStore.message}}</p>
    </aside>
</template>

<script setup>
    import vPreloader from './v-preloader.vue';
    import vEmployee from './v-employee.vue';
    import { useEmployeesStore } from "../stores/employeesStore";
    import { ref } from "vue";

    const employeesStore = useEmployeesStore();
    const searchUser = ref("");

    function searchUserHandler() {
        const searchValue = searchUser.value;

        if(searchValue === "") {
            employeesStore.$reset();
            return;
        }

        const isUserId = (/^[0-9]+$/).test(searchValue);
        isUserId ? employeesStore.getEmployee(searchValue) : employeesStore.getEmployees(searchValue);
    }
</script>


<style lang="scss">
    .sidebar {
        width: 100%;
        max-width: 300px;
        height: 100%;
        border-right: 1px solid var(--border-color);
        padding: 20px;
    }
</style>
