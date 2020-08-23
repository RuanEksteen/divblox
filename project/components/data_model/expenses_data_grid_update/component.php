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
        $ExpensesObjArr = Expenses::LoadArrayByCategory($EntityToUpdateObj->Category);
        $CategoryObjArr->TotalExpenses = 0;
        foreach ($ExpensesObjArr as $ExpensesObj) {
            $CategoryObjArr->TotalExpenses += $ExpensesObj->ExpenseValue;
        }

        $CategoryObjArr->Save();
        if (is_null($EntityToUpdateObj)) {
            return;
        }
    }
    public function doBeforeDeleteActions($EntityToUpdateObj = null) {
        $CategoryObjArr = Category::LoadById($EntityToUpdateObj->Category);
        $ExpensesObjArr = Expenses::LoadArrayByCategory($EntityToUpdateObj->Category);
        foreach ($ExpensesObjArr as $ExpensesObj) {
            if ($EntityToUpdateObj->Id == $ExpensesObj->Id) {
                $CategoryObjArr->TotalExpenses -= $ExpensesObj->ExpenseValue;
            }
        }

        $CategoryObjArr->Save();
        if (is_null($EntityToUpdateObj)) {
            return;
        }
    }
}
$ComponentObj = new ExpensesController("expenses_data_grid_update");
?>