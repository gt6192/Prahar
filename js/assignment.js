//Notification serial key count
var note_sr = 0;

//Notification data
var note_store = {};

//change notification count on notification button
function gt_notification_count()
{
    document.getElementById("notification-button-count").innerHTML = Object.keys(note_store).length;
}

//store notification
function gt_store_note(a, b)
{
    note_store[note_sr] = [a, b];
    note_sr += 1;
    return note_sr - 1;
}

//Add new notification
function gt_add_notification(nHead, nBody)
{
    //store notification
    var key = gt_store_note(nHead, nBody);

    //notification container
    var cont = document.getElementById("gt-cont");

    //create single notification
    var single_note = document.createElement('div');
    single_note.setAttribute("class", "single-note");
    single_note.setAttribute("id", key);

    //create notification cross
    var cross = document.createElement('i');
    cross.innerHTML = "x";
    cross.addEventListener('click', function(){
        delete note_store[key];
        cont.removeChild(single_note);
        gt_notification_count();
    });

    //create notification head
    var head = document.createElement('p');
    head.innerHTML = note_store[key][0];

    //create notification body
    var body = document.createElement('span');
    body.innerHTML = note_store[key][1];

    //append cross, head, body to single notification
    single_note.appendChild(cross);
    single_note.appendChild(head);
    single_note.appendChild(body);
    
    //prepend single notification to notification container
    cont.prepend(single_note);

    //change notification count
    gt_notification_count();
}