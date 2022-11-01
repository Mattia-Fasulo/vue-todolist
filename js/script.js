"use strict";

/**


Descrizione:
Rifare l'esercizio della to do list argomento dell to-do list a piacere :faccia_che_festeggia:.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)



 */

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            readOnly: true,
            error: false,
            newTaskText: '',
            textMod: '',
            newTask: {
                text: '',
                done: false,
                readOnly: true,
                prefer: false,
            },
            tasks: [],
        }
    },
    methods: {
        addNewTask() {
            if (this.newTaskText.length >= 4) {
                this.newTask.text = this.newTaskText;
                //  console.log(this.newTask)
                let newTaskCopy = { ...this.newTask };
                this.tasks.unshift(newTaskCopy);
                this.newTaskText = '';
                this.error = false;
                // console.log(this.tasks);
            }
            else {
                this.error = true;
            }
        },
        isDone(i) {
            this.tasks[i].done = !this.tasks[i].done;
            console.log(this.tasks[i].done)
        },
        deleteTask(i) {
            this.tasks.splice(i, 1);
        },
        modifyTask(i) {
            this.tasks[i].readOnly = false;
            this.tasks[i].done = false;
            this.tasks[i].text = '';
        },
        enterModify(i) {
            this.tasks[i].text = this.textMod        
            this.textMod = '';
            this.tasks[i].readOnly = true;
        },
        addPrefer(i) {
            let newCopy = { ...this.tasks[i] };
            this.tasks.splice(this.tasks.indexOf(this.tasks[i]), 1);
            newCopy.prefer = true;
            this.tasks.unshift(newCopy);
        }

    },
    computed: {

    },
    mounted() {

    }
}).mount('#app')

