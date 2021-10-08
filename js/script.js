const num = 9;
const startGame = confirm ('Пограем?');

if (startGame === true) {
    const userNum = +prompt ('Отлично, угадай какое число я загадал. Введи целое число от 0 до 10.');
        if (userNum === num) {
            alert ('Вау, у тебя получилось!');
        } else if (userNum !== num && !isNaN(userNum)) {
            alert ('Не расстраивайся, в следующий раз повезет.');
        } else if (isNaN(userNum)) {
            alert ('Видимо у нас с тобой разные представления о числах, соберись и попробуй еще раз.');
        } 
} else {
    alert ('Не особо то уж и хотелось.');
}