// inputs_list = document.getElementsByTagName('input')
// labels_list = document.getElementsByTagName('label')

function submitInput() {
  panel.innerText = ''
  inputs_list = document.getElementsByTagName('input')
  labels_list = document.getElementsByTagName('label')

  sel = document.getElementById('age')
  for (i in inputs_list) {
    if (inputs_list[i].value == '' && inputs_list[i].id != undefined) {
      panel.append('Введите значение для поля ',labels_list[i].innerHTML)
      panel.append('\n')
    }
  }

  if (sel.value == 'Укажите возраст') {
    panel.append('Укажите значение поля \"возраст\"')
    panel.append('\n')
  }
  console.log('input', inputs_list[i].value)
}


function addInput(){
  panel = document.getElementById('bottomPanel')
  input_text = document.getElementById("input_text")
  panel.append(input_text.value + '\n')
  input_text.value = ''
}


function clearInput(){
  inputs_list = document.getElementsByTagName('input')
  for (i in inputs_list) {
    inputs_list[i].value = ''
  }

  panel = document.getElementById('bottomPanel')
  panel.innerText = 'Содержимое удалено'
}
