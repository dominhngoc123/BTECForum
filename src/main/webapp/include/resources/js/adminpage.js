/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

jQuery(function ($) {
    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);
        if (
                $(this)
                .parent()
                .hasClass("active")
                ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                    .parent()
                    .removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this)
                    .next(".sidebar-submenu")
                    .slideDown(200);
            $(this)
                    .parent()
                    .addClass("active");
        }
    });

    $("#close-sidebar").click(function () {
        $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
        $(".page-wrapper").addClass("toggled");
    });

});
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("ddj2");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
     no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
         first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
             one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
             based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
             and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
             set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
function searchData() {
    var value = $("#myInput2").val().toLowerCase();
    $("#myTable2 tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
}
function alertAdminBlocUser(accountEmail)
{
    return confirm("Do you want to block user with email:" + accountEmail);
}
;
function alertAdminUnblocUser(accountEmail)
{
    return confirm("Do you want to unblock user with email:" + accountEmail);
}
;
function loadTopic()
{
    $.ajax({
        type: "GET",
        url: "adminLoadTopicData",
        success: function (itr) {
            var tmpStr = "<div class='tab-pane' id='listTopic' role='tabpanel' aria-labelledby='manageTopic'>";
            tmpStr += "<h3 style='text-align: center;'>Manage topic</h3>";
            tmpStr += "<input class='form-control' id='myInput2' type='text' placeholder='Type something to search..' label='searchbar' onkeyup='searchData();'>";
            tmpStr += "<div style='text-align: center;' id='msg'>";
            tmpStr += "</div>";
            tmpStr += "<div class='scroll-table'>";
            tmpStr += "<table class='table table-hover table-responsive-sm fixed_header table-borderless table-fixed mb-0' id='ddj2' cellspacing='0' width='100%'>";
            tmpStr += "<thead class='thead-light fixed_thead'>";
            tmpStr += "<tr>";
            tmpStr += "<th onclick='sortTable(0)'>Topic name</th>";
            tmpStr += "<th onclick='sortTable(1)'>Topic description</th>";
            tmpStr += "<th onclick='sortTable(2)'>Added date</th>";
            tmpStr += "<th colspan='3' style='text-align: center; width: 360px;'>Action</th>";
            tmpStr += "</tr>";
            tmpStr += "</thead>";
            tmpStr += "<tbody id='myTable2'>";
            $.each(itr["listTopic"], function () {
                tmpStr += "<tr class='clickable-row' data-href='#' style='cursor: pointer;'>";
                tmpStr += "<td>" + this['topicName'] + "</td>";
                tmpStr += "<td>" + this['topicDescription'] + "</td>";
                tmpStr += "<td>" + this['dateAdded'] + "</td>";
                tmpStr += "<td style='width: 120px;'><button class='btn btn-success'>Detail</button></td>";
                tmpStr += "<td style='width: 120px;'><button class='btn btn-primary'>Update</button></td>";
                tmpStr += "<td style='width: 120px;'><button value='" + this['topicID'] + "' class='btn btn-danger deleteTopicBtn'>Delete</button></td>";
                tmpStr += "</tr>";
            });
            tmpStr += "</tbody>";
            tmpStr += "</table>";
            tmpStr += "</div>";
            tmpStr += "<div style='text-align: center;'>";
            tmpStr += "<a class='btn btn-primary' data-toggle='modal' data-target='#modal_add'>Add new</a>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            $("#showTable").html(tmpStr);
            tmpStr = "";
            tmpStr += "<div class='modal-dialog modal-lg' role='document'>";
            tmpStr += "<div class='modal-content'>";
            tmpStr += "<form id='addTopicForm' onsubmit='addTopic();' method='POST' return false>";
            tmpStr += "<div class='modal-header'>";
            tmpStr += "<h3 class='modal-title text-info' id='exampleModalLongTitle'>Add New Topic</h3>";
            tmpStr += "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>";
            tmpStr += "<span aria-hidden='true'>&times;</span>";
            tmpStr += "</button>";
            tmpStr += "</div>";
            tmpStr += "<div class='modal-body'>";
            tmpStr += "<div class='container-fluid'>";
            tmpStr += "<div class='row'>";
            tmpStr += "<div class='col-12'>";
            tmpStr += "<div class='input-group mb-3'>";
            tmpStr += "<div class='input-group-prepend'>";
            tmpStr += "<span class='input-group-text' id='basic-addon1'>Name</span>";
            tmpStr += "</div>";
            tmpStr += "<input type='text' class='form-control' name='topicName' id='topicName' aria-label='Username' aria-describedby='basic-addon1' required>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "<div class='row'>";
            tmpStr += "<div class='col-12'>";
            tmpStr += "<div class='input-group'>";
            tmpStr += "<div class='input-group-prepend'>";
            tmpStr += "<span class='input-group-text'>Description</span>";
            tmpStr += "</div>";
            tmpStr += "<textarea class='form-control' name='topicDescription' id='topicDescription' aria-label='With textarea' style='text-rendering: auto;' required></textarea>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "<div class='modal-footer'>";
            tmpStr += "<input type='button' class='btn btn-secondary btn-jump' data-dismiss='modal' value='Close'>";
            tmpStr += "<input type='submit' class='btn btn-primary btn-jump' id='submitForm' value='Add'>";
            tmpStr += "</div>";
            tmpStr += "</form>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            $("#modal_add").html(tmpStr);
        }
    });
}
function loadCategory()
{
    $.ajax({
        type: "GET",
        url: "adminLoadCategoryData",
        success: function (itr) {
            var tmpStr = "<div class='tab-pane' id='listCategory' role='tabpanel' aria-labelledby='manageTopic'>";
            tmpStr += "<h3 style='text-align: center;'>Manage category</h3>";
            tmpStr += "<input class='form-control' id='myInput2' type='text' placeholder='Type something to search..' label='searchbar' onkeyup='searchData();'>";
            tmpStr += "<div style='text-align: center;' id='msg'>";
            tmpStr += "</div>";
            tmpStr += "<div class='scroll-table'>";
            tmpStr += "<table class='table table-hover table-responsive-sm fixed_header table-borderless table-fixed mb-0' id='ddj2' cellspacing='0' width='100%'>";
            tmpStr += "<thead class='thead-light fixed_thead'>";
            tmpStr += "<tr>";
            tmpStr += "<th onclick='sortTable(0)'>Category name</th>";
            tmpStr += "<th onclick='sortTable(1)'>Category description</th>";
            tmpStr += "<th onclick='sortTable(2)'>Topic</th>";
            tmpStr += "<th onclick='sortTable(3)'>Responsible by</th>";
            tmpStr += "<th onclick='sortTable(4)'>Added date</th>";
            tmpStr += "<th colspan='3' style='text-align: center; width: 360px;'>Action</th>";
            tmpStr += "</tr>";
            tmpStr += "</thead>";
            tmpStr += "<tbody id='myTable2'>";
            $.each(itr["listCategory"], function () {
                tmpStr += "<tr class='clickable-row' data-href='#' style='cursor: pointer;'>";
                tmpStr += "<td>" + this['categoryName'] + "</td>";
                tmpStr += "<td>" + this['categoryDescription'] + "</td>";
                tmpStr += "<td>" + this['topicID'] + "</td>";
                tmpStr += "<td>" + this['accountEmail'] + "</td>";
                tmpStr += "<td>" + this['dateAdded'] + "</td>";
                tmpStr += "<td style='width: 120px;'><button class='btn btn-success'>Detail</button></td>";
                tmpStr += "<td style='width: 120px;'><button value='" + this['categoryID'] + "' class='btn btn-primary updateCategoryBtn'>Update</button></td>";
                tmpStr += "<td style='width: 120px;'><button value='" + this['categoryID'] + "' class='btn deleteCategoryBtn btn-danger'>Delete</button></td>";
                tmpStr += "</tr>";
            });
            tmpStr += "</tbody>";
            tmpStr += "</table>";
            tmpStr += "</div>";
            tmpStr += "<div style='text-align: center;'>";
            tmpStr += "<a class='btn btn-primary' data-toggle='modal' data-target='#modal_add'>Add new</a>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            $("#showTable").html(tmpStr);
            tmpStr = "";
            tmpStr += "<div class='modal-dialog modal-lg' role='document'>";
            tmpStr += "<div class='modal-content'>";
            tmpStr += "<form id='addCategoryForm' onsubmit='addCategory();' method='POST' return false>";
            tmpStr += "<div class='modal-header'>";
            tmpStr += "<h3 class='modal-title text-info' id='exampleModalLongTitle'>Add New Category</h3>";
            tmpStr += "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>";
            tmpStr += "<span aria-hidden='true'>&times;</span>";
            tmpStr += "</button>";
            tmpStr += "</div>";
            tmpStr += "<div class='modal-body'>";
            tmpStr += "<div class='container-fluid'>";
            tmpStr += "<div class='row'>";
            tmpStr += "<div class='col-12'>";
            tmpStr += "<div class='input-group mb-3'>";
            tmpStr += "<div class='input-group-prepend'>";
            tmpStr += "<label class='input-group-text' for='inputGroupSelect01'>Topic</label>";
            tmpStr += "</div>";
            tmpStr += "<select class='custom-select selectUI' id='topicID'>";
            tmpStr += "<option>Please choose a topic</option>"
            $.each(itr['listTopic'], function () {
                tmpStr += "<option value='" + this['topicID'] + "'>" + this['topicName'] + "</option>";
            });
            tmpStr += "</select>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "<div class='row'>";
            tmpStr += "<div class='col-12'>";
            tmpStr += "<div class='input-group mb-3'>";
            tmpStr += "<div class='input-group-prepend'>";
            tmpStr += "<span class='input-group-text' id='basic-addon1'>Name</span>";
            tmpStr += "</div>";
            tmpStr += "<input type='text' class='form-control' name='categoryName' id='categoryName' aria-label='Categoryname' aria-describedby='basic-addon1' required autocomplete='off'>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "<div class='row'>";
            tmpStr += "<div class='col-12'>";
            tmpStr += "<div class='input-group mb-3'>";
            tmpStr += "<div class='input-group-prepend'>";
            tmpStr += "<span class='input-group-text'>Description</span>";
            tmpStr += "</div>";
            tmpStr += "<textarea class='form-control' name='categoryDescription' id='categoryDescription' aria-label='With textarea' style='text-rendering: auto;' required></textarea>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "<div class='row'>";
            tmpStr += "<div class='col-12'>";
            tmpStr += "<div class='input-group mb-3'>";
            tmpStr += "<div class='input-group-prepend'>";
            tmpStr += "<label class='input-group-text' for='inputGroupSelect01'>Moderator</label>";
            tmpStr += "</div>";
            tmpStr += "<select class='custom-select selectUI' id='moderatorEmail'>";
            tmpStr += "</select>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "<div class='modal-footer'>";
            tmpStr += "<button type='button' class='btn btn-secondary btn-jump' data-dismiss='modal'>Close</button>";
            tmpStr += "<button type='submit' class='btn btn-primary btn-jump' id='submitForm1'>ADD</button>";
            tmpStr += "</div>";
            tmpStr += "</form>";
            tmpStr += "</div>";
            tmpStr += "</div>";
//            tmpStr += "<script type='text/javascript' src='include/resources/js/dropdown.js'>";
            $("#modal_add").html(tmpStr);
            tmpStr = "";
            tmpStr += "<div class='modal-dialog modal-lg' role='document'>";
            tmpStr += "<div class='modal-content'>";
            tmpStr += "<form id='updateCategoryForm' onsubmit='' method='POST' return false>";
            tmpStr += "<div class='modal-header'>";
            tmpStr += "<h3 class='modal-title text-info' id='exampleModalLongTitle'>Update Category</h3>";
            tmpStr += "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>";
            tmpStr += "<span aria-hidden='true'>&times;</span>";
            tmpStr += "</button>";
            tmpStr += "</div>";
            tmpStr += "<div class='modal-body'>";
            tmpStr += "<div class='container-fluid'>";
            tmpStr += "<div class='row'>";
            tmpStr += "<div class='col-12'>";
            tmpStr += "<div class='input-group mb-3'>";
            tmpStr += "<div class='input-group-prepend'>";
            tmpStr += "<label class='input-group-text' for='inputGroupSelect01'>Topic</label>";
            tmpStr += "</div>";
            tmpStr += "<select class='custom-select selectUI' id='topicID1'>";
            tmpStr += "</select>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "<div class='row'>";
            tmpStr += "<div class='col-12'>";
            tmpStr += "<div class='input-group mb-3'>";
            tmpStr += "<div class='input-group-prepend'>";
            tmpStr += "<span class='input-group-text' id='basic-addon1'>Name</span>";
            tmpStr += "</div>";
            tmpStr += "<input type='text' class='form-control' name='categoryName' id='categoryName1' aria-label='Categoryname' aria-describedby='basic-addon1' required autocomplete='off'>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "<div class='row'>";
            tmpStr += "<div class='col-12'>";
            tmpStr += "<div class='input-group mb-3'>";
            tmpStr += "<div class='input-group-prepend'>";
            tmpStr += "<span class='input-group-text'>Description</span>";
            tmpStr += "</div>";
            tmpStr += "<textarea class='form-control' name='categoryDescription' id='categoryDescription1' aria-label='With textarea' style='text-rendering: auto;' required></textarea>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "<div class='row'>";
            tmpStr += "<div class='col-12'>";
            tmpStr += "<div class='input-group mb-3'>";
            tmpStr += "<div class='input-group-prepend'>";
            tmpStr += "<label class='input-group-text' for='inputGroupSelect01'>Moderator</label>";
            tmpStr += "</div>";
            tmpStr += "<select class='custom-select selectUI' id='moderatorEmail1'>";
            tmpStr += "</select>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "<div class='modal-footer'>";
            tmpStr += "<button type='button' class='btn btn-secondary btn-jump' data-dismiss='modal'>Close</button>";
            tmpStr += "<button type='submit' class='btn btn-primary btn-jump' id='submitForm2'>ADD</button>";
            tmpStr += "</div>";
            tmpStr += "</form>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            $("#modal_update").html(tmpStr);
        }
    });
}
function loadThread()
{
    $.ajax({
        type: "GET",
        url: "adminLoadThreadData",
        success: function (itr) {
            var tmpStr = "<div class='tab-pane' id='listThread' role='tabpanel' aria-labelledby='manageTopic'>";
            tmpStr += "<h3 style='text-align: center;'>Manage thread</h3>";
            tmpStr += "<input class='form-control' id='myInput2' type='text' placeholder='Type something to search..' label='searchbar' onkeyup='searchData();'>";
            tmpStr += "<div style='text-align: center;' id='msg'>";
            tmpStr += "</div>";
            tmpStr += "<div class='scroll-table'>";
            tmpStr += "<table class='table table-hover table-responsive-sm fixed_header table-borderless table-fixed mb-0' id='ddj2' cellspacing='0' width='100%'>";
            tmpStr += "<thead class='thead-light fixed_thead'>";
            tmpStr += "<tr>";
            tmpStr += "<th onclick='sortTable(0)'>Thread name</th>";
            tmpStr += "<th onclick='sortTable(1)'>Thread description</th>";
            tmpStr += "<th onclick='sortTable(2)'>Category ID</th>";
            tmpStr += "<th onclick='sortTable(3)'>Added date</th>";
            tmpStr += "<th colspan='3' style='text-align: center; width: 360px;'>Action</th>";
            tmpStr += "</tr>";
            tmpStr += "</thead>";
            tmpStr += "<tbody id='myTable2'>";
            $.each(itr["listThread"], function () {
                tmpStr += "<tr class='clickable-row' data-href='#' style='cursor: pointer;'>";
                tmpStr += "<td>" + this['threadName'] + "</td>";
                tmpStr += "<td>" + this['threadDescription'] + "</td>";
                tmpStr += "<td>" + this['categoryID'] + "</td>";
                tmpStr += "<td>" + this['dateAdded'] + "</td>";
                tmpStr += "<td style='width: 120px;'><a href='#' class='btn btn-success'>Detail</a></td>";
                tmpStr += "<td style='width: 120px;'><a href='#' class='btn btn-primary'>Update</a></td>";
                tmpStr += "<td style='width: 120px;'><a href='#' class='btn btn-danger'>Delete</a></td>";
                tmpStr += "</tr>";
            });
            tmpStr += "</tbody>";
            tmpStr += "</table>";
            tmpStr += "</div>";
            tmpStr += "<div style='text-align: center;'>";
            tmpStr += "<a class='btn btn-primary' data-toggle='modal' data-target='#modal_add'>Add new</a>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            $("#showTable").html(tmpStr);
            tmpStr = "";
            tmpStr += "<div class='modal-dialog modal-lg' role='document'>";
            tmpStr += "<div class='modal-content'>";
            tmpStr += "<form id='addCategoryForm' return false>";
            tmpStr += "<div class='modal-header'>";
            tmpStr += "<h3 class='modal-title text-info' id='exampleModalLongTitle'>Add New Thread</h3>";
            tmpStr += "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>";
            tmpStr += "<span aria-hidden='true'>&times;</span>";
            tmpStr += "</button>";
            tmpStr += "</div>";
            tmpStr += "<div class='modal-body'>";
            tmpStr += "<div class='container-fluid'>";
            tmpStr += "<div class='row'>";
            tmpStr += "<div class='col-12'>";
            tmpStr += "<div class='input-group mb-3'>";
            tmpStr += "<div class='input-group-prepend'>";
            tmpStr += "<label class='input-group-text' for='inputGroupSelect01'>Topic</label>";
            tmpStr += "</div>";
            tmpStr += "<select class='custom-select selectUI' id='topicID1' required>";
            tmpStr += "<option>Please choose a topic</option>";
            $.each(itr['listTopic'], function ()
            {
                tmpStr += "<option value='" + this['topicID'] + "'>" + this['topicName'] + "</option>";
            });
            tmpStr += "</select>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "<div class='row'>";
            tmpStr += "<div class='col-12'>";
            tmpStr += "<div class='input-group mb-3'>";
            tmpStr += "<div class='input-group-prepend'>";
            tmpStr += "<label class='input-group-text' for='inputGroupSelect01'>Category</label>";
            tmpStr += "</div>";
            tmpStr += "<select class='custom-select selectUI' id='categoryID' required>";
            tmpStr += "<option>Please choose a topic</option>"
            tmpStr += "</select>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "<div class='row'>";
            tmpStr += "<div class='col-12'>";
            tmpStr += "<div class='input-group mb-3'>";
            tmpStr += "<div class='input-group-prepend'>";
            tmpStr += "<span class='input-group-text' id='basic-addon1'>Name</span>";
            tmpStr += "</div>";
            tmpStr += "<input type='text' class='form-control' name='categoryName' id='categoryName' aria-label='Categoryname' aria-describedby='basic-addon1' required>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "<div class='row'>";
            tmpStr += "<div class='col-12'>";
            tmpStr += "<div class='input-group'>";
            tmpStr += "<div class='input-group-prepend'>";
            tmpStr += "<span class='input-group-text'>Description</span>";
            tmpStr += "</div>";
            tmpStr += "<textarea class='form-control' name='categoryDescription' id='categoryDescription' aria-label='With textarea' style='text-rendering: auto;' required></textarea>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            tmpStr += "<div class='modal-footer'>";
            tmpStr += "<button type='button' class='btn btn-secondary btn-jump' data-dismiss='modal'>Close</button>";
            tmpStr += "<button type='submit' class='btn btn-primary btn-jump' id='submitForm1'>ADD</button>";
            tmpStr += "</div>";
            tmpStr += "</form>";
            tmpStr += "</div>";
            tmpStr += "</div>";
//            tmpStr += "<script type='text/javascript' src='include/resources/js/dropdown.js'>";
            $("#modal_add").html(tmpStr);
        }
    });
}
function loadPost()
{
    $.ajax({
        type: "GET",
        url: "adminLoadPostData",
        success: function (itr) {
            var tmpStr = "<div class='tab-pane' id='listPost' role='tabpanel' aria-labelledby='managePost'>";
            tmpStr += "<h3 style='text-align: center;'>Manage post</h3>";
            tmpStr += "<input class='form-control' id='myInput2' type='text' placeholder='Type something to search..' label='searchbar' onkeyup='searchData();'>";
            tmpStr += "<div style='text-align: center;' id='msg'>";
            tmpStr += "</div>";
            tmpStr += "<div class='scroll-table'>";
            tmpStr += "<table class='table table-hover table-responsive-sm fixed_header table-borderless table-fixed mb-0' id='ddj2' cellspacing='0' width='100%'>";
            tmpStr += "<thead class='thead-light fixed_thead'>";
            tmpStr += "<tr>";
            tmpStr += "<th onclick='sortTable(0)'>Post title</th>";
            tmpStr += "<th onclick='sortTable(1)' style='width: 220px;'>Posted by</th>";
            tmpStr += "<th onclick='sortTable(2)'>Posted date</th>";
            tmpStr += "<th onclick='sortTable(3)'>Status</th>";
            tmpStr += "<th onclick='sortTable(4)'>Thread</th>";
            tmpStr += "<th colspan='3' style='text-align: center; width: 360px;'>Action</th>";
            tmpStr += "</tr>";
            tmpStr += "</thead>";
            tmpStr += "<tbody id='myTable2'>";
            $.each(itr["listPost"], function () {
                tmpStr += "<tr class='clickable-row' data-href='#' style='cursor: pointer;'>";
                tmpStr += "<td>" + this['postTitle'] + "</td>";
                tmpStr += "<td style='width: 220px;'>" + this['accountEmail'] + "</td>";
                tmpStr += "<td>" + this['dateAdded'] + "</td>";
                tmpStr += "<td>";
                if (this['status'] == 1)
                {
                    tmpStr += "Approved";
                } else
                {
                    tmpStr += "Pending";
                }
                tmpStr += "</td>";
                tmpStr += "<td>" + this['threadID'] + "</td>";
                tmpStr += "<td style='width: 120px;'><a href='#' class='btn btn-success'>Detail</a></td>";
                tmpStr += "<td style='width: 120px;'><a href='#' class='btn btn-primary'>Update</a></td>";
                tmpStr += "<td style='width: 120px;'><a href='#' class='btn btn-danger'>Delete</a></td>";
                tmpStr += "</tr>";
            });
            tmpStr += "</tbody>";
            tmpStr += "</table>";
            tmpStr += "</div>";
            tmpStr += "<div style='text-align: center;'>";
            tmpStr += "<a class='btn btn-primary' href='CreateNewPost'>Add new</a>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            $("#showTable").html(tmpStr);
        }
    });
}
function loadUser()
{
    $.ajax({
        type: "GET",
        url: "adminLoadUserData",
        success: function (itr) {
            var tmpStr = "<div class='tab-pane' id='listPost' role='tabpanel' aria-labelledby='managePost'>";
            tmpStr += "<h3 style='text-align: center;'>Manage user</h3>";
            tmpStr += "<input class='form-control' id='myInput2' type='text' placeholder='Type something to search..' label='searchbar' onkeyup='searchData();'>";
            tmpStr += "<div style='text-align: center;' id='msg'>";
            tmpStr += "</div>";
            tmpStr += "<div class='scroll-table'>";
            tmpStr += "<table class='table table-hover table-responsive-sm fixed_header table-borderless table-fixed mb-0' id='ddj2' cellspacing='0' width='100%'>";
            tmpStr += "<thead class='thead-light fixed_thead'>";
            tmpStr += "<tr>";
            tmpStr += "<th onclick='sortTable(0)' style='width: 220px;'>Account email</th>";
            tmpStr += "<th onclick='sortTable(1)'>Full name</th>";
            tmpStr += "<th onclick='sortTable(2)'>Role</th>";
            tmpStr += "<th onclick='sortTable(3)'>Status</th>";
            tmpStr += "<th onclick='sortTable(4)'>Date added</th>";
            tmpStr += "<th colspan='3' style='text-align: center; width: 360px;'>Action</th>";
            tmpStr += "</tr>";
            tmpStr += "</thead>";
            tmpStr += "<tbody id='myTable2'>";
            $.each(itr["listAllUser"], function () {
                tmpStr += "<tr class='clickable-row' data-href='#' style='cursor: pointer;'>";
                tmpStr += "<td style='width: 220px;'>" + this['accountEmail'] + "</td>";
                tmpStr += "<td>" + this['userFullName'] + "</td>";
                tmpStr += "<td>";
                if (this['role'] == 2)
                {
                    tmpStr += "Moderator";
                } else
                {
                    tmpStr += "Member";
                }
                tmpStr += "</td>";
                tmpStr += "<td>";
                if (this['status'] == 1)
                {
                    tmpStr += "Available";
                } else
                {
                    tmpStr += "Block";
                }
                tmpStr += "</td>";
                tmpStr += "<td>" + this['dateAdded'] + "</td>";
                tmpStr += "<td style='width: 120px;'><a href='#' class='btn btn-success'>Detail</a></td>";
                tmpStr += "<td style='width: 120px;'><a href='#' class='btn btn-primary'>Update</a></td>";
                tmpStr += "<td style='width: 120px;'><a href='#' class='btn btn-danger'>Delete</a></td>";
                tmpStr += "</tr>";
            });
            tmpStr += "</tbody>";
            tmpStr += "</table>";
            tmpStr += "</div>";
            tmpStr += "<div style='text-align: center;'>";
            tmpStr += "<a class='btn btn-primary' href='CreateNewPost'>Add new</a>";
            tmpStr += "</div>";
            tmpStr += "</div>";
            $("#showTable").html(tmpStr);
        }
    });
}
function addTopic()
{
    var topicName = document.getElementById("topicName").value;
    var topicDescription = document.getElementById("topicDescription").value;
    $.ajax({
        type: "POST",
        url: "adminAddTopic?topicName=" + topicName + "&topicDescription=" + topicDescription,
        success: function () {
            alert("Successfully add new topic.");
            loadTopic();
            $("#modal_add").modal("hide");
        }
    });
    event.preventDefault();
}
function signOut() {
    var check = confirm("Do you want to log out?");
    if (check)
    {
        expiredToken();
    }
}
function expiredToken() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        window.location = 'logOut.action';
    });
}
function onLoad() {
    gapi.load('auth2', function () {
        gapi.auth2.init();
    });
}
$(document).ready(function () {
    loadPost();
});
$(document).ajaxComplete(function () {
    $(".updateTopicBtn").click(function () {
        var topicID = $(this).val();
        $.ajax({
            type: "POST",
            url: "adminDeleteTopic?topicID=" + topicID,
            success: function () {
                alert("Successfully delete topic.");
                loadTopic();
            },
            error: function () {
                alert("Cannot delete this topic");
                loadTopic();
            }
        });
    });
});
$(document).ajaxComplete(function () {
    $(".deleteTopicBtn").click(function () {
        var check = confirm("Do you want to delete this topic?");
        if (check)
        {
            var topicID = $(this).val();
            $.ajax({
                type: "POST",
                url: "adminDeleteTopic?topicID=" + topicID,
                success: function () {
                    alert("Successfully delete topic.");
                    loadTopic();
                },
                error: function () {
                    alert("Cannot delete this topic");
                    loadTopic();
                }
            });
        }
    });
});
$(document).ajaxComplete(function () {
    $(".deleteCategoryBtn").click(function () {
        var check = confirm("Do you want to delete this category?");
        if (check)
        {
            var categoryID = $(this).val();
            $.ajax({
                type: "POST",
                url: "adminDeleteCategory?categoryID=" + categoryID,
                success: function () {
                    alert("Successfully delete category.");
                    loadCategory();
                },
                error: function () {
                    alert("Cannot delete this category.");
                    loadCategory();
                }
            });
        }
    });
});
//$(document).ajaxComplete(function () {
//    $(".updateCategoryBtn").click(function () {
//        var categoryID = $(this).val();
//        $.ajax({
//            type: "GET",
//            url: "adminGetCategoryDetail?categoryID=" + categoryID,
//            success: function (itr) {
//                var topicID = this['topic'].getTopicID();
//                alert(topicID);
//            }
//        });
//    });
//});
function addCategory()
{
    var categoryName = document.getElementById("categoryName").value;
    var categoryDescription = document.getElementById("categoryDescription").value;
    var topicID = document.getElementById("topicID").value;
    var accountEmail = document.getElementById("moderatorEmail").value;
    $.ajax({
        type: "POST",
        url: "adminAddCategory?categoryName=" + categoryName + "&categoryDescription=" + categoryDescription + "&topicID=" + topicID + "&accountEmail=" + accountEmail,
        success: function () {
            alert("Successfully add new category.");
            loadCategory();
            $("#modal_add").modal("hide");
        }
    });
    event.preventDefault();
}
$(document).ajaxComplete(function ()
{
    $("#topicID1").on("change", function () {
        var topicID = $("#topicID1").val();
        $.ajax({
            type: "POST",
            url: "adminGetCategoryInTopic?topicID=" + topicID,
            success: function (itr) {
                var tmpStr = "";
                $.each(itr['listCategory1'], function ()
                {
                    tmpStr += "<option value='" + this['categoryID'] + "'>" + this['categoryName'] + "</option>";
                });
                $("#categoryID").html(tmpStr);
            }
        });
    });
});
//$(document).ready(function () {
//    var x = $("#test").val();
//    if (x == "")
//    {
//        alert("Your session is expired. Please login again.")
//        gapi.auth2.getAuthInstance().signOut();
//        window.location='logOut';
//    }
//});