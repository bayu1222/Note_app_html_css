document.getElementById('noteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var noteInput = document.getElementById('noteInput');
    var noteList = document.getElementById('noteList');
    
    if (noteInput.value !== '') {
        var noteText = noteInput.value;
        var noteItem = document.createElement('li');
        noteItem.innerText = noteText;
        noteList.appendChild(noteItem);
        noteInput.value = '';
    }
});
