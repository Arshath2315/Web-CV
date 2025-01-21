function Hobby() {
    var martinDiv = document.getElementById('Hobbies');
    var Coding = document.getElementById('program');
    var Title1 = document.getElementById('title1');

    if (martinDiv.style.display === 'none') {
        martinDiv.style.display = 'block'; 
        Coding.style.display = 'block';
        Title1.style.display = 'block';

    } else {
        martinDiv.style.display = 'none'; 
        Coding.style.display = 'none';
        Title1.style.display = 'none';


    }
};

function Cook() {
    var variable1 = document.getElementById('cooking');
    var variable2 = document.getElementById('co');
    var variable3 = document.getElementById('title2');

    if (variable1.style.display === 'none') {
        variable1.style.display = 'block';
        variable2.style.display = 'block';
        variable3.style.display = 'block';
    }
    else {
        variable1.style.display = 'none';
        variable2.style.display = 'none';
        variable3.style.display = 'none';
    }
};

function Movie() {
    var variable4 = document.getElementById('films');
    var variable5 = document.getElementById('title3');
    var variable6 = document.getElementById('movie');

    if (variable4.style.display === 'none') {
        variable4.style.display = 'block';
        variable5.style.display = 'block';
        variable6.style.display = 'block';
    }
    else {
        variable4.style.display = 'none';
        variable5.style.display = 'none';
        variable6.style.display = 'none';
    }
}