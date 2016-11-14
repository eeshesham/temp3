//add,del,sort,check existance,search by any field, scroll bar,
// view image beside name, db

function sayHello()
{
    alert("Welcome Professor");
}


function add() {
    var t_ab = document.getElementById("address_book");
    //var nfnam = document.getElementById("nfnam");

    var nrow = t_ab.insertRow(t_ab.rows.length - 1);

    var ncell0 = nrow.insertCell(0);
    var ncell1 = nrow.insertCell(1);
    var ncell2 = nrow.insertCell(2);
    var ncell3 = nrow.insertCell(3);

    ncell1.innerHTML = document.getElementById("nfnam").value;
    ncell2.innerHTML = document.getElementById("nlnam").value;
    ncell3.innerHTML = document.getElementById("nemail").value;

}
