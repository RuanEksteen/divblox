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
    public function doBeforeDeleteActions($EntityToUpdateObj = null) {
        $ExpensesObjArr = Expenses::LoadArrayByCategory($EntityToUpdateObj->Category);
        $newTotal = 0;
        foreach ($ExpensesObjArr as $ExpensesObj) {
            if ($ExpensesObj->Id != $EntityToUpdateObj->Id)
            $newTotal += $ExpensesObj->ExpenseValue;
        }
        $CategoryObj = Category::LoadById($EntityToUpdateObj->Category);
        $CategoryObj->TotalExpenses = $newTotal;
        $CategoryObj->Save();
    }
}
$ComponentObj = new ExpensesController("expenses_crud_update");
?>