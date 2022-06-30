// Code to show an hide the featured-speakers
document.getElementById('show-btn').onclick = function() {
    document.getElementById('hide-1').style.display='block';
    document.getElementById('hide-2').style.display='block';
    document.getElementById('hide-3').style.display='block';
    document.getElementById('show-btn').style.display='none';
    document.getElementById('hide-btn').style.display='block';
}

document.getElementById('hide-btn').onclick = function() {
    document.getElementById('hide-1').style.display='none';
    document.getElementById('hide-2').style.display='none';
    document.getElementById('hide-3').style.display='none';
    document.getElementById('hide-btn').style.display='none';
    document.getElementById('show-btn').style.display='block';
}
document.getElementById('hide-btn').style.display='none';