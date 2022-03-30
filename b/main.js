'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "Jonatan",
    email: "jonatanmarsv@gmail.com",
    numero: "54992435656",
    cidade: "Passo Fundo"
}    

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

// CRUD

// CRUD - CREATE
const createClient = (client) => {
    const dbClient = getLocalStorage() 
    dbClient.push(client)
    setLocalStorage(dbClient)
}

// CRUD - READ
const readClient = () => getLocalStorage()

// CRUD - UPDATE
const updateClient = (client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

// CRUD - DELETE
const deleteCliente = (index) => {
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}

// INTERAÇÃO COM LAYOUT

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

const saveCliente = () => {
    if (isValidFields()) {
        console.log("cadastrando cliente")
    }
}

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveCliente)    
