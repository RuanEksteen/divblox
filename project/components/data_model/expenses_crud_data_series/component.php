<?php
require("../../../../divblox/divblox.php");
class ExpensesController extends EntityDataSeriesComponentController {
    protected $EntityNameStr = "Expenses";
    protected $IncludedAttributeArray = ["ExpenceName","ExpenseValue",];
    protected $IncludedRelationshipArray = ["Category" => "CategoryName",];
    protected $ConstrainByArray = [];
    protected $RequiredAttributeArray = [];
    protected $NumberValidationAttributeArray = [];

    public function __construct($ComponentNameStr = 'Component') {
        parent::__construct($ComponentNameStr);
    }
}
$ComponentObj = new ExpensesController("expenses_crud_data_series");
?>