<?php
require("../../../../divblox/divblox.php");
class ExpensesController extends EntityInstanceComponentController {
    protected $EntityNameStr = "Expenses";
    protected $IncludedAttributeArray = ["ExpenceName","ExpenseValue",];
    protected $IncludedRelationshipArray = ["Category" => "CategoryName",];
    protected $ConstrainByArray = [];
    protected $RequiredAttributeArray = [];
    protected $NumberValidationAttributeArray = [];

    public function __construct($ComponentNameStr = 'Component') {
        parent::__construct($ComponentNameStr);
    }
    public function doAfterSaveActions($EntityToUpdateObj = null) {
        $CategoryObjArr = Category::LoadById($EntityToUpdateObj->Category);
        $CategoryObjArr->TotalExpenses += $EntityToUpdateObj->ExpenseValue;
        $CategoryObjArr->Save();
        if (is_null($EntityToUpdateObj)) {
            return;
        }
    }
}
$ComponentObj = new ExpensesController("expenses_crud_create");
?>