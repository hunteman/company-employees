import {defineStore} from 'pinia';

const url = "https://jsonplaceholder.typicode.com/users/";

// const defaultState = {
//     message: "начните поиск",
//     loader: false,
//     activeId: "",
//     employees: []
//   }

export const useEmployeesStore = defineStore('employeesStore', {
    state: () => ({ 
        message: "начните поиск",
        loader: false,
        activeId: "",
        employees: [],
        activeEmployee: null
     }),
    actions: {
        // getEmployees(searchString) {
        //     this.loader = true;
        //     fetch(url)
        //         .then(response => response.json())
        //         .then(data => {
        //             this.employees = data.filter(employee => employee.name.toLowerCase().includes(searchString.toLowerCase()));
        //             this.loader = false;
        //             if (!this.employees.length) {
        //                 throw "ничего не найдено";
        //             }
        //         })
        //         .catch(error => {
        //             console.log('error: ', error);
        //             this.message = "ничего не найдено";
        //         })
        // },
        async getEmployees(searchString) {
            this.loader = true;

            try {
                const responce = await fetch(url);
                const employeesData = await responce.json();
                this.employees = employeesData.filter(employee => employee.name.toLowerCase().includes(searchString.toLowerCase()));
                this.loader = false;
                if (!this.employees.length) {
                    throw "ничего не найдено";
                }
              } catch (error) {
                this.message = "ничего не найдено";
                return error;
              }
        },
        getEmployee(searchId) {
            this.loader = true;
            fetch(`${url}${searchId}`)
                .then(response => {
                    if (!response.ok) {
                        throw "ничего не найдено";
                    }
                    return response.json();
                })
                .then(data => {
                    this.employees = [data]
                    this.loader = false;
                })
                .catch(error => {
                    this.employees.length = 0;
                    this.loader = false;
                    this.message = error;
                    return;
                })
        },
        // setActiveEmployee() {
        //     this.activeEmployee = this.employees.find(emp => emp.id === this.activeId)
        // }
    },
    getters: {
        getActiveEmployee(state) {
            console.log('store state: ', state);
            return state.employees.find(emp => emp.id === this.activeId)
        }
    }
})