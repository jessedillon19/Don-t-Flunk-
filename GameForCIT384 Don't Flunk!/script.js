const student = document.getElementById('student');
const paper = document.getElementById('paper');
const score = document.getElementById('score');

function jump(){
    student.classList.add('jump-animation');
    setTimeout(() =>{
        student.classList.remove('jump-animation');
    }, 500);
}

document.addEventListener('keypress', () =>{
    if (!student.classList.contains('jump-animation')) {
    jump();
    }
})

setInterval(() => {
    //score.innerText++;
    const studentTop = parseInt(window.getComputedStyle(student)
        .getPropertyValue('top'));
    const paperLeft = parseInt(window.getComputedStyle(paper)
        .getPropertyValue('left'));
    
    if (paperLeft < 0) {
            paper.style.display = 'none';
    }

    if (paperLeft < 1) {
        score.innerText ++;
    }
    else {
            paper.style.display = ''
    }

    if (paperLeft < 50 && paperLeft > 0 && studentTop > 150) {
        if(score.innerText <60){alert("Expelled: You got a score of: " + score.innerText + "\n\nPlay again?");
        }
        if(score.innerText >=60 && score.innerText < 70){alert("Grade D: You got a score of: " + score.innerText + "\n\nPlay again?");
        }
        if(score.innerText >=70 && score.innerText < 80){alert("Grade C: You got a score of: " + score.innerText + "\n\nPlay again?");
        }
        if(score.innerText >=80 && score.innerText < 90){alert("Grade B: You got a score of: " + score.innerText + "\n\nPlay again?");
        }
        if(score.innerText >=65){alert("Grade A: You got a score of: " + score.innerText + "\n\nPlay again?");
        }
        location.reload();
    }


}, 50);