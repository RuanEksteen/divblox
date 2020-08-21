<?php
require("../../../../divblox/divblox.php");
class ExpensesDetailController extends ProjectComponentController {
    public function __construct($ComponentNameStr = 'Component') {
        parent::__construct($ComponentNameStr);
    }
}
$ComponentObj = new ExpensesDetailController("expenses_detail");
?>