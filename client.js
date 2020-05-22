let cohorts = [
    {
        name: 'Ada',
        status: 'In Tier 2',
        count: 13,
    },
    {
        name: 'Babbage',
        status: 'In Tier 1',
        count: 10,
    },
]

function clearTable () {
    $("table tbody").empty();
}

function setUp() {
    clearTable();

    //initialize the table with our cohorts!
    for (let cohort of cohorts) {
        let rowElement = $("<tr></tr>");
        // cohort.name
        // cohort.status
        // cohort.count
        rowElement.append(`<td>${cohort.name}</td>`);
        rowElement.append(`<td>${cohort.count}</td>`);
        rowElement.append(`<td>${cohort.status}</td>`);
        rowElement.append(`<td><button class="delete-button"> Delete Row </button></td>`);


        $('table tbody').append(rowElement);
    }

    $('.delete-button').on('click', function (event) {
       // clear only the row that the click button is in!
       // ways to tell:
       // 'this'
       // event.target
       // const this = event.target
       // this is the buttont that fired this event
       const element = event.target;
       // $(element).css('font-weight', 'bold');
       $(element).parent().parent().remove(); // or .hide() / .fade()
       // $(element).parents('tr').remove(); // selects all matching elements up the DOM tree
       // $(element).closest('tr').remove(); // selects the first element that matches the selector up from the DOM tree

    });
}






$(document).ready(setUp);