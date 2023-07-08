let addNote = document.querySelector(".addNoteBtn");
let noteDivOuter = document.querySelector(".addNoteDivOuter");


// ====================================== Showing Notes   =============================================

function showNotes() {
    noteDivOuter.style.display = "none";
    let noteContainer = document.querySelector(".allNoteBox");
    let allNotes;
    let notes = localStorage.getItem("note");


    if (allNotes === null) {
        allNotes = [];
    } else {
        allNotes = JSON.parse(notes);
    }

    noteContainer.innerHTML = "";

    allNotes.forEach((note, index) => {
        noteToBeShown = `<div class="notes">
                                <div>
                                    <p class="title">${note.title}</p>
                                    <p class="desc">${note.desc}</p>
                                </div>
                                <div>
                                    <span class="delete" onclick="deleteNote(${index})"><ion-icon name="trash-outline"></ion-icon></span>
                                    <span class="edit" onclick="editNote(${index})"><ion-icon name="create-outline"></ion-icon></span>
                                </div>
                            </div>`;

        noteContainer.innerHTML += noteToBeShown;
    });
}
// ============================================================================================================




// ================================== ADDING NEW NOTE USING ADD BUTTON  =======================================


let saveBtn = document.querySelector(".saveBtn");
saveBtn.addEventListener("click", () => {

    let title = document.querySelector(".inputTitle");
    let desc = document.querySelector(".inputDesc");

    let allNotes;
    let notes = localStorage.getItem("note");

    if (allNotes === null) {
        allNotes = [];
    } else {
        allNotes = JSON.parse(notes);
    }

    let newObj =
    {
        title: title.value,
        desc: desc.value
    };
    allNotes.push(newObj);

    localStorage.setItem("note", JSON.stringify(allNotes));
    title.value = "";
    desc.value = "";
    noteDivOuter.style.display = "none";
    showNotes();

});

let closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", () => {
    noteDivOuter.style.display = "none";
})

addNote.addEventListener("click", () => {
    noteDivOuter.style.display = "flex";
    saveBtn.style.display = "inline-block";
    updateBtn.style.display = "none";
    document.querySelector(".inputTitle").value = "";
    document.querySelector(".inputDesc").value = "";
});

// ===============================================================================================




// =================================== Function to Delete Notes ==================================
function deleteNote(index) {
    let notes = localStorage.getItem("note");
    let allNotes = JSON.parse(notes);
    allNotes.splice(index, 1);
    localStorage.setItem("note", JSON.stringify(allNotes));
    showNotes();
}
// ===============================================================================================




// ================================== Function to Edit Notes ====================================
function editNote(index) {
    noteDivOuter.style.display = "flex";
    noteDivTitle = document.querySelector(".inputTitle");
    noteDivDesc = document.querySelector(".inputDesc");
    let updateBtn = document.querySelector("#updateBtn");
    updateBtn.style.display = "inline-block";
    let saveBtn = document.querySelector(".saveBtn");
    saveBtn.style.display = "none";
    let allNotes;
    let notes = localStorage.getItem("note");
    allNotes = JSON.parse(notes);
    noteDivTitle.value = allNotes[index].title;
    noteDivDesc.value = allNotes[index].desc;

    updateBtn.addEventListener("click",()=>{
        allNotes[index].title = noteDivTitle.value;
        allNotes[index].desc = noteDivDesc.value;
        console.log(allNotes);
        localStorage.setItem("note",JSON.stringify(allNotes));
        showNotes();
    })
}
// ================================================================================================



// ================================== Function to Search Notes ====================================

let sBox = document.querySelector(".navSearchBox");
sBox.addEventListener("input", () => {
    let inputValue = sBox.value.toLowerCase();
    let allNoteArray = document.querySelectorAll(".notes");
    allNoteArray.forEach(elm=>{
        let value = elm.getElementsByTagName('p')[0].innerText;
        if(value.toLowerCase().includes(inputValue)){
            elm.style.display = "inline-block";
        }else{
            elm.style.display = "none";
        }
    })
});

// =================================================================================================




// ================================== Showing Notes in the Beginning =================================
showNotes();
// ===================================================================================================


















































// ====================== Random Dump of Data ==================================

// let data = [
//     { title: "First", desc: "This is first" },
//     { title: "second", desc: "This is second" },
//     { title: "third", desc: "This is third" },
//     { title: "four", desc: "This is four" },
// ];

// localStorage.setItem("note", JSON.stringify(data));

// ================================================================================