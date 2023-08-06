let url = 'https://random-words5.p.rapidapi.com/getRandom';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '280f1851d5msh9732617d27b48cdp10228bjsn6644690b6716',
		'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
	}
};
async function get_word(){
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    document.getElementById('box1_text').innerHTML = result
    console.log(result);
    return result
  } catch (error) {
    console.error(error);
  }

}

window.onload = (event) => {
  document.getElementById('box1_text').innerHTML = get_word()
};

function input_word(){
  let comp_word = document.getElementById('box1_text').innerHTML
  let curr_word = document.getElementById('box2_text').value
  // console.log(curr_word)
  // console.log(curr_word.length)
  
  if(curr_word.charAt(0) == comp_word.charAt(comp_word.length-1)){
    url = `https://random-words5.p.rapidapi.com/getRandom?beginsWith=${curr_word.charAt(curr_word.length-1)}`;
    document.getElementById('box1_text').innerHTML = get_word()
  }else{
    document.getElementById('box1_text').innerHTML = "YOU LOST AHHAHAH!!"
    document.getElementById('box2_text').disabled = "true"
  }

  // document.getElementById('box2_text').value = "MAMAMMAMM"
}

window.addEventListener('keydown', (event) => {
  switch(event.key){
    case 'Enter':
      input_word()
      document.getElementById('box2_text').value = ""
      console.log(document.getElementById('box2_text').value.length)
      break
    case 'Control':
      input_word()
      document.getElementById('box2_text').value = ""
      console.log(document.getElementById('box2_text').value.length)
      break
  }

})

// async function getDict(){

//   if (typeof(Storage) !== "undefined") {
//     // document.getElementById("eng").innerHTML = localStorage.getItem("text");
//     //console.log(localStorage.getItem("translatedWord").length)
//     for(i=0; i < kr_words.length; i++){
//       document.getElementById("kr").innerHTML = kr_words[i] + '---' + eng_words[i];
//       console.log(kr_words[i] + '------' + eng_words[i])
//     }
//     // document.getElementById("kr").innerHTML = localStorage.getItem("translatedWord") + "-" + document.getElementById("text").value;
//       // document.getElementById("text").innerHTML = localStorage.getItem("translatedWord");
//     } else {


// if(curr_word.charAt(curr_word.length-1) == "a"){
//   console.log("POG")
// }else{
//   console.log("Not POG")
// }





//       document.getElementById("translatedtext").innerHTML = "Sorry, your browser does not support Web Storage...";
//     }
//     document.getElementById("kr").style.display = 'block';

//    for(j = 0; j < kr_words.length; j++){
//     console.log(kr_words[j] + '----' + eng_words[j] + ' ' +j)
//    }
  
// }



// async function translateSomething(args){

// }






