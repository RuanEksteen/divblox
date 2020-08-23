<?php
require("../../../../divblox/divblox.php");
class ExpensesDataGridController extends ProjectComponentController {
    public function __construct($ComponentNameStr = 'Component') {
        parent::__construct($ComponentNameStr);
    }
}
$ComponentObj = new ExpensesDataGridController("expenses_data_grid");
?>