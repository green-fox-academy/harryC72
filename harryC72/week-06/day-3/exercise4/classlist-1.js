

      // the fourth p has a 'dolphin' class, replace apple's content with 'pear'

      // the first p has an 'apple' class, replace cat's content with 'dog'

      //  apple red by adding a .red class

      //  balloon less balloon-like (change its shape)

document.getElementsByTagName('p')[3].classList.add('dolphin');
document.getElementsByClassName('apple')[0].innerHTML = 'pear';
document.getElementsByTagName('p')[0].classList.add('apple');
document.getElementsByClassName('cat')[0].innerHTML = 'dog';
document.getElementsByClassName('apple')[0].classList.add('red');
document.getElementsByTagName('p')[1].style.borderRadius = '200%';
document.getElementsByTagName('p')[1].style.width = '20%';


