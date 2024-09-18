import './node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css'
import { fagyik } from './fagyik'


document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('InputPassword').addEventListener('input', (e) => {
    if (e.currentTarget.value.length < 8) {
      e.currentTarget.style.color = 'red'
    }
    else {
      e.currentTarget.style.color = 'green'
    }
    document.getElementById('PasswordCounter').innerHTML = e.currentTarget.value.length + "/8"
  })

  document.getElementById('InputName').addEventListener('input', (e) => {
    if (e.currentTarget.value.split(" ").join("") == "") {
      document.getElementById('NameError').innerHTML = "Nem megfelelő a név!"
    }
    else {
      document.getElementById('NameError').innerHTML = " "
    }
  })

  document.getElementById('InputFagyi').addEventListener('change', (e) => {
    for (let fagyi of fagyik) {
      if (e.currentTarget.value === fagyi.nev) {
        e.currentTarget.style.backgroundColor = 'lightgreen'
        break
      }
      else {
        e.currentTarget.style.backgroundColor = 'yellow'
      }
    }
  })

  document.getElementById('FagyiForm').addEventListener('submit', (e) => {
    e.preventDefault();
  })

  document.getElementById('button').addEventListener('click',(e)=>{
    const fagyikeres = document.getElementById('InputFagyi')
    for (let fagyi of fagyik) {
      if (fagyikeres.value === fagyi.nev) {
        document.getElementById('FagyiStatus').innerHTML = "Fagylalt státusza: Elérhető<br>Ár:" + fagyi.ar;
        break
      }
      else {
        document.getElementById('FagyiStatus').innerHTML = "Fagylalt státusza: Beszerzés folyamatban"
      }
    }
  })
})



