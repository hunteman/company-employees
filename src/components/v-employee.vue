<template>
    <li class="employee-item" @click="setActiveId(employee.id)">
        <div class="employee-image">
            <img src="../assets/img/default_image.jpg" alt="">
        </div>
        <div class="employee-content">
            <h4>{{employee.name}}</h4>
            <p v-show="employee.email">{{employee.email}}</p>
        </div>
    </li>
</template>

<script setup>
    import { useEmployeesStore } from "../stores/employeesStore";

    const props = defineProps({
        employee: {
            type: Object,
            required: true,
            default: () => {}
        }
    })

    const employeesStore = useEmployeesStore();

    const setActiveId = (id) => {
        // employeesStore.activeId = id;

        employeesStore.$patch({
            activeId: id,
        })
    }
</script>

<style lang="scss">
    .employee {
        &-item {
            display: flex;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            font-size: 14px;
            border-radius: 10px;
            cursor: pointer;
        }

        &-image {
            width: 30%;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        &-content {
            width: 70%;
            padding: 10px;

            p {
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
</style>