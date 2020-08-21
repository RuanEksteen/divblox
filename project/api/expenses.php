<?php
require("../../divblox/divblox.php");
require(PROJECT_ROOT_STR.'/api/data_model/ApiCrudExpenses.class.php');
ApiCrudExpenses::initCrudApi("Expenses");
ApiCrudExpenses::doApiOperationDefinitions();
ApiCrudExpenses::executeCrudApi();

// Operations
function createExpenses() {
    ApiCrudExpenses::create();
}
function retrieveExpenses() {
    ApiCrudExpenses::retrieve();
}
function updateExpenses() {
    ApiCrudExpenses::update();
}
function deleteExpenses() {
    ApiCrudExpenses::delete();
}
function listExpenses() {
    ApiCrudExpenses::retrieveList();
}
?>
