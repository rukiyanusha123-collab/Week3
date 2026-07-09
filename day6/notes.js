let heading = document.getElementById("head");

heading.style.fontFamily="cursive";
heading.style.color="purple";
heading.style.textAlign="center";



let paragraph=document.getElementsByClassName("para");

paragraph[0].style.color="darkgray";
paragraph[0].style.textAlign="center";



let noteInput=document.getElementById("noteInput");


noteInput.style.marginLeft="400px";
noteInput.style.paddingTop="15px";
noteInput.style.paddingBottom="15px";
noteInput.style.width="600px";
noteInput.style.border="3px solid purple";
noteInput.style.borderRadius="10px";
noteInput.style.fontFamily="cursive";



let button=document.getElementsByClassName("btn");


button[0].style.width="150px";
button[0].style.height="50px";
button[0].style.backgroundColor="skyblue";
button[0].style.borderRadius="8px";
button[0].style.marginLeft="20px";



let noteList=document.getElementById("noteList");



// local storage

let notes = JSON.parse(localStorage.getItem("notes")) || [];



displayNotes();



button[0].addEventListener("click",function(){


    let noteText = noteInput.value;


    if(noteText===""){

        alert("Enter a note");

        return;

    }


    notes.push(noteText);


    saveNotes();


    displayNotes();


    noteInput.value="";


});





function displayNotes(){


    noteList.innerHTML="";


    notes.forEach(function(note,index){



        let li=document.createElement("li");


        li.innerText=note;


        li.style.listStyle="none";
        li.style.marginTop="20px";
        li.style.marginLeft="400px";
        li.style.fontSize="20px";
        li.style.fontFamily="cursive";




        // Delete button

        let deleteBtn=document.createElement("button");

        deleteBtn.innerText="Delete";


        deleteBtn.style.marginLeft="20px";
        deleteBtn.style.width="100px";
        deleteBtn.style.height="35px";
        deleteBtn.style.backgroundColor="purple";
        deleteBtn.style.color="white";
        deleteBtn.style.border="none";
        deleteBtn.style.borderRadius="8px";



        deleteBtn.addEventListener("click",function(){


            notes.splice(index,1);


            saveNotes();


            displayNotes();


        });





        // Edit button


        let editBtn=document.createElement("button");


        editBtn.innerText="Edit";


        editBtn.style.marginLeft="10px";
        editBtn.style.width="100px";
        editBtn.style.height="35px";
        editBtn.style.backgroundColor="purple";
        editBtn.style.color="white";
        editBtn.style.border="none";
        editBtn.style.borderRadius="8px";



        editBtn.addEventListener("click",function(){


            let updatedNote=prompt(
                "Edit your note:",
                note
            );



            if(updatedNote!==null && updatedNote!==""){


                notes[index]=updatedNote;


                saveNotes();


                displayNotes();


            }


        });



        li.appendChild(deleteBtn);

        li.appendChild(editBtn);


        noteList.appendChild(li);



    });


}





function saveNotes(){


    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );


}